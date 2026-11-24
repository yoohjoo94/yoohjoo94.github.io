// 10주차 완성본 (11주차에서 수정하지 않는다)
function isValidId(id) {
  return /^[a-z0-9]{4,12}$/.test(id);
}

function isValidPassword(pw) {
  if (pw.length < 8) { return false; }
  if (!/[a-zA-Z]/.test(pw)) { return false; }
  if (!/[0-9]/.test(pw)) { return false; }
  return true;
}

function isSamePassword(pw, pw2) {
  return pw === pw2;
}

function getSignupMessage(id, pw, pw2) {
  if (!isValidId(id)) { return '아이디는 영문 소문자와 숫자 4~12자여야 합니다.'; }
  if (!isValidPassword(pw)) { return '비밀번호는 8자 이상이며 영문과 숫자를 모두 포함해야 합니다.'; }
  if (!isSamePassword(pw, pw2)) { return '비밀번호 확인이 일치하지 않습니다.'; }
  return '';
}
