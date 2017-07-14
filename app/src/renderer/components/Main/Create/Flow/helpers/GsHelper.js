$(document).ready(function () {

    var h = $(".module-body").height() - $(".toolCreate").height();

    $(".tile").css("height", h / 2);

    $(".cEvent").css({
        height: h,
        bottom: $(".toolCreate").height()
    });

    var i = 0;
    while (i < 4) {
        $(".cEvent").append($("<a>", {
            "class": "col s6 cTile",
            "href": "#!",
            "height": h / 2
        }));
        i++;
    }

    var elI;
    $(".cEvent").children().on('click', function (e) {
        e.preventDefault();
        elI = $(this).index();
        var $el = $(".tile:eq("+elI+")");
        $(".tile").css({
            "position": "absolute",
            "top": "0px"
        });
        $el.css({
            "z-index": "-2"
        });
        $el.animate({
            height: h,
            width: "100%",
        }, 1000, function () {

        });
    });

    $("#dev_cancel").on("click", function () {
        var $el = $(".tile:eq("+elI+")");
        $(".tile").css({
            "position": "relative",
            "top": "-20px"
        });
        $el.css({
            "z-index": "-3"
        });
        $el.animate({
            height: h / 2,
            width: "50%",
        }, 1000, function () {

        });
    });

     $(document).keyup(function (e) {
        if (e.keyCode === 8) console.log(e.keyCode);
        if (e.keyCode === 27) console.log(e.keyCode);
    });
});

/*
    Beautiful fluid animations that explain template categories that will transform into a list

    https://codepen.io/wbarlow/pen/NqLWXJ/ {{@Deprecated}}

    https://codepen.io/hone/pen/jERzmd {{!!!! this is the type of fluid action I want make tiles that descripes contents}}

    {{Search result will open the tile and show only the result in tile category color !!!}} {{Also change the search window color according to the first auto-complete result}}

    {{Each tile's opened state will include description about content and minimalist but efficent table that will show the contents}}

    // Codepens
    https://codepen.io/yusufbkr/pen/JdBxpj (COLOR)

    https://codepen.io/mkurapov/pen/qNQXxz (GRIDS)
*/