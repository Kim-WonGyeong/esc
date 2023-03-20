// 개인페이지 틀
$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  var current = $('.flex--active').data('slide'),
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});

// 차트
  Highcharts.chart('htchart', {
    chart: {
      marginBottom: 80
    },
    colors: ['tomato', '#08f', 'orange', 'lightgreen'],
    xAxis: {
      categories: ['2022.11.11','2022.12.15','2022.12.30','2023.01.21','2023.02.10','2023.02.28','2023.03.17'].map(x => x.replace(/ /g, '\xa0')),
      labels: {
          autorotation: [-22.5, -45, -90],
        }
      },
  series: [
    {
      name: '지성(O), 건성(D)',
      data: [5, 7, 10, 10, 9, 7, 7].map((x, i, a) => a[(i) % a.length])
    },
    {
      name: '민감성(S), 저항성(R)',
      data: [8, 9, 9, 9, 10, 8, 7].map((x, i, a) => a[(i) % a.length])
    },
    {
      name: '비색소침착(N), 색소침착(P)',
      data: [6, 7, 7, 6, 4, 9, 9].map((x, i, a) => a[(i) % a.length])
    },
    {
      name: '주름(W), 탄력(T)',
      data: [10, 11, 12, 9, 5, 4, 8].map((x, i, a) => a[(i) % a.length])
    }
  ]
});


// 마이페이지(2페이지 추천제품)
(function(){
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();

// 버튼
// $('#testR').click(function(event){
//   event.preventDefault();
//   var sectionID = $(this).attr('href');
//   $('html, body').animate({
//     scrollTop: $(sectionID).offset().top
//   }, 1000);
// });