
(document).ready(function(){
  $(".carousel").carousel();
  $("trending").carousel();
  $(".item1").click(function() {
  	$("#trending").carousel(0);
  });
  $("item2").click(function(){
  	$("#trending").carousel(1);
  });
   $("item3").click(function(){
  	$("#trending").carousel(2);
  });
   $(".left").click(function(){
   	$("#trending").carousel("prev");
   });
    $(".right").click(function(){
   	$("#trending").carousel("next");
   });
    $(".well").addClass("animate bounceInRight");
});

