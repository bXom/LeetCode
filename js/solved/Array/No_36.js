'use strict';
/**
 * NO.36
 * 有效的数独
 * 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 注意：
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 空白格用 '.' 表示。
 * @param {character[][]} board
 * @return {boolean}
 */
const sol1 = (board) => {
    // 列合法
    let lineArr = [[]];
    // 行合法
    let rowArr = [[]];
    // 3X3合法
    let boxArr = [[]];
    // 横坐标、纵坐标、累计数量
    let index = 0;
    while (index < 81) {
        let y = parseInt(index / 9), x = index % 9, boxIndex = parseInt(y / 3) * 3 + parseInt(x / 3);
        index++;
        console.log(`x: ${x}`);
        console.log(`y: ${y}`);
        // console.log(`boxIndex: ${boxIndex}`);
        let val = board[y][x];
        console.log(`val: ${val}`);
        if (val === '.') continue;
        // console.log(`val: ${val}`);
        // rowArr
        // console.log(`rowArr: ${rowArr}`);
        if (!rowArr[y]) rowArr[y] = [];
        if (rowArr[y][val]) return false;
        rowArr[y][val] = 1;
        // lineArr
        // console.log(`lineArr: ${lineArr}`);
        if (!lineArr[x]) lineArr[x] = [];
        if (lineArr[x][val]) return false;
        lineArr[x][val] = 1;
        // 3X3
        // console.log(`boxArr: ${boxArr}`);
        if (!boxArr[boxIndex]) boxArr[boxIndex] = [];
        if (boxArr[boxIndex][val]) return false;
        boxArr[boxIndex][val] = 1;
    }
    return true;
};
console.log(sol1(
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","2",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

    // [["8","3",".",".","7",".",".",".","."]
    // ,["6",".",".","1","9","5",".",".","."]
    // ,[".","9","8",".",".",".",".","6","."]
    // ,["8",".",".",".","6",".",".",".","3"]
    // ,["4",".",".","8",".","3",".",".","1"]
    // ,["7",".",".",".","2",".",".",".","6"]
    // ,[".","6",".",".",".",".","2","8","."]
    // ,[".",".",".","4","1","9",".",".","5"]
    // ,[".",".",".",".","8",".",".","7","9"]]
));