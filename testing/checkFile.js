'use strict';
const fs = require('fs');
const path = require('path');
// atimeMs 最近一次访问文件的时间戳 ms
// mtimeMs 最近一次修改的时间戳 ms
// ctimeMs 最近一次状态变动的时间戳 ms
// birthtimeMs 创建时间的时间戳 ms

// atime 最近一次访问文件的时间戳 date
// mtime 最近一次修改的时间戳 date
// ctime 最近一次状态变动的时间戳 date
// birthtime 创建时间的时间戳 date
/**
 * 遍历文件夹
 * @param {String} dirPath 文件夹根目录
 */
const listDir = (dirPath, fileArr) => {
    // fileArr 文件夹文件数组
    // 读取文件夹
    let dirTree = fs.readdirSync(dirPath);
    dirTree.forEach(item => {
        let itemPath = path.join(dirPath,item);
        let itemTree = fs.statSync(itemPath);
        if (itemTree.isDirectory()) {
            listDir(itemPath, fileArr);
        } else {
            fileArr.push(itemPath);
        }
    });
};
const checkUpdateDate = () => {
    // 文件夹根目录
    // let dirPath = path.resolve('./testing');
    let dirPath = path.resolve('./');
    let fileArr = [];
    listDir(dirPath, fileArr);
    // console.log("fileArr: ", fileArr);
    let deleteArr = [];
    let fileSize = 0;
    fileArr.forEach((element, index) => {
        let fileStat = fs.statSync(element);
        // 早于时间限的文件移动到对象存储，并删除本地文件
        const limitDate = new Date('2022-06-29 12:00:00').getTime();
        if (fileStat.mtimeMs < limitDate) {
            deleteArr.push(element);
            // insert oss
            // fs.unlinkSync(filePath);
        }
        fileSize += fileStat.size;
    });
    fileArr = [];
    console.log("fileSize: ", fileSize/(1024));
    console.log("deleteArr: ", deleteArr.length);
    console.log("deleteArr: ", deleteArr);
};
checkUpdateDate();

console.log('4ee32fc292f34055'.length);