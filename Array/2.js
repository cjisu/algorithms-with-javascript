/**
 * 순열 문제
 * 순열이라는 것은 서로가 문자열의 종류와 숫자가 같으면서 배열된 순서가 다른 것을 말한다
 * 1. 문자열의 길이가 같다면 정렬 후 값이 같은지 확인
 * 2. 문자열의 길이가 같다면 각 문자열의 등장 횟수가 같음
 */

function permutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return (
    str1
      .split("")
      .sort()
      .join("") ===
    str2
      .split("")
      .sort()
      .join("")
  );
}

function permutationWithCount(str1, str2) {
  let res = 0;

  if (str1.length !== str2.length) {
    return false;
  }

  const chars = [];
  for (let i = 0; i < str1.length; i++) {
    if (chars[str1[i]] === undefined) {
      chars[str1[i]] = 1;
    } else {
      chars[str1[i]] += 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (chars[str2[j]] === undefined) {
      return false;
    } else {
      chars[str2[j]] -= 1;
    }
  }

  Object.keys(chars).forEach(e => {
    res += chars[e];
  });

  return res === 0 ? true : false;
}

console.log(permutation("sun", "nsu"));
console.log(permutationWithCount("sunset", "tessun"));
