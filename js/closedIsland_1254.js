/**
 * NO.1254
 * 统计封闭岛屿的数目
 有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。
 我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。
 如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。
 请返回封闭岛屿的数目。
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = (grid) => {
    let row = grid.length;
    let line = grid[0].length;
    let boundary = [];
    for (let i = 0; i < row; i++) {
        let boundaryNode = [];
        boundaryNode.push(0);
        boundary.push(boundaryNode);
    }
    for (let i = 1; i < row - 1; i++) {
        for (let j = 1; j < line - 1; j++) {
            if (grid[i][j] === 0) {
                boundary[i].push(j);
            }
        }
    }
    for (let i = start[0]; i < row;) {

    }
};