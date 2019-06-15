  function eye(){
  $(".eye .eye2").click(function () {
    $(".eye .eye1").slideToggle();
  })

  $(".eye ul li").click(function () {
    $(".eye .eye1").slideToggle();
    $color=$(this).css("background-color")
    console.log($color);
    $(".eye .eye1").css("background",$color);
      $("#canvas").css("background",$color);
      $("article").css("background",$color);
  })
}
eye()