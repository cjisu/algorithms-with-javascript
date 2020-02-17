/**
 * 문자열 중복체크
 *
 * 각 문자열을 char_list 딕셔너리에 저장 후
 * 이후 문자에 등장하면 중복, 아니면 마지막 문자까지 루프
 */

function isUniqueChars(str) {
  const char_list = [];
  for (let i = 0; i < str.length; i++) {
    if (char_list[str[i]] !== undefined) {
      return false;
    }
    char_list[str[i]] = true;
  }
  return true;
}

const s1 = "suset";
const s2 = "abcedfghijklmnopqrstuvxwyz";
const s3 = "noeul";
const s4 = "coco";
console.log(isUniqueChars(s1));
console.log(isUniqueChars(s2));
console.log(isUniqueChars(s3));
console.log(isUniqueChars(s4));
