// 滚动固定定位
$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > $(".top").height()) {
			$(".top").addClass("fixed");
			$("main").css("marginTop", $(".top").height())
		} else {
			$(".top").removeClass("fixed");
			$("main").css("marginTop", 0)
		}
	})

   // 轮播图
   var lis = $(".slider li>a");  // 图片中的li标签
    var arrow = $(".arrow");
    var img = 0;//定义一个图片或是li的索引
    var timerId = null; 

    // 2. 鼠标移入的时候，要显示左右按钮，离开的时候，要隐藏左右按钮
    $(".slider").hover(function (){
           arrow.fadeIn();
        clearInterval(timerId);
    },function (){
           arrow.fadeOut();
        timerId = setInterval(playNext,2000);
    });

    $(".slide").hover(function (){
           arrow.fadeIn();
        clearInterval(timerId);
    },function (){
           arrow.fadeOut();
          clearInterval(timerId);
        timerId = setInterval(playNext,2000);
    });
    $(".arrow-right").on("click",playNext);
    $(".arrow-left").on("click",function (){
         console.log("点左击了")
        img>0?img--:img=lis.length-1;
        if(img==lis.length-1){
            lis.eq(0).animate({opacity:0},1000);
            lis.eq(img).animate({opacity:1},1000);
        }else{
            lis.eq(img).animate({opacity:1},1000);
            lis.eq(img+1).animate({opacity:0},1000);
        }
    });
   
    timerId = setInterval(playNext,2000);
    function playNext(){
        console.log("点右击了")
        img<lis.length-1?img++:img=0;
        lis.eq(img).animate({opacity:1},1000); 
        lis.eq(img-1).animate({opacity:0},1000);

      
    }









})

