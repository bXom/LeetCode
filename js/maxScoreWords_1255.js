/**
 * NO.1255
 * 得分最高的单词集合
 你将会得到一份单词表 words，一个字母表 letters （可能会有重复字母），以及每个字母对应的得分情况表 score。
 请你帮忙计算玩家在单词拼写游戏中所能获得的「最高得分」：能够由 letters 里的字母拼写出的 任意 属于 words 单词子集中，分数最高的单词集合的得分。
 单词拼写游戏的规则概述如下：
 玩家需要用字母表 letters 里的字母来拼写单词表 words 中的单词。
 可以只使用字母表 letters 中的部分字母，但是每个字母最多被使用一次。
 单词表 words 中每个单词只能计分（使用）一次。
 根据字母得分情况表score，字母 'a', 'b', 'c', ... , 'z' 对应的得分分别为 score[0], score[1], ..., score[25]。
 本场游戏的「得分」是指：玩家所拼写出的单词集合里包含的所有字母的得分之和。
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = (words, letters, score) => {
    // 拼出正确的可能结果，计算得分
    let test = letters;
    let wordLength = words.length;
    for (let i = 0; i < wordLength; i++) {
        let eachLength = words[i].length;
        for (let j = 0; j < eachLength; j++) {
            if (words[i][j] in test) {

            }
        }
    }
    // 比较不同结果得分
};
maxScoreWords(["dog", "cat", "dad", "good"], ["a", "a", "c", "d", "d", "d", "g", "o", "o"], [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
