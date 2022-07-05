$(function (){
    $('.toggle_btn').on('click',function(){
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open')
        } else {
            $('#header').addClass('open');
        }
    });

    $('#mask').on('click',function(){
        $('#header').removeClass('open');
    });

    $('#navi a').on('click',function(){
        $('#header').removeClass('open');
    })

    $('a[href^="#"]').click(function(){
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html,body").animate({scrollTop:position},600,"swing");
        return false;
    });

    $('.slick-area').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: "linear",
        arrows: false,
        swipe: false,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(window).scroll(function(){
        $('.fadein').each(function(){
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 200) {
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});