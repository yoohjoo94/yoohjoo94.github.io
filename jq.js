// 12주차 실습: jQuery로 같은 화면 만들기 - 완성본 (교수용)

function showIdMessage() {
  var value = $('#userid').val();
  if (value === '' || isValidId(value)) {
    $('#userid-msg').text('');
  } else {
    $('#userid-msg').text('아이디는 영문 소문자와 숫자 4~12자여야 합니다.');
  }
}

function togglePassword() {
  if ($('#pw').attr('type') === 'password') {
    $('#pw').attr('type', 'text');
    $('#toggle-pw').text('숨기기');
  } else {
    $('#pw').attr('type', 'password');
    $('#toggle-pw').text('보기');
  }
}

function showPw2Message() {
  var pw = $('#pw').val();
  var pw2 = $('#pw2').val();
  var msg = $('#pw2-msg');
  if (pw2 === '' || isSamePassword(pw, pw2)) {
    msg.stop(true, true).fadeOut(200);
  } else {
    msg.text('비밀번호 확인이 일치하지 않습니다.').stop(true, true).fadeIn(200);
  }
}

function saveDraft(event) {
  event.preventDefault();
  var id = $('#userid').val();
  var pw = $('#pw').val();
  var pw2 = $('#pw2').val();
  var out = $('#save-msg');
  var msg = getSignupMessage(id, pw, pw2);
  if (msg !== '') {
    out.text(msg);
    return false;
  }
  try {
    localStorage.setItem('signupDraft', JSON.stringify({ userid: id }));
    out.text('아이디가 이 브라우저에 저장되었습니다. 비밀번호는 저장하지 않습니다.');
  } catch (e) {
    out.text('이 브라우저에서는 저장할 수 없습니다.');
  }
  return false;
}

// ----- 아래는 수정하지 않습니다 -----
$(function () {
  $('#userid').on('input', showIdMessage);
  $('#pw2').on('input', showPw2Message);
  $('#toggle-pw').on('click', togglePassword);
});
