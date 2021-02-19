// ------ VARIABLE ------ //
let $window = $(window);
let $page = $('html, body');

// ------ READY FUNCT ------ //

$window.on("load",function(){

    "use strict";

    preLoad();
});

$(document).ready(function(){

    "use strict"; 

    activeMenu()
    typed();
    menuScroll();
    smoothSlide();
    overlayMenu();
    percentBar();
});

            /**************
             == FUNCTION ==
            **************/
// ------ PRELOAD PAGE FUNC ------ //
function preLoad(){
    
    "use strict";

    Pace.on('done', function(){

        $('#preloader').delay(1000).animate({top: '-120%'}, 2000, $.bez([0.19,1,0.22,1]));    
    });

    hideMenu();

    $('li a .active').show();
    $('li .home').addClass("active");
   
}

// ------ HIDING NAME PAGELIST ----- //
function hideMenu(){

    "use strict";

    // toogle to hide all name
    $('#menu li a').removeClass("active");
    $('#menu li a span').hide();

}

// ------ ACTIVE MENU PAGELIST ------ //
function activeMenu(menu){

    "use strict";
        
    $("#menu li "+menu).addClass("active");
    $("#menu li a "+menu).show();

}

// ------ TYPING ANIMATION ------ //
function typed(){

    "use strict";

    let $el = $("#typed");
    if($el.length){
        let options = {
            strings : ['WEB PROGRAMMER','WEB DEVELOPER','STUDENT'],
            typeSpeed : 100,
            delaySpeed : 100,
            backSpeed : 50,
            loop : true
        };
        let typed = new Typed('#typed', options);   
    }
}

// ------ MENU SCROLL ACTIVE ----- //
function menuScroll(){

    "use strict";

    $window.scroll(function scroll(){

        let height = $window.scrollTop();
    
        if(height <= 600){
            hideMenu();
            activeMenu('.home');
        } else if(height <= 1211){
            hideMenu();
            activeMenu('.about');
        } else if(height <= 1862){
            hideMenu();
            activeMenu('.skill');
        } else if(height <= 2523){
            hideMenu();
            activeMenu('.portofolio');
        } else if(height >= 2523){
            hideMenu();
            activeMenu('.footer');
        }
        
    });
}

// ------ SMOOTH SLIDE PAGE ------ //
function smoothSlide(){

    "use strict";

    $(".menu-page ul li a").on('click', function(event){

        if (this.hash !== ""){
 
            event.preventDefault();

            let loc = this.hash;

            $page.animate({
                scrollTop: $(loc).offset().top
            }, 800, function(){
                window.location.hash = loc; 
            });
        }
    });

}

// ------ OVERLAY MENU ------ //
function overlayMenu(){

    "use strict";

    let menu = $(".overlay-btn");
    $(menu).on("click", function(){

        "use strict"

        $('body').css({
            "overflow": "hidden"
        });

        $('#overlay').addClass("active");

    });

    $('#overlay').on("click",function(){
        $('body').css({
            "overflow": "auto"
        });

        $('#overlay').removeClass("active");
    });
}

// ------ PERCENT BAR ------ //
function percentBar(){

    "use strict"

    $('.my-skill-bar').each(function(){
        let percent = $(this).attr('percent');

        $(this).find('.skill-bar-percent').text(percent);

        $(this).find('.skill-bar').css({
            "width": percent
        });
    });

}

// ------ COPYRIGHT ------ //
let year = new Date();
$('.copyright').html("Copyright &#169;"+ year.getFullYear());