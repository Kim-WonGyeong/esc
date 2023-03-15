function check() {
    for (var i = 1; i <= 12; i++) {
      if (document.getElementById("cbx" + i).querySelector('input[type="radio"]:checked') === null) {
        alert("모든 질문에 답하시지 않았습니다.");
        return;
      }
    }
    alert("결과 페이지로 넘어감니다.");
  }