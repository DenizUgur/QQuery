import GsForm from './Flow/GsForm'
import MetaForm from './Flow/MetaForm'
import Loader from './Flow/Loader'

var steps = ["Getting Started", "Project Details", "Parameters", "Overview"];
/*
- Getting Started
  This screen will show a user generated or preset templates which can speed up the Flow.

- Project Details 
  Project
    * Name
    * Description
    * Disturbition
      * How many people will be taking this PDF.
      * Will everybody get the same PDF or with 'same' parameters?
    * Answer Sheet option
      * Either embed it to the end of every copy or export it as single sheet.

- Parameters
  Question distribution
    * How many questions?
    * Question genres disturbition [A big dynamic pie chart]
    * Inculde favourite Questions (How do we implement it?)

- Overview
    * Summary of the all steps above.
    * And DEPLOYMENT

_-_ DEPLOYMENT
 * Server will handle the rest
 * Beautiful loading screen (THIS IS IMPORTANT)
 * Add some fancy animations while waiting to finish.
 * And lastly print screen where you can either print it directly from application or save PDF's in a folder
*/

$(document).ready(function () {
    var init = true;

    $("#next").on('click', function () {
        nextStep(true);
    });

    $("#back").on('click', function () {
        nextStep(false);
    });

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
            nextStep(true);
            $('.fixed-action-btn').fadeOut(200, function (e) {
                console.log('hidden');
            });
            $("#start").toggleClass('red darken-1').html('cancel<i class="material-icons right">cancel</i>').addClass('pulse');

            $('.nav-content > .tabs').css({
                "visibility": "hidden"
            });
            $('.navCreate, #next, #back').removeClass('hide');
        } else {
            clearSteps();
            $('.fixed-action-btn').fadeIn(200, function (e) {
                console.log('shown');
            });
            $("#start").toggleClass('red darken-1', 'teal').html('start<i class="material-icons left">send</i>').removeClass('pulse');

            $('.nav-content > .tabs').css({
                "visibility": ""
            });
            $('.navCreate, #next, #back').addClass('hide');
        }
        init = !init;
    });

    $('#pages > li').on('click', function (e) {
        changeStep($(this).index());
    });
});

var i = -1;

function clearSteps() {
    $(".View").children().first().removeClass('hide');
    $(".View").children().each(function (index, item) {
        if (index > 0) $(item).addClass('hide');
    });
    $('.navCreate > .nav-wrapper').children().remove();
    i = -1;
}

function changeStep(index) {
    $(".View").children().not($('.hide')).each(function (index, item) {
        $(item).addClass('hide');
    });
    $(`#${index}`).removeClass('hide');
}

function nextStep(fwd) {
    var $step = $("<a>", {
        "class": "breadcrumb",
        "href": "#!"
    }).text(steps[i + 1]);
    if (!fwd) i--;

    if (i < 3) {
        if (fwd) {
            $('.navCreate > .nav-wrapper').append($step);
            i++;
            changeStep(i);
        } else if (i > -1) {
            $('.navCreate > .nav-wrapper').children().last().remove();
            changeStep(i);
        }
    }

    var curr = $('.navCreate > .nav-wrapper').children().last().text();
    if (curr === steps[0]) {
        $("#back").addClass("disabled");
    } else {
        $("#back").removeClass("disabled");
    }

    if (curr === steps[3]) {
        $("#next").addClass("disabled");
    } else {
        $("#next").removeClass("disabled");
    }
}

export default {
    components: {
        GsForm,
        MetaForm,
        Loader
    },
    name: 'Create'
}