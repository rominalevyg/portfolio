$(document).ready(function () {
    var altura = $('.menu').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            if ($(window).scrollTop() > altura) {
                $('.menu').addClass('menu-fixed');
            } else {
                $('.menu').removeClass('menu-fixed');
            }
        }
        else
        {
            $('.menu').removeClass('menu-fixed');
        }

    });
});


$(function () {
    $().timelinr({
        orientation: 'vertical',
        issuesSpeed: 300,
        datesSpeed: 100,
        arrowKeys: 'true',
        startAt: 3
    })
});