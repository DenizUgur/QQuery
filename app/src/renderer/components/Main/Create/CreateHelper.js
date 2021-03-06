import GsForm from './Flow/GsForm'
import MetaForm from './Flow/MetaForm'
import Parameters from './Flow/Parameters'

var steps = ["Getting Started", "Project Details", "Parameters", "Overview"];

$(document).ready(function () {
    var init = true;

    require('electron').ipcRenderer.on('synchronous-message', (event, arg) => {
        openCurtain();
    });

    $(".title").on("click", openCurtain);

    function openCurtain() {
        $(".titlebar").animate({
            "height": "122px"
        }, {
            duration: 500,
            queue: false
        });

        $(".title").animate({
            "font-size": "80px"
        }, {
            duration: 200,
            queue: false,
            complete: function () {
                var calcPadding = ($(".titlebar").height() - $(".title").outerHeight()) / 2;
                $(".title").animate({
                    "padding-top": calcPadding
                }, "fast", function () {
                    $(".navCreate").slideDown();
                });
            }
        });
        $(".toolCreate").slideDown(500, function () {
            $(document).trigger("calcSize");
        });
    }

    $("#next").on('click', function () {
        nextStep(true);
        return false;
    });

    $("#back").on('click', function () {
        nextStep(false);
        return false;
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
            $('.fixed-action-btn').fadeOut(200);
            $("#start").toggleClass('red darken-1').html('cancel<i class="material-icons right">cancel</i>').addClass('pulse');

            $(".title").animate({
                "font-size": "48px"
            }, 200, function () {
                var titleAreaSize = $(".titlebar").height() - $(".navCreate").height();
                var newPadding = (titleAreaSize - $(".title").outerHeight()) / 2;
                $(".title").animate({
                    "padding-top": newPadding
                }, "fast", function () {
                    $(".navCreate").slideDown();
                });
            });
        } else {
            clearSteps();
            $('.fixed-action-btn').fadeIn(200);
            $("#start").toggleClass('red darken-1', 'teal').html('start<i class="material-icons left">send</i>').removeClass('pulse');

            $(".title").animate({
                "font-size": "80px"
            }, 200, function () {
                $(this).animate({
                    "padding-top": (($(".titlebar").height() - $(".title").outerHeight()) / 2)
                }, "fast");
                $(".navCreate").fadeOut("fast", function () {
                    $('.navCreate > .nav-wrapper').children().remove();
                });
                $("#next, #back").addClass("hide");
            });
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
    i = -1;
}

function changeStep(index) {
    $(".View").children().not($('.hide')).each(function (index, item) {
        $(item).addClass('hide');
    });
    $(`.View > div:eq(${index + 1})`).removeClass("hide");
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
        $("#back, #next").addClass("hide");
    } else {
        $("#back, #next").removeClass("hide");
    }

    if (curr === steps[3]) {
        $("#next").addClass("disabled");
    } else {
        $("#next").removeClass("disabled");
    }

    if (curr === steps[1]) {
        if (!$("form")[0].checkValidity()) {
            $("#next").addClass("disabled");
            $("#project_name").focus();
        } else {
            $("#next").removeClass("disabled");
        }
    }
}

export default {
    components: {
        GsForm,
        MetaForm,
        Parameters
    },
    name: 'Create'
}