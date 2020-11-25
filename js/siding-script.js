$(document).ready(function () {
    let firstLev = $('.main__catalog-item');
    let secLev = $('.main__sec-cat-item');
    let thirdLev = $('.main__third-item');

    firstLev.on("click", function (e) {
        e.stopPropagation();
        if ($(this).hasClass('main__catalog-item--active')) {
            $(this).removeClass('main__catalog-item--active');
        } else {
            firstLev.removeClass('main__catalog-item--active');
            secLev.removeClass('main__sec-cat-item--active');
            $(this).addClass('main__catalog-item--active');
        }
    });

    secLev.on("click", function (e) {
        e.stopPropagation();
        if ($(this).hasClass('main__sec-cat-item--active')) {
            $(this).removeClass('main__sec-cat-item--active');
        } else {
            secLev.removeClass('main__sec-cat-item--active');
            thirdLev.removeClass('third-cat-item--active');
            $(this).addClass('main__sec-cat-item--active');
        }
    });

    thirdLev.on("click", function (e) {
        e.stopPropagation();
        thirdLev.removeClass('third-cat-item--active');
        $(this).addClass('third-cat-item--active');
    });
});