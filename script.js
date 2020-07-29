$('.loginButton').on('click', function () {
    $('.login').addClass('active');
    $('.main').addClass('blur');
});

$('.registerButton').on('click', function () {
    $('.register').addClass('active');
    $('.main').addClass('blur');
});

$('.quitButton').on('click', function () {
    $('.login').removeClass('active');
    $('.register').removeClass('active');
    $('.main').removeClass('blur');
    window.history.back();

});

$(document).ready(function () {
    $(window).bind("hashchange", function () {
        var anchor = document.location.hash;
        if (anchor === "#login") {
            $('.login').addClass('active');
            $('.main').addClass('blur');
            $('.register').removeClass('active');
        } else if (anchor === "#register") {
            $('.register').addClass('active');
            $('.main').addClass('blur');
            $('.login').removeClass('active');
        }
    });
});

$(window).on('popstate', function () {
    $('.login').removeClass('active');
    $('.register').removeClass('active');
    $('.main').removeClass('blur');
});

$('.logButton').on('click', function () {
    window.history.back();
    $('.login').removeClass('active');
    $('.register').removeClass('active');
    $('.main').removeClass('blur');
    alert('Witaj w Lorem Ipsum!');
    window.history.back();
});

$("select").change(function () {

    if ($("select option:selected").val() === 'short') {
        $(".shop__versionPrice").text('34,99zł');
        $(".shop__promo").text('-10% taniej');

    } else if ($("select option:selected").val() === 'medium') {
        $(".shop__versionPrice").text('59,99zł');
        $(".shop__promo").text('-20% taniej');
    } else {
        $(".shop__versionPrice").text('79,99zł');
        $(".shop__promo").text('-30% taniej');
    }
});
