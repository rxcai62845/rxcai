$(function(){
	$('.navigation-bar').click(function(){
		$('.bar-chart').css({left:0})
	})
	$('header').click(function(){
		console.log(111)
		$('.bar-chart').css({left:'-300px'})
	})
	$('main').click(function(){
		console.log(111)
		$('.bar-chart').css({left:'-300px'})
	})
	
	/* $(window).on('scroll',function(){
		
		var scrol = $(document).scrollTop();
		console.log(scrol)
		if(scrol>400){
			$('.neirong ul .diyip').css({transform:'translateY(0)'});
		}
		if(scrol>640){
			$('.neirong ul .dierp').css({transform:'translateY(0)'});
		}
		if(scrol>300){
			$('.wenz p').css({transform:'translateY(0)'});
		}
		if(scrol>1300){
			$('.tup img').css({transform:'translateY(0)'})
		}
		if(scrol>2300){
			$('.zaiyc ul li').css({transform:'translateY(0)'})
		}
	}) */
	
	
	
	
})