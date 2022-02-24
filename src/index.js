
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
  if (matrix != undefined) {
    let u = 0
    for (let i = 0; i < matrix.length; i++) {
      if (i > 0 && i % 2 != 0) {
        matrix[i] = matrix[i].reverse();
      }
      for (let j = 0; j < matrix[i].length; j++) {
        arr[u] = matrix[i][j];
        u++;
      }
    }
  }
  return arr;
}
