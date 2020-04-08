// -- 웹 페이지 로딩
document.body.setAttribute('class', 'loaded');
setTimeout(function () {
  return document.getElementById('loader').remove();
}, 500);

$(document).ready(function() {

	//--- HTML에서 크롬 상태표시줄 삭제
  $("body").on('mouseover', 'a', function (e) {
	    var $link = $(this),
	        href = $link.attr('href') || $link.data("href");
	    $link.off('click.chrome');
	    $link.on('click.chrome', function () {
	        window.location.href = href;
	    })
	    .attr('data-href', href) //keeps track of the href value
	    .css({ cursor: 'pointer' })
	    .removeAttr('href'); // <- this is what stops Chrome to display status bar
	});

	if($("#post .pageheaderinner").children("a.category").text() === 'HTML') {
		$('#left-nav').addClass('html')
	}
	if($("#post .pageheaderinner").children("a.category").text() === 'CSS') {
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

	// --- 모바일 네비 - 상위버튼
	$('.mobileButton').click(function(){
		$('.main-left').toggleClass('show');
	});	

});

// -- highlight.min.js 시작
hljs.initHighlightingOnLoad();

// --- 페이지내의 검색 Data
var searchTemplate = "<div class='input-group mb-3'><div class='input-group-prepend'>" + 
"<span class='input-group-text' id='basic-addon1'>검 색</span></div>" + 
"<input type='text' class='form-control' placeholder='여기에 단어를 적으세요' aria-label='단어검색' aria-describedby='basic-addon1'></div>";
$(".table-sieve").sieve({searchTemplate: searchTemplate	});
// 페이지내에 keyword 클래스안을 검색합니다. 검색후 나머지 keyword 클래스는 숨깁니다.
$(".p-sieve").sieve({searchTemplate: searchTemplate,  itemSelector: ".keyword"});
// li 태그 안을 검색합니다. 검색후 나머지 페이지내에 모든 li는 숨깁니다.
$(".p-sieves").sieve({searchTemplate: searchTemplate, itemSelector: "li"});