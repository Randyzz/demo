$(document).ready(function(){
	   	var menu = $('#nav');//nav
	   var items = menu.find('span');// nav栏
	   var article = $('.lou');//页面
	   console.log(article);
		
		$(window).scroll(function(){
			 var winH = $(window).height();//可视窗口高度
			 var iTop = $(window).scrollTop();//鼠标滚动的距离 
			 var aTop=$('.about').offset().top;
			 var sTop=$('.success').offset().top;
			 var cTop=$('.contact').offset().top;
			 //console.log(aTop);
			// console.log(cTop);
			 console.log(sTop);
			 console.log(iTop);
			 if(2*iTop>=sTop && iTop< 1000){
			 	console.log(1);
			 	items.removeClass('active');
			 	items.eq(1).addClass('active');
			 } else if(2*iTop>cTop){
			 	items.removeClass('active');
			 	items.eq(2).addClass('active');
			 } else {
			 	items.removeClass('active');
			 	items.eq(0).addClass('active');
			 }		
		})
		

		items.click(function(){
			
			var t = article.eq($(this).index()).offset().top-120;
			$('body,html').animate({"scrollTop":t},300);
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		});


		$("#toggle").click(function(){
				$("#bar").slideToggle(400);
			})
			var menu2 = $('#bar');//nav
			var items2 = menu2.find('div');// nav栏
			var article2 = $('article');

			$(window).scroll(function(){
				 
				 var iTop2 = $(window).scrollTop();//鼠标滚动的距离 
				 var aTop2=$('.about').offset().top;
				 var sTop2=$('.success').offset().top;
				 var cTop2=$('.contact').offset().top;
				 //console.log(aTop);
				// console.log(cTop);
				console.log(sTop2);
				 if(2*iTop2>=sTop2 && iTop2< 2600){
				 	console.log(1);
				 	items2.removeClass('show');
				 	items2.eq(1).addClass('show');
				 } else if(2*iTop2>cTop2){
				 	items2.removeClass('show');
				 	items2.eq(2).addClass('show');
				 } else {
				 	items2.removeClass('show');
				 	items2.eq(0).addClass('show');
				 }		
			
			})
			  items2.click(function(){
					var t = article2.eq($(this).index()).offset().top-120;
					console.log(t);
					$('body,html').animate({"scrollTop":t},400);
					$(this).siblings().removeClass('show');
					$(this).addClass('show');
				});

	   })
	