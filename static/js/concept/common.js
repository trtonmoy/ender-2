var scrl_t  = 0;
    sc1_ost = 0,
    sc2_ost = 0,
    sc3_ost = 0,
    sc4_ost = 0,
    sc5_ost = 0,
    win_hei = 0,
    fnc_flg = true,
    doc_hei = 0,
    cal_cor = 0,
    hei_tri = 0;

$(window).on('load resize',function(){
  sc1_ost = Math.round($('#section_1').offset().top),
  sc2_ost = Math.round($('#section_2').offset().top),
  sc3_ost = Math.round($('#section_3').offset().top),
  sc4_ost = Math.round($('#section_4').offset().top),
  sc5_ost = Math.round($('#section_5').offset().top),
  win_hei = Math.round($(this).height());
  fnc_flg = ($(this).width()>=768) ? true : false;
  doc_hei = Math.round($(document).height());
  cal_cor = 27 / (win_hei+$('#section_1').height());
  hei_tri = Math.round(win_hei / 3);
  scroll_func();
});

$(window).scroll(function(){
  scrl_t = $(this).scrollTop();
  scroll_func();
});

function scroll_func(){
  var flg_pt = win_hei+scrl_t;
  if( flg_pt > sc1_ost ) {
    if(fnc_flg){
      var set_top = Math.floor(((flg_pt-sc1_ost)*cal_cor)*-1);
      $('#section_1>img:eq(0)').css('top', set_top+'%');
    }
    if(!$('#section_1>img.description').hasClass('view_txt')){
      if((hei_tri+scrl_t) >= sc1_ost ) $('#section_1>img.description').addClass('view_txt');
    }
  }
  if( flg_pt > sc2_ost ) {
    if(fnc_flg){
      var set_top = Math.floor(((flg_pt-sc2_ost)*cal_cor)*-1);
      $('#section_2>img:eq(0)').css('top', set_top+'%');
    }
    if(!$('#section_2>img.description').hasClass('view_txt')){
      if((hei_tri+scrl_t) >= sc2_ost ) $('#section_2>img.description').addClass('view_txt');
    }
  }
  if( flg_pt > sc3_ost ) {
    if(fnc_flg){
      var set_top = Math.floor(((flg_pt-sc3_ost)*cal_cor)*-1);
      $('#section_3>img:eq(0)').css('top', set_top+'%');
    }
    if(!$('#section_3>img.description').hasClass('view_txt')){
      if((hei_tri+scrl_t) >= sc3_ost ) $('#section_3>img.description').addClass('view_txt');
    }
  }
  if( flg_pt > sc4_ost ) {
    if(fnc_flg){
      var set_top = Math.floor(((flg_pt-sc4_ost)*cal_cor)*-1);
      $('#section_4>img:eq(0)').css('top', set_top+'%');
    }
    if(!$('#section_4>img.description').hasClass('view_txt')){
      if((hei_tri+scrl_t) >= sc4_ost ) $('#section_4>img.description').addClass('view_txt');
    }
  }
  if( flg_pt > sc5_ost ) {
    if(fnc_flg){
      var set_top = Math.floor(((flg_pt-sc5_ost)*cal_cor)*-1);
      $('#section_5>img:eq(0)').css('top', set_top+'%');
    }
    if(!$('#section_5>img.description').hasClass('view_txt')){
      if((hei_tri+scrl_t) >= sc5_ost || (doc_hei-(win_hei+scrl_t))/doc_hei === 0 ) $('#section_5>img.description').addClass('view_txt');
    }
  }
}