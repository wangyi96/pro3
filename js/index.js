window.onload = function(){
	var swiper = new Swiper('.swiper-container', {
	      direction: 'vertical',
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		      swiperAnimateCache(swiper); //隐藏动画元素 
		      swiperAnimate(swiper); //初始化完成开始动画
		    }, 
		    onSlideChangeEnd: function(swiper){ 
		      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    } 
	    });
		   
	//设置slide4的宽度
	wrap = document.querySelector('.slide4 .wrap');
	(function(){
		var wrap = document.querySelector('.slide4 .wrap')
		var wrap_div = document.querySelectorAll('.slide4 .wrap .wrap_div')
		wrap.style.width = 1290 +'px'
		for(var i =0;i<wrap_div.length;i++){
			wrap_div[i].style.width = document.documentElement.clientWidth * 0.8 + 'px';
		}
	})();
	
	WarpMove()
	function WarpMove(){
		var minX = wrap.getBoundingClientRect().width - document.documentElement.clientWidth
		console.log(minX)
		var start = {}
		var elements = {}
		wrap.addEventListener('touchstart',function(ev){
			ev = ev || event;
			var touchC = ev.changedTouches[0];
			start = {
				x:touchC.clientX,
				y:touchC.clientY
			}

			elements = {
				x:wrap.offsetLeft,
				y:wrap.offsetTop
			}
		})
		
		wrap.addEventListener('touchmove',function(ev){
			ev = ev || event;
			var touchC = ev.changedTouches[0];
			
			var now = {
				x:touchC.clientX,
				y:touchC.clientY
			}
			
			var disM = {
				x:now.x - start.x,
				y:now.y - start.y
			}
			
			var move = elements.x + disM.x
			if(move > 0){
				move = 0;
			}else if(move < -minX){
				move = -minX
				console.log(move)
			}
			wrap.style.left = move + 'px'
		})
	}
}
