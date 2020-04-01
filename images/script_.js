// -- 웹 페이지 로딩
document.body.setAttribute('class', 'loaded');
setTimeout(function () {
  return document.getElementById('loader').remove();
}, 500);

$(document).ready(function() {

	var re = Math.floor(Math.random() * 10) + 1; // 1~10개 랜덤수
	var arrMe = ["내가 필요하다고 생각되는 건 이미 누군가가 다 만들어놨다.",
	"바퀴를 다시 발명하지 마라",
	"코드는 결과물일 뿐.. 경험은 사람만이 갖는 것.",
	"결단은 빠를수록 좋다.납기일은 더 늦을수록 좋다.",
	"'오늘까지'라는 말은 '내일 아침까지'라는 말이다.",
	"다른 사람을 믿어라. 그 사람이 해결해 줄지도 모른다.",
	"주의사항 - 먼저 자신을 의심해라.",
	"프로그램이란, 운과 감에 의해서 작성되는 기적이다.",
	"모든 일은 납기일에 의해 결정된다.",
	"안 좋은 예감은 반드시 적중한다.",
	"프로그래머는 창조주가 아니다."];
	$('#renRe').html(arrMe[re]);

	if($("#post").children("a.category").text() === 'HTML') {
		$('#left-nav').addClass('html')
	}
	if($("#post").children("a.category").text() === 'CSS') {
		$('#left-nav').addClass('css')
	};

	var is_Offset = $('#left-nav').offset();
	var is_height = $(window).height();
	$(window).scroll(function() {
		if ($(document).scrollTop() > is_Offset.top) {
			$('#left-nav, .main-right-inner').addClass('on');
		} else {
			$('#left-nav, .main-right-inner').removeClass('on');
		}
	});

});
