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
        return false;
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