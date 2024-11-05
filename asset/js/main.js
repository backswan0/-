$(function () {
  // 레이어 display none
  $(".layer_bg, .layer_wrap").hide();
  //레이어팝업 위치 지정 function 생성B
  function layer_position(){
      var win_W = $(window).width();
      var win_H = $(window).height();
      $(".layer_wrap").css({'left':(win_W-300)/2, 'top':(win_H-100)/2});
  };
  //레이어팝업 open 상태 function 생성
  function layer_open(no){
      $(".layer_wrap[layer="+no+"]").fadeIn();
      $(".layer_bg").fadeIn();
      layer_position();
      //레이어 영역 외 바탕화면 클릭시 화면 닫기
      $(".layer_bg").click(function (e) {
          if(!$(".layer_wrap").has(e.target).length){
              layer_close();
          };
      });
  };
  //레이어팝업 close 상태 function 만들기
  function layer_close(){
      $(".layer_wrap, .layer_bg").fadeOut();
  };
  //링크 클릭시 해당 레이어팝업 호출
  $(".btn_layer").click(function () {
      var no = $(this).attr("layer");
      layer_open(no);
  });
  //닫기 버튼 클릭시 레이어 닫기
  $(".btn_close").click(function () {
      layer_close();
  });
  //반응형 대응 - 레이어 위치 잡기
  $(window).resize(function () {
      layer_position();
  });
})