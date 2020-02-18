/**
 * 하나 빼기
 *
 * 문자열 두 개가 주어졌을 때, 문자열을 같게 만들기 위한
 * 편집 횟수가 1회 이내 인지 확인 하는 함수
 *
 */

function onEditAway(str1, str2) {
  if (str1.length === str2.length) {
    return onEditReplace(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return onEditInsert(str1, str2);
  } else if (str1.length - 1 === str2.length) {
    return onEditInsert(str1, str2);
  }

  return false;
}

function onEditReplace(str1, str2) {
  let diff = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (diff) {
        return false;
      }
      diff = true;
    }
  }

  return true;
}

function onEditInsert(str1, str2) {
  let idx1 = 0;
  let idx2 = 0;
  while (idx2 < str2.length && idx1 < str1.length) {
    if (str1[idx1] !== str2[idx2]) {
      if (idx2 !== idx1) {
        return false;
      }
      idx2++;
    } else {
      idx1++;
      idx2++;
    }
  }

  return true;
}

function onEditAway2(str1, str2) {
  /** 길이체크 */
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  /** 길이가 짧은 문자열과 긴 문자열 찾기 */
  const s1 = str1.length < str2.length ? str1 : str2;
  const s2 = str1.length < str2.length ? str2 : str1;

  let idx1 = 0;
  let idx2 = 0;
  let diff = false;

  while (idx2 < s2.length && idx1 < s1.length) {
    if (s1[idx1] !== s2[idx2]) {
      if (diff) {
        return false;
      }
      diff = true;
      // 교체의 경우 짧은 문자열의 포인터 증가
      if (s1.length === s2.length) {
        idx1++;
      }
    } else {
      // 동일하다면 짧은 문자열의 포인터 증가
      idx1++;
    }
    // 긴 문자열의 포인터는 언제나 증가
    idx2++;
  }

  return true;
}

console.log(onEditAway("apple", "appl"));
console.log(onEditAway("apple", "abcde"));
console.log(onEditAway2("apple", "appl"));
console.log(onEditAway2("apple", "abcde"));
