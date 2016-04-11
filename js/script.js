document.addEventListener('DOMContentLoaded', function(){
    console.log('Welcome to the console...');
    $('.intro-name').click(function()  {
        console.log('hover...');
        $(this).addClass('lighten');
    });
    
  
    //underlining nav links
    $('nav a').each(function(){
       if ($(this).prop('href') == window.location.href) {
         $(this).addClass('active'); 
         $(this).parents('li').addClass('active');
       }
       if($(this).prop('href') == 'work.html'){
           console.log('welcome to the contact page');
       }
    });
    
    //clicking nav logo to go home
    $('#nav-logo').click(function(){
        window.location.href = "index.html";
    })
    
    //toggle FAQ answer
    $('.show-more').click(function(){
        var id = $(this).next();
        var arrowDiv = $(this).children('div');
        if(arrowDiv.hasClass('glyphicon-chevron-down')){
            arrowDiv.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }else if(arrowDiv.hasClass('glyphicon-chevron-up')){
            arrowDiv.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        }
        $(id).toggle("slow");
    })
    
    //mouseover effect for social media icons in footer
    $('.social').mouseenter(function(e){
        var $image = $(this).children();
        var imageId = $($image).attr('id');
        console.log(imageId);
        
        switch(imageId){
            case 'twitter':
                $($image).attr('src', 'images/twit2_hover.png');
                break;
            case 'linkedin':
                $($image).attr('src', 'images/link_hover.png');
                break;
            case 'github':
                $($image).attr('src', 'images/git_hover.png');
                break;    
        }  
    }).mouseleave(function(){
        console.log('leaving');
        var $image = $(this).children();
        var imageId = $($image).attr('id');
        switch(imageId){
            case 'twitter':
                $($image).attr('src', 'images/social_twitter.png');
                break;
            case 'linkedin':
                $($image).attr('src', 'images/social_linkedin.png');
                break;
            case 'github':
                $($image).attr('src', 'images/social_git.png');
                break;         
        }
        
    });
    
    //lightbox for work
    var $overlay = $("<div id='overlay' class='container-fluid'></div");
    var $rowContainer = $("<div class='work-content-container row'></div>");
    var $imageContainer = $("<div class='img-container col-xs-12'></div>");
    //IF WINDOW IS BELOW 900 PX MAKE THE IMAGE AND CAPTION STACK
    if (window.innerWidth < 900){
        $imageContainer = $("<div class='img-container col-xs-12'></div>")
    }
    var $image = $("<img>");
    var $captionContainer = $("<div class='caption-container col-xs-12'></div>");
    //IF WINDOW IS BELOW 900 PX MAKE THE IMAGE AND CAPTION STACK
    if (window.innerWidth < 900){
        $captionContainer = $("<div class='caption-container col-xs-12'></div>")
    }
    var $caption = $("<p></p>");
    var captions = ["I helped redesign and populate Gaylord Chemical's new site with a mobile-first mindset. This large, responsive site is a great improvement from their previous site", "College football fans needed an engaging online central hub to get all of their bowl game needs from. I helped redesign and populate the FBA's site with this mindset in place.", "Whenever I have spare time, I try to create digital pieces of art to share with friends and family. Here's an example of a wallpaper set I created. Go Pack Go.", "Email designed for a financial client.", "Email designed for the FBA. This one in particular is geared towards the fans of the college football bowls.", "Email designed for the FBA. This one in particular is geared towards the bowl administrators.", "Logo submitted in online contest for a Black Ops Veteran Union. Named runner-up.", "Logo for a hops-based soda product. Yep, I said a hops-based soda.", "Logo designed for a community journal publisher."]
    var largeImages = ['images/ao_email.jpg', 'images/fba_email.jpg', 'images/fba_email2.jpg']
    
    $imageContainer.append($image)
        $rowContainer.append($imageContainer);
        $captionContainer.append($caption);
        $rowContainer.append($captionContainer);
        $overlay.append($rowContainer);
        $("body").append($overlay);
        
    $('.work-container a').click(function(e){
        e.preventDefault();
        
        
        console.log('SHOW!');
        var link = $(this).attr('id');
        var linkNum = parseInt(link);
        var imageLocation = $(this).attr('href');
        //if the link click is an email (3-6), change img to larger img
        if(linkNum >= 3 && linkNum < 6){
            console.log("You've clicked on an email!");
            if(linkNum == 3){
                $image.attr('src', largeImages[0]);
                $image.css('max-width','330px');
            };
            if(linkNum == 4){
                $image.attr('src', largeImages[1]);
                $image.css('max-width','330px');
            }
            if(linkNum == 5){
                $image.attr('src', largeImages[2]);
                $image.css('max-width','330px');
            }
        }else{
            //checks to see if the img still has the max-width attr from email image
            if ($image.attr('style')){
                console.log('there is a max-width');
                $image.attr('style', '');
            }
            $image.attr('src', imageLocation);
        }
        
        $caption.text(captions[linkNum]);
        $('.main-container').css('margin-top', '0');
        $overlay.show();
    });
    
    $($overlay).click(function(){
        $overlay.hide();
        $('.main-container').css('margin-top', '80px');
      
    });
    //END LIGHTBOX
    
    //hover effect for work items
    $('.work-container img').mouseover(function(e){
        var current = e.target;
        $(current).addClass('hover');
    }).mouseleave(function(e){
        var current = e.target;
        $(current).removeClass('hover');
    });
    
    
    //START MOBILE NAV
    $('.hamburger').click(function(){
        console.log('Mobile nav displaying...');
        if($('#mobile-nav-content').hasClass('opened')){
            $('#mobile-nav-content').removeClass('opened');
            $('#mobile-nav-content').slideUp();
        }else{
            $('#mobile-nav-content').slideDown().addClass('opened');
        };  
    })
    
 
        
    
});