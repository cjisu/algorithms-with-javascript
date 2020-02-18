/** 문자열 압축
 *
 * 반복되는 문자의 개수를 세는 방식의 압축 메서드
 * 압축문자열이 기존 문자열의 길이보다 길다면 기존 문자열을 반환
 */

function compressBad(str) {
  let result = str[0];
  let currentChar = str[0];
  let cnt = 1;

  for (let i = 1; i < str.length; i++) {
    if (currentChar !== str[i]) {
      currentChar = str[i];
      result += cnt + str[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  result += cnt;
  return result.length < str.length ? result : str;
}

console.log(compressBad("aaabbbccc"));
console.log(compressBad("aabcccaaaa"));
console.log(compressBad("abcdefghijk"));
