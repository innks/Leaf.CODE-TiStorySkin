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


});
