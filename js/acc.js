//アコーディオンをクリックした時の動作
$('.title').on('click', function() {
	var findElm = $(this).next(".box");
	$(findElm).slideToggle();
    
	if($(this).hasClass('close')){
		$(this).removeClass('close');
	}else{//それ以外は
		$(this).addClass('close');
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open");
	$(".open").each(function(index, element){
		var Title =$(element).children('.title');
		$(Title).addClass('close');
		var Box =$(element).children('.box');
		$(Box).slideDown(500);
	});
});