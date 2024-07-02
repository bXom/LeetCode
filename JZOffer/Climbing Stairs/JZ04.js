/**
 * JZ04
 * 二维数组中的查找
 * 在一个二维数组array中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param {number} target
 * @param {number[][]} array
 */
// 右上角开始
const sol1 = (target, array) => {
    if (array.length < 1) return false;
    else if (array[0].length < 1) return false;
    const width = array[0].length, high = array.length;
    let widthL = width - 1, highL = 0;
    while (highL !== high && widthL !== -1) {
        if (array[highL][widthL] > target) widthL--;
        else if (array[highL][widthL] < target) highL++;
        else return true;
    }
    return false;
};
// 左下角开始
const sol2 = (target, array) => {
    if (array.length < 1) return false;
    else if (array[0].length < 1) return false;
    const width = array[0].length, high = array.length;
    let widthL = 0, highL = high - 1;
    while (highL !== -1 && widthL !== width) {
        if (array[highL][widthL] < target) widthL++;
        else if (array[highL][widthL] > target) highL--;
        else return true;
    }
    return false;

};
// console.log(sol2(7,[[1,2,8,9],[4,7,10,13]]));
/**
 * 因为是有序数组，通过找某些特殊位置的值与目标值比较来缩小查找的数组范围
 * 注意尽量保持二维数组的为连续的一块，切忌拆分为多块
 */