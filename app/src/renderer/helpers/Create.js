$(document).ready(function () {
    var init = true;

    $('.navCreate').css({
        "top": $('.titlebar > .nav-wrapper').outerHeight() + "px"
    });

    $("#start").on('click', function (e) {
        if (init) {
            $('.fixed-action-btn').fadeOut(200, function (e) {
                console.log('hidden');
            });
            $(this).addClass('red darken-1').html('cancel<i class="material-icons left">cancel</i>');

            //Stepper initilization
            $('.nav-content > .tabs').css({
                "visibility": "hidden"
            });
            $('.navCreate').removeClass('hide');
        } else {
            $('.fixed-action-btn').fadeIn(200, function (e) {
                console.log('shown');
            });
            $(this).toggleClass('red darken-1', 'teal').html('start<i class="material-icons left">send</i>');

            $('.nav-content > .tabs').css({
                "visibility": ""
            });
            $('.navCreate').addClass('hide');
        }
        init = !init;
    });
});