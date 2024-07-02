/**
 * JZ12
 * 矩阵中的路径
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const sol1 = (board, word) => {
    // n 为列，m 为行
    let m = board.length, n = board[0].length, wordLong = word.length;
    // 当前矩阵指针
    let pointM = 0, pointN = 0;
    // 已被访问的字符的坐标
    let visited = [[1, 2]];
    // 起点的所有可能
    let start = [];
    for (let i = 0; i < wordLong; i++) {
        // 起点
        if (i === 0) {
            for (let a = pointM; a < m; a++) {
                for (let b = pointN; b < n; b++) {
                    if (word[0] === board[a][b]) start.push([a, b]);
                }
            }
            if (start.length === 0) return false;
        }
    }
    /**
     * 判断目标字符是否存在
     * @param {String} targetWord 目标字符
     */
    const searchWord = (targetWord) => {
        let wordList = nextWordList();
        let long = visited.length;
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][2] === targetWord) {
                visited.push([wordList[i][0], wordList[i][1]]);
                break;
            }
        }
        if (visited.length > long) return true;
        return false;
    };
    /**
     * 周边值数组（已排除已访问过的字符）
     * @returns 「0,1,2,3」 依次对应 「上,右,下,左」，若无则记录 null
     */
    const nextWordList = () => {
        // 当前最后一个值的坐标
        let mn = visited.pop();
        // 「0,1,2,3」 依次对应 「上,右,下,左」，若无则记录 null
        let wordList = [];
        // 右
        if ((mn[1] + 1) > (n - 1)) wordList[1] = null;
        else wordList[1] = [mn[0], mn[1] + 1];
        // 左
        if (mn[1] === 0) wordList[3] = null;
        else wordList[3] = [mn[0], mn[1] - 1];
        // 下
        if ((mn[0] + 1) > (m - 1)) wordList[2] = null;
        else wordList[2] = [mn[0] + 1, mn[1]];
        // 上
        if (mn[0] === 0) wordList[0] = null;
        else wordList[0] = [mn[0] - 1, mn[1]];
        visited.push(mn);
        wordList.forEach((e, i) => {
            for (let j = 0; j < visited.length; j++) {
                if (e && e.toString() === visited[j].toString()) {
                    wordList[i] = null;
                    break;
                }
            }
            // 存储
            if (wordList[i]) wordList[i].push(board[`${e[0]}`][`${e[1]}`]);
        });
        return wordList;
    };
};
console.log(sol1([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'CCE'));