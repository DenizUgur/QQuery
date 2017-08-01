$(document).ready(function () {
    $('#meta_form > select').material_select();
    var _data = {};

    $("input").each(function () {
        if ($(this).attr("type") != "checkbox") {
            _data[$(this).attr('id')] = $(this).val();
        }
    });

    $("select").each(function () {
        _data[$(this).attr('id')] = $(this).find("option[value='" + $(this).val() + "']").html();
    });

    $("input, textarea, select").each(function () {
        $(this).change(function () {
            if ($(this).is("select")) {
                _data[$(this).attr('id')] = $(this).find("option[value='" + $(this).val() + "']").html();
            } else {
                _data[$(this).attr('id')] = $(this).val();
            }
        });
    });

    $("input[type='text'], textarea, select").each(function () {
        $(this).change(function () {
            if ($(this).is("select")) {
                var $text = $(this).find("option[value='" + $(this).val() + "']").html();
                if ($(this).attr('id') === "dOption") {
                    changeText($("p > span:eq(0)"), $text);
                } else {
                    changeText($("p > span:eq(1)"), $text);
                }
            } else {
                if ($(this).attr('id') === "project_name") {
                    if ($(this).val() === "") {
                        changeText($(".stage > h3"), currentStep());
                    } else {
                        changeText($(".stage > h3"), $(this).val());
                    }
                } else {
                    changeText($(".stage > p:eq(0)"), $(this).val());
                }
            }
        });
    });

    $("#dOption").change(function () {
        if ($(this).find("option[value='" + $(this).val() + "']").html() === "Multiple") {
            $("#pOption").prop('disabled', false);
        } else {
            $("#pOption").prop('disabled', true);
            $("#pOption").val("1");
            $("#pOption").trigger("change");
        }
        $('select').material_select();
    });

    $("#aOption").change(function () {
        _data[$(this).attr('id')] = $(this).prop('checked') ? 'Embed' : 'Export';
        changeText($("p > span:eq(2)"), _data[$(this).attr('id')]);
    });

    $("#start").on('click', function () {
        $("#meta_form")[0].reset();
        Materialize.updateTextFields();
        $(".stage > h3").text("Project Details");
        $(".stage > p:eq(0)").text("");
        $("select").trigger("change");
        changeText($("p > span:eq(2)"), "Export");
        _data[$("input[type='text']").attr("id")] = "";
        _data[$("textarea").attr("id")] = "";
        _data[$("input[type='checkbox']").attr("id")] = "Export";
    });

    $("#meta_form").change(function () {
        checkForm();
    });

    function currentStep() {
        return $('.navCreate > .nav-wrapper').children().last().text();
    }

    function checkForm() {
        if ($("#meta_form")[0].checkValidity()) {
            $("#next").removeClass("disabled");
        } else {
            $("#next").addClass("disabled");
        }
    }

    $(".title").on("click", function () {
        console.warn(_data);
    });

    function changeText($el, ctnt) {
        var theLetters = "01"; //You can customize what letters it will cycle through
        var speed = 30; // ms per frame
        var increment = 8; // frames per step. Must be >2

        var clen = 0;
        try {
            clen = ctnt.length;
        } catch (err) {
            console.error(err);
        }
        var si = 0;
        var stri = 0;
        var block = "";
        var fixed = "";
        //Call self x times, whole function wrapped in setTimeout
        (function rustle(i) {
            setTimeout(function () {
                if (--i) {
                    rustle(i);
                }
                nextFrame(i);
                si = si + 1;
            }, speed);
        })(clen * increment + 1);

        function nextFrame(pos) {
            for (var i = 0; i < clen - stri; i++) {
                //Random number
                var num = Math.floor(theLetters.length * Math.random());
                //Get random letter
                var letter = theLetters.charAt(num);
                block = block + letter;
            }
            if (si == (increment - 1)) {
                stri++;
            }
            if (si == increment) {
                // Add a letter; 
                // every speed*10 ms
                fixed = fixed + ctnt.charAt(stri - 1);
                si = 0;
            }
            $el.html(fixed + block);
            block = "";
        }
    }
});

/*

https://codepen.io/steveg3003/pen/ALXbYN

http://materializecss.com/forms.html#autocomplete

function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.value + " " );
    });
  }
 
  $( ":checkbox, :radio" ).click( showValues );
  $( "select" ).change( showValues );
  showValues();

*/