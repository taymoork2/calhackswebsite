$(function() {
    var isMobile = /iPhone|iPad|iPod|Android|IEMobile|Windows Phone|BlackBerry|WebOS|Opera Mini|Opera Mobile|Kindle|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser/i.test(navigator.userAgent.toLowerCase());
    
    var footheight = $('footer').height();
	
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'];
	var imgpost = images[Math.floor(Math.random() * images.length)];
	var imgurl = 'include/media/bg/' + imgpost;
    
/*    var slogan = [];
	var slength = images[Math.floor(Math.random() * images.length)];
	var imgurl = slogan[slength];*/
    
    $('body').css({
        'background-image': 'url("' + imgurl + '")'
    });
	
    /*var colorThief = new ColorThief();
    var color = colorThief.getColor(imgurl);
    
    $('.morph-content').css({
        'background': color
    });*/

    $(".content").css({
        "margin-bottom": footheight
    });
    
    $(window).resize(function(){
        var footheight = $('footer').height();
        
        $(".content").css({
            "margin-bottom": footheight
        });
    });
    
    if(isMobile) {        
        var height = $(window).height();
        
        if (height <= 360) {
			$('#ddoski').hide();
            $('#infoimg').hide();
        }
        
        if (height > 360) {
            $('#ddoski').show();
            $('#infoimg').show();
        }
        
        $('body').css({
            'overflow': 'auto'
        });
        
        $(window).resize(function(){
            var height = $(window).height();
			
            if (height <= 360) {
				$('#ddoski').hide();
                $('#infoimg').hide();
            }
            
            if (height > 360) {
                $('#ddoski').show();
                $('#infoimg').show();
            }
            
            $('body').css({
				'overflow': 'auto'
            });
            
			var footheight = $('footer').height();
        
			$(".content").css({
				"margin-bottom": footheight
			});
		});    
    }
});