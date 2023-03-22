$('.burger-wrap').click(function() {
    $('body').toggleClass('nav-open'); 
  });
  
  $('.menu-cover').click(function() {
    $('body').removeClass('nav-open');
  });
  
  
  var loading = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled','disabled');
    setTimeout(function(){
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
    },1500);
  };
  
  var btns = document.querySelectorAll('button');
  for (var i=btns.length-1;i>=0;i--) {
    btns[i].addEventListener('click',loading);
  }
  
  function check() {
    for (var i = 1; i <= 12; i++) {
      if (document.getElementById("cbx" + i).querySelector('input[type="radio"]:checked') === null) {
        alert("모든 질문에 답하시지 않았습니다.");
        return;
      }
    }
    // 결과 페이지로 이동하는 코드 추가
    window.location.href = "결과페이지 URL";
  }
  
    const scores = [
      [1, 2, 3, 4], // 질문1에 대한 점수 배열
      [1, 2, 3, 4], // 질문2에 대한 점수 배열
      [1, 2, 3, 4], // 질문3에 대한 점수 배열
      [1, 2, 3, 4, 2.5], // 질문4에 대한 점수 배열
      [1, 2, 3, 4, 2.5], // 질문5에 대한 점수 배열
      [1, 2, 3, 4], // 질문6에 대한 점수 배열
      [1, 2, 3, 4, 2.5], // 질문7에 대한 점수 배열
      [1, 2, 3, 4, 2.5], // 질문8에 대한 점수 배열
      [1, 2, 3, 4], // 질문9에 대한 점수 배열
      [1, 2, 3, 4], // 질문10에 대한 점수 배열
      [1, 2, 3, 4], // 질문11에 대한 점수 배열
      [1, 2, 3, 4], // 질문12에 대한 점수 배열
    ];
    
    let totalScore = 0;
    
    // 선택된 답변의 인덱스를 이용하여 해당 질문의 점수를 누적한다.
    totalScore += scores[0][document.querySelector('input[name="radio1"]:checked').value - 1];
    totalScore += scores[1][document.querySelector('input[name="radio2"]:checked').value - 1];
    totalScore += scores[2][document.querySelector('input[name="radio3"]:checked').value - 1];
    totalScore += scores[3][document.querySelector('input[name="radio4"]:checked').value - 1];
    totalScore += scores[4][document.querySelector('input[name="radio5"]:checked').value - 1];
    totalScore += scores[5][document.querySelector('input[name="radio6"]:checked').value - 1];
    totalScore += scores[6][document.querySelector('input[name="radio7"]:checked').value - 1];
    totalScore += scores[7][document.querySelector('input[name="radio8"]:checked').value - 1];
    totalScore += scores[8][document.querySelector('input[name="radio9"]:checked').value - 1];
    totalScore += scores[9][document.querySelector('input[name="radio10"]:checked').value - 1];
    totalScore += scores[10][document.querySelector('input[name="radio11"]:checked').value - 1];
    totalScore += scores[11][document.querySelector('input[name="radio12"]:checked').value - 1];
  

function activee () {
    $('.title').addClass('active');
}