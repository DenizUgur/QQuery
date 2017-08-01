import DataTable from '../../DataTable.vue';

$(document).ready(function () {

    var h = $(".module-body").height() - $(".toolCreate").height();
    $(document).on("calcSize", function () {
        $(".content-item").css({
            "height": $("body").height() - ($(".titlebar").height() + $(".toolCreate").height()),
            "bottom": $(".toolCreate").height()
        });
        return false;
    });

    $(".tiles, img").css({
        "bottom": $(".toolCreate").height(),
        "height": h
    });
    $("img").attr("src", `https://unsplash.it/${$(".tiles").width()}/${h}/?blur`);

    var tileBtn = $('li.tiles-tile');
    var allContent = $('li.content-item');
    var contentWrap = $('.content-wrap');

    tileBtn.on('click touchstart', function () {
        var self = $(this);
        var match = self.attr('data-tile');
        var allContent = $('li.content-item');
        var content = $('li#' + match);

        contentWrap.css({
            'transition-delay': '.35s'
        });

        if (match === "4") {
            $("#next").trigger("click");
            return false;
        } else {
            self.toggleClass('active');
            content.toggleClass('active');
            $(document).trigger("tileActive");
        }
        return false;
    });

    $(".toolCreate").on('click touchstart', function () {
        if (allContent.hasClass('active') && tileBtn.hasClass('active')) {
            allContent.removeClass('active');
            setTimeout(function () {
                tileBtn.removeClass('active');
            }, 400);
            contentWrap.css({
                'transition-delay': '.0s'
            });
            $(document).trigger("tableDestroy");
        }
    });

    $("#search").keyup(function () {
        if ($(this).val() === "") {
            $(".tiles > li").last().removeClass("hide");
        } else {
            $(".tiles > li").last().addClass("hide");
        }
    });
});

export default {
    components: {
        DataTable
    },
    name: 'GsHelper'
}

/* **************************************

https://codepen.io/arjancodes/full/GgMejV/
http://www.jqueryscript.net/animation/Expanding-Fullscreen-Tiles-with-jQuery-CSS3.html

   ************************************** */

/*
                    *************

            https://codepen.io/heiswayi/pen/VvpmaE
            https://codepen.io/heiswayi/full/VvpmaE/
            https://datatables.net/download/npm

                    *************
    Beautiful fluid animations that explain template categories that will transform into a list

    https://codepen.io/wbarlow/pen/NqLWXJ/ {{@Deprecated}}

    https://codepen.io/hone/pen/jERzmd {{!!!! this is the type of fluid action I want make tiles that descripes contents}}

    {{Search result will open the tile and show only the result in tile category color !!!}} {{Also change the search window color according to the first auto-complete result}}

    {{Each tile's opened state will include description about content and minimalist but efficent table that will show the contents}}

    // Codepens
    https://codepen.io/yusufbkr/pen/JdBxpj (COLOR)

    https://codepen.io/mkurapov/pen/qNQXxz (GRIDS)
*/