$(document).ready(function(){
	   	var menu = $('#nav');//nav
	   var items = menu.find('span');// nav栏
	   var article = $('article');//页面
	   
		
		// $(window).scroll(function(){
		// 	 var winH = $(window).height();//可视窗口高度
		// 	 var iTop = $(window).scrollTop();//内容距离顶部的距离	 
			 
		// 	// console.log(iTop);
		// 	 //鼠标滑动式改变	
		// 	 article.each(function(){
		// 	 	if(winH+iTop - $(this).offset().top>=winH/2){
		// 	 		// console.log("winH"+winH);
		// 	 		// console.log("iTop"+iTop);
		// 	 		// console.log($(this).offset().top);
		// 	 		//items.removeClass('active');
		// 	 	   // items.eq($(this).index()).addClass('active');
          
		// 	 	}
		// 	 })
			
		// })
		

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

			// $(window).scroll(function(){
			// 	 var winH2 = $(window).height();//可视窗口高度
			// 	 var iTop2 = $(window).scrollTop();//内容距离顶部的距离	 
				 
			// 	// console.log(iTop);
			// 	 //鼠标滑动式改变	
			// 	 article2.each(function(){
			// 	 	if(winH2+iTop2 - $(this).offset().top>=winH2){
			// 	 		console.log($(this).offset().top);
			// 	 		// console.log("winH"+winH);
			// 	 		// console.log("iTop"+iTop);
			// 	 		// console.log($(this).offset().top);
			// 	 		items2.removeClass('show');
			// 	 	    items2.eq($(this).index()).addClass('show');
	          
			// 	 	}
			// 	 })
			
			// })
			  items2.click(function(){
					var t = article2.eq($(this).index()).offset().top-120;
					console.log(t);
					$('body,html').animate({"scrollTop":t},400);
					$(this).siblings().removeClass('show');
					$(this).addClass('show');
				});

	   })
	