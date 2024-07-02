'use strict';
const path = require('path');
const fs = require('fs');
const searchNotInDB = () => {
    let fileData = fs.readFileSync(path.resolve('./testing/missUUID.json'), 'utf-8');
    let dbData = fs.readFileSync(path.resolve('./testing/before2022.json'), 'utf-8');
    let dbDataList = JSON.parse(dbData);
    // 文件夹 UUID 数据集 = 数据库uuid + 删除uuid
    let fileDataList = JSON.parse(fileData);
    // 数据库
    let dbUUIDList = {};
    let length = 0;
    let dbLength = 0;
    dbDataList.forEach(element => {
        dbLength++;
        dbUUIDList[`${element.UUID}`] = element;
    });
    let deleteFileUUID = [];
    let saveFileUUID = [];
    fileDataList.forEach(element => {
        length++;
        if(dbUUIDList[`${element.UUID}`]) {
            saveFileUUID.push({"UUID": element.UUID});
        } else {
            deleteFileUUID.push({"UUID": element.UUID});
        }
    });
    console.log("dbLength:", dbLength);
    console.log("fileDataList:", length);
    console.log("saveFileUUID:", saveFileUUID.length);
    console.log("deleteFileUUID:", deleteFileUUID.length);

    console.log("saveFileUUID:", JSON.stringify(saveFileUUID));
    console.log("deleteFileUUID:", JSON.stringify(deleteFileUUID));
};
searchNotInDB();