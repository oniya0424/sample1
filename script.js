//ハンバーガーメニュー


$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();//キービジュアルの画像の高さを確認
  var bgHeight = $('.fv').outerHeight();

 $(".burger-btn").on('click',function(){
   if( $(window).scrollTop() < imgHeight -50){//ハンバーガーボタンがfvより上にある時
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
   }else{
     $(this).toggleClass('black');
    $('.bar').toggleClass('cross');
    $('.header-nav').toggleClass('open');
    $('.burger-musk').fadeToggle(300);
    $('body').toggleClass('noscroll');
   }
 });

 $(window).on('load scroll', function(){
  if ($(window).scrollTop() < imgHeight -50) {
    //メインビジュアル内にいるので、クラスを外す。
    $('.site-title').removeClass('black');
  }else {
    //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
    $('.site-title').addClass('black');
  }

  if ($(window).scrollTop() < bgHeight -50) {
    //メインビジュアル内にいるので、クラスを外す。
    $('.burger-btn').removeClass('black');
  }else {
    //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
    $('.burger-btn').addClass('black');
  }
});
});