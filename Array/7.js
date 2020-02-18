/**
 * 행령 회전
 *
 * 위쪽 모서리는 오른쪽 모서리로,
 * 오른쪽 모서리는 아래쪽 모서리로,
 * 아래쪽 모서리는 왼쪽 모서리로,
 * 왼쪽 모서리는 위쪽 모러시로 옮기는 방식
 */

function rotate(matrix) {
  if (matrix.length === 0 || matrix.length != matrix[0].length) {
    return false;
  }

  let n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i]; // 윗 부분을 저장해 놓는다.

      // 왼쪽 -> 위쪽
      matrix[first][i] = matrix[last - offset][first];

      // 아래쪽 -> 왼쪽
      matrix[last - offset][first] = matrix[last][last - offset];

      // 오른쪽 -> 아래쪽
      matrix[last][last - offset] = matrix[i][last];

      // 위쪽 -> 오른쪽
      matrix[i][last] = top; // 오른쪽 <- 미리 저장해 놓은 top
    }
  }

  return true;
}

const m = [
  [1, 1, 1, 2],
  [4, 1, 2, 2],
  [4, 4, 3, 2],
  [4, 3, 3, 3]
];

m.forEach(e => {
  console.log(e);
});
console.log("--------------");
rotate(m);
m.forEach(e => {
  console.log(e);
});
