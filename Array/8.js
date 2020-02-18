/** Zero 행렬
 *
 * 행렬의 한 원소가 0일 경우, 해당 원소가 속한 행과 열의
 * 모든 원소를 0으로 설정하는 알고리즘
 */

function setZeros(matrix) {
  const row = new Array(matrix.length);
  const col = new Array(matrix[0].length);

  // 값이 0인 행과 열의 인덱스를 저장
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  // 행의 원소를 전부 0으로 바꾼다
  for (let i = 0; i < row.length; i++) {
    if (row[i]) {
      nullifyRow(matrix, i);
    }
  }

  // 열의 원소를 전부 0으로 바꾼다
  for (let j = 0; j < col.length; j++) {
    if (col[j]) {
      nullifyCol(matrix, j);
    }
  }
}

function nullifyRow(matrix, row) {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

function nullifyCol(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

const m = [
  [1, 1, 1, 2],
  [4, 0, 2, 2],
  [4, 4, 3, 2],
  [4, 3, 3, 3]
];

m.forEach(e => {
  console.log(e);
});
console.log("--------------");
setZeros(m);

m.forEach(e => {
  console.log(e);
});
