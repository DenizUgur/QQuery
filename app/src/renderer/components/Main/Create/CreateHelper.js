import EntryForm from './Flow/EntryForm'
import MetaForm from './Flow/MetaForm'

var steps = ["Entry", "Meta"];

$(document).ready(function () {
    var init = true;

    $(".View").children().each(function (index, item) {
        if (index > 0) $(item).addClass('hide');
    });

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true,
        hover: true,
        stopPropagation: false
    });

    $('.navCreate').css({
        "top": $('.titlebar > .nav-wrapper').outerHeight() + "px"
    });

    $("#start").on('click', function (e) {
        if (init) {
            $('.fixed-action-btn').fadeOut(200, function (e) {
                console.log('hidden');
            });
            $("#start").addClass('red darken-1').html('cancel<i class="material-icons right">cancel</i>');

            //Stepper initilization
            $('.nav-content > .tabs').css({
                "visibility": "hidden"
            });
            $('.navCreate').removeClass('hide');
        } else {
            $('.fixed-action-btn').fadeIn(200, function (e) {
                console.log('shown');
            });
            $("#start").toggleClass('red darken-1', 'teal').html('start<i class="material-icons left">send</i>');

            $('.nav-content > .tabs').css({
                "visibility": ""
            });
            $('.navCreate').addClass('hide');
        }
        init = !init;
    });

    $('#pages > li').on('click', function (e) {
        changeStep($(this).index());
    });

    $('#add').on('click', function (e) {
        nextStep();
    });
});

function changeStep(index) {
    $(".View").children().not($('.hide')).each(function (index, item) {
        $(item).addClass('hide');
    });
    $(`#${index}`).removeClass('hide');
}

var i = 0;
function nextStep() {
    var $step = $("<a>", {
        "class": "breadcrumb",
        "href": "#!"
    }).text(steps[i]);
    $('.navCreate > .nav-wrapper').append($step);
    i++;
}

export default {
    components: {
        EntryForm,
        MetaForm
    },
    name: 'Create'
}