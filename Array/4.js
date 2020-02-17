/**
 * 회문 순열 - Permutation Of Palindrome
 * 회문은 앞으로 읽으나 뒤로 읽으나 같은 문자열을 뜻 함
 * 회문의 순열인지 판단하기 위해선 어느 방향으로 읽어도
 * 같은 문자열이 되도록 만들 수 있는지 알아야 함
 *
 * 조건
 * - 모든 문자가 각각 짝수개 혹은 단 한개의 문자만 홀수 개
 *
 * 해법
 * #1 해시테이블을 사용해서 각 문자가 몇 번 등장했는지 센 후
 *    그 다음엔 해시테이블을 훑어가며 홀수 문자가 한 개 이상인지 확인
 * #2 #1번 해법과 유사하게 하지만 마지막에서 홀수 문자를 확인하는 것이 아닌
 *    루프를 돌면서 확인
 * #3 비트 벡터 이용, 00010000 에서 1을 뺀 값 00001111 AND 연산 후
 *    결과가 1이라면 해당 숫자는 정확히 한 비트만 1로 세팅
 */

function isPermutationOfPalindrome1(str) {
  const chars = [];
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]] === undefined) {
      chars[str[i]] = 1;
    } else {
      chars[str[i]] += 1;
    }
  }

  let cnt = 0;
  Object.keys(chars).forEach(c => {
    if (chars[c] % 2 === 1) {
      cnt += 1;
    }
  });

  return cnt <= 1 ? true : false;
}

function isPermutationOfPalindrome2(str) {
  const chars = [];
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]] === undefined) {
      chars[str[i]] = 1;
    } else {
      chars[str[i]] += 1;
    }
    if (chars[str[i]] % 2 === 1) {
      cnt++;
    } else {
      cnt--;
    }
  }

  return cnt <= 1 ? true : false;
}
