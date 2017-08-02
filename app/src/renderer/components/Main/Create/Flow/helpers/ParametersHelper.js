import DataTable from '../../DataTable.vue';

$(document).ready(function () {

    function initiateTable() {
        $(document).trigger("tableSetup", [$("#genres").find(".datatable"),
            "https://api.myjson.com/bins/1gofkf", ["Genres", "desc_genres"]
        ]);
    }

    var stepIndex = 0;
    var poolAlgo;
    var initTable = false;
    $("#start").on("click", function () {
        $("#genres").slideUp();
        $("#level").slideUp();
        stepColor(-1, false);
        $(".pNext").removeClass("disabled");
        $(document).trigger("tableDestroy");
        stepIndex = 0;
    });

    /* UI Building */
    $(".pNext").css("bottom", $(".toolCreate").height());

    $(".pNext").on("click", function () {
        switch (stepIndex) {
            case 0:
                $("#next, #back").addClass("disabled");
                $(document).trigger("tableDestroy");
                initiateTable();
                initTable = true;

                $("#genres").slideDown();
                stepColor(0, true);

                $(this).addClass("disabled");
                break;
            case 1:
                $(this).css({
                    "width": "180px",
                    "border-radius": "0%"
                }).toggleClass("green blue").text("Verify Table");

                if (!$(".genre-list").hasClass("toggle-active")) $(".genre-list").trigger("click");
                break;
            case 2:
                poolAlgo = new PoolAlgo($(document).triggerHandler("getSelected"));

                $(this).css({
                    "width": "",
                    "border-radius": "50%"
                }).toggleClass("blue green").html($("<i>", {
                    "class": "material-icons"
                }).text("play_arrow"));

                $(".genre-list").removeClass("toggle-active");

                $("#genres").slideUp();
                stepColor(0, false);

                $("#level").slideDown();
                stepColor(1, true);
                break;
            case 3:
                console.clear();
                console.log(poolAlgo.listNames());
                $(".pNext").addClass("disabled");
                $("#next, #back").removeClass("disabled");
            default:
                stepIndex = 0;
        }
        stepIndex++;
    });

    function stepColor(i, intermediate) {
        var $el = $(".mini-step:eq(" + i + ")");

        if (i < 0 && !intermediate) {
            $(".mini-step").each(function () {
                $(this).removeClass("green").removeClass("curr").addClass("red");
            });
        } else if (intermediate) {
            $el.addClass("curr");
        } else {
            $el.removeClass("curr");
            $el.toggleClass("red green");
        }
    }
});

export default {
    components: {
        DataTable
    },
    name: 'Parameters'
}

class PoolAlgo {
    constructor(sJSON) {
        this.sJSON = sJSON;
    }

    listNames() {
        var names = [];
        $.each(this.sJSON["data"], function (i, val) {
            names.push(val[0]);
        });

        return names.join(", ");
    }
}

/*

rainbow https://codepen.io/jackrugile/pen/JddmaX
polygon https://codepen.io/dan_reid/pen/rwhDf
0-1 https://codepen.io/tomchewitt/pen/yNdQrO

https://codepen.io/simeydotme/pen/mJLPPq

Genre's Page: press next button and transform it to be a bigger button and write "Verify" etc. on it with blue bg-color. open selected items page and toggle the list button. add pulse effect to the table ?

Level Page: Please wait while etc... 3 big buttons (Easy, Medium, Hard) with 3 bottom status indicators (3 different suggestions for each level, total of 9 suggestions) show yellow for ongoing, green for completed, red for insufficent resource. Select any of them and continue to Radar Page but save all suggestions in case the user decide to turn back.

Radar Page: ...





This 'Loader' will be actually Parameter Page:

* Live Question Count on the side with vertical Slider kind of thing and a FAB on the bottom of it for 'next' action.

 * When filling the genre's: (Materialize Modal Bottom Sheet Style)
    * Rareity 3-4-5 degree slider
    * Level's multiple select dialog (1,2,3,4,5 star)

 * First ask for genre's in a big card with a table to select genre's.
 * Then press submit and a big green tick expands inside card then card minimizes into x-small card top left of the screen. green tick will animate only to right (overflow: hidden) then a title will be displayed on the left
 
 * After submitted another card will open asking that user to choose "Easy, Medium or Hard" question disturbition explaining everything in descriptions (Or easy,medium,hard will open on left leaving room for center area and live question count on the left) (on the center there would be description of how to use)
 * Easy, Medium and Hard will be loaded for hover state (meaning that when you hover any of them the live question count will be updated)
 * When any option selected an Radar Chart will be opened on the center suggestinb 3 viable options for production.
 
 * Another Card will open depending on the difficulty option with random generated Radar Chart using genre's difficulty disturbiton to calculate randomizable Radar Chart suggestions

 https://codepen.io/olsiodobashi/full/woENmj/
*/