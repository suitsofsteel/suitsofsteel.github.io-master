// Closes the responsive menu on link click.
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Make menu link that's clicked on become active.
$("a").on("click", function(){
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })

        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);

        if ($target.length) {
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top+2
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    }
    });
});

function onScroll(event){

    var scrollPos = $(document).scrollTop();

    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.length) {
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $(".nav").find(".active").removeClass("active");
				$(this).parent().addClass("active");
	        }
	    }
    });
}