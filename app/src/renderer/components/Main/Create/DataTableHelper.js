import DataTable from 'datatables.net/js/jquery.dataTables.js'
import Chart from 'chart.js/dist/Chart.min.js';
import DataTableSelect from 'datatables.net/js/dataTables.select.min.js'

var JSONs = [
    "https://api.myjson.com/bins/pwt55",
    "https://api.myjson.com/bins/jd1hl",
    "https://api.myjson.com/bins/1b1wu1"
];

(function (window, document, undefined) {

    var factory = function ($, DataTable) {
        "use strict";

        /* Set the defaults for DataTables initialisation */
        $.extend(true, DataTable.defaults, {
            dom: "<'hiddensearch'f'>" +
                "tr" +
                "<'table-footer'lip'>",
            renderer: 'material'
        });

        /* Default class modification */
        $.extend(DataTable.ext.classes, {
            sWrapper: "dataTables_wrapper",
            sFilterInput: "form-control input-sm",
            sLengthSelect: "form-control input-sm"
        });

        /* Bootstrap paging button renderer */
        DataTable.ext.renderer.pageButton.material = function (settings, host, idx, buttons, page, pages) {
            var api = new DataTable.Api(settings);
            var classes = settings.oClasses;
            var lang = settings.oLanguage.oPaginate;
            var btnDisplay, btnClass, counter = 0;

            var attach = function (container, buttons) {
                var i, ien, node, button;
                var clickHandler = function (e) {
                    e.preventDefault();
                    if (!$(e.currentTarget).hasClass('disabled')) {
                        api.page(e.data.action).draw(false);
                    }
                };

                for (i = 0, ien = buttons.length; i < ien; i++) {
                    button = buttons[i];

                    if ($.isArray(button)) {
                        attach(container, button);
                    } else {
                        btnDisplay = '';
                        btnClass = '';

                        switch (button) {

                            case 'first':
                                btnDisplay = lang.sFirst;
                                btnClass = button + (page > 0 ?
                                    '' : ' disabled');
                                break;

                            case 'previous':
                                btnDisplay = '<i class="material-icons">chevron_left</i>';
                                btnClass = button + (page > 0 ?
                                    '' : ' disabled');
                                break;

                            case 'next':
                                btnDisplay = '<i class="material-icons">chevron_right</i>';
                                btnClass = button + (page < pages - 1 ?
                                    '' : ' disabled');
                                break;

                            case 'last':
                                btnDisplay = lang.sLast;
                                btnClass = button + (page < pages - 1 ?
                                    '' : ' disabled');
                                break;

                        }

                        if (btnDisplay) {
                            node = $('<li>', {
                                    'class': classes.sPageButton + ' ' + btnClass,
                                    'id': idx === 0 && typeof button === 'string' ?
                                        settings.sTableId + '_' + button : null
                                })
                                .append($('<a>', {
                                        'href': '#',
                                        'aria-controls': settings.sTableId,
                                        'data-dt-idx': counter,
                                        'tabindex': settings.iTabIndex
                                    })
                                    .html(btnDisplay)
                                )
                                .appendTo(container);

                            settings.oApi._fnBindAction(
                                node, {
                                    action: button
                                }, clickHandler
                            );

                            counter++;
                        }
                    }
                }
            };

            // IE9 throws an 'unknown error' if document.activeElement is used
            // inside an iframe or frame. 
            var activeEl;

            try {
                // Because this approach is destroying and recreating the paging
                // elements, focus is lost on the select button which is bad for
                // accessibility. So we want to restore focus once the draw has
                // completed
                activeEl = $(document.activeElement).data('dt-idx');
            } catch (e) {}

            attach(
                $(host).empty().html('<ul class="material-pagination"/>').children('ul'),
                buttons
            );

            if (activeEl) {
                $(host).find('[data-dt-idx=' + activeEl + ']').focus();
            }
        };

    };
    factory(jQuery, jQuery.fn.dataTable);
})(window, document);

$(document).ready(function () {
    $('.modal').modal();

    var selectedJSON = {
        "data": []
    };
    var prep, store;

    $(".tiles").children().on("click", function () {
        var index = $(this).attr("data-tile");
        prep = new Prep(true, $(`.datatable:eq(${index - 1})`), JSONs[index - 1], 0);
        prep.tableContainer = $(`.content-tile > #${index}`);
        prep.initDetails($(this).find("h3").text(), $(this).find("desc").text());
    });

    $(document).on("getSelected", function () {
        return prep.selectedJSON;
    });

    $(document).on("tileActive", function () {
        prep.setup();
        return false;
    });

    $(document).on("tableDestroy", function () {
        try {
            prep.destroyInit();
            store = null;
            prep.selectedJSON = null;
            selectedJSON = {
                "data": []
            };
        } catch (e) {}
        return false;
    });

    $(document).on("tableSetup", function (e, domEl, json, meta) {
        try {
            prep.destroyInit();
        } catch (e) {}
        prep = new Prep(false, domEl, json, 1);
        prep.tableContainer = domEl.parent();
        prep.setup();
        prep.initDetails(meta[0], meta[1]);
        return false;
    });

    $(".genre-list").on("click", function () {
        store = prep.selectedJSON;
        if ($(this).hasClass("toggle-active")) {
            try {
                prep.destroyInit();
            } catch (e) {}
            prep = new Prep(false, $("#genres").find(".datatable"), "https://api.myjson.com/bins/1gofkf", 1);
            prep.tableContainer = $("#genres");
            prep.selectedJSON = store;
            prep.setup();
            prep.initDetails("Genres", "desc_genres");
            $(this).removeClass("toggle-active");
        } else {
            var sJLength = 0;
            try {
                sJLength = prep.selectedJSON["data"].length;
            } catch (e) {}
            if (sJLength > 0) {
                $(this).addClass("toggle-active");
                try {
                    prep.destroyInit();
                } catch (e) {}
                prep = new Prep(false, $("#genres").find(".datatable"), {}, 2);
                prep.tableContainer = $("#genres");
                prep.selectedJSON = store;
                prep.setupJSON();
                prep.initDetails("Selected", "desc_selected");
            }
        }
        return false;
    });

    $('.search-toggle').click(function () {
        if ($('.hiddensearch').css('display') == 'none') {
            $('.hiddensearch').slideDown();
            $("input[type='search']").focus();
        } else {
            $('.hiddensearch').slideUp();
        }
    });

    /* Builder Area */
    function Prep(origin, table, json, index) {
        this.origin = origin;
        this.table = table;
        this.json = json;
        this.tableContainer;
        this.selectedJSON;

        var colArr = [
            ["Name", "Description", "Distribution", "Parameter Beh.", "Answer Sheet"],
            ["Name", "Grade", "History", "Available Quesitons"],
            ["Name", "Grade", "Selected Level", "Rarity"]
        ];
        this.columns = colArr[index];
    }

    Prep.prototype.updateColumns = function () {
        var $cols = this.table.find("tr").first();
        $cols.empty();
        $.each(this.columns, function (i, val) {
            $cols.append($("<th>").text(val));
        });
    };

    Prep.prototype.initDetails = function (title, desc) {
        this.tableContainer.find("span:eq(0)").text(title);
        this.tableContainer.find("p").text(desc);
    };

    Prep.prototype.destroyInit = function () {
        this.table.DataTable().destroy();
    };

    Prep.prototype.setupJSON = function () {
        this.updateColumns();
        this.table.DataTable({
            "data": this.selectedJSON["data"],
            "oLanguage": {
                "sStripClasses": "",
                "sSearch": "",
                "sSearchPlaceholder": "Enter Keywords Here",
                "sInfo": "_START_ - _END_ of _TOTAL_",
                "sProcessing": "DataTables is currently busy...",
                "sLengthMenu": '<span>Rows per page:</span><select class="browser-default">' +
                    '<option value="5">5</option>' +
                    '<option value="4">4</option>' +
                    '<option value="2">2</option>' +
                    '</select></div>'
            },
            "lengthMenu": [5, 4, 2],
            bAutoWidth: false,
            processing: true,
        });
    };

    Prep.prototype.setup = function () {
        this.updateColumns();
        var tableObj = this.table.DataTable({
            "ajax": this.json,
            "oLanguage": {
                "sStripClasses": "",
                "sSearch": "",
                "sSearchPlaceholder": "Enter Keywords Here",
                "sInfo": "_START_ - _END_ of _TOTAL_",
                "sProcessing": "DataTables is currently busy...",
                "sLengthMenu": '<span>Rows per page:</span><select class="browser-default">' +
                    '<option value="5">5</option>' +
                    '<option value="4">4</option>' +
                    '<option value="2">2</option>' +
                    '</select></div>'
            },
            "lengthMenu": [5, 4, 2],
            bAutoWidth: false,
            processing: true,
            select: {
                style: "single"
            }
        });

        if (this.origin) {
            tableObj.off("select.dt").on('select.dt', function (e, dt, type, index) {
                var data = tableObj.rows(index).data().toArray()[0];
                var modal = $("#confirm-modal > .modal-content");
                modal.find("h4").text(data[0]);
                modal.find("p").text(data[1]);

                console.warn(data[5]);

                var ctx = modal.find("canvas");
                var radarChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ['5', '4', '3', '2', '1'],
                        datasets: [{
                            data: data[5],
                            borderColor: "#BA3946",
                            backgroundColor: "rgba(199, 96, 107, 0.5)"
                        }],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        scale: {
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 10,
                                stepSize: 2,
                                display: false
                            }
                        },
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
                        }
                    }
                });

                $('#confirm-modal').modal({
                    dismissible: true,
                    opacity: .5,
                    inDuration: 300,
                    outDuration: 200,
                    startingTop: '20%',
                    endingTop: '28%',

                    complete: function () {
                        radarChart.destroy();
                    }
                });

                $("#modal-continue").off("click").on("click", function () {
                    $("#project_name").val(data[0]);
                    $("#desc").val(data[1]);

                    var dI = $("#dOption").find(`option:contains(${data[2]})`).index() + 1;
                    $("#dOption").val(dI);

                    var pI = $("#pOption").find(`option:contains(${data[3]})`).index() + 1;
                    $("#pOption").val(pI);

                    var check = (data[4] === "Embed") ? true : false;
                    $("#aOption").prop("checked", check);

                    $('select').material_select();
                    Materialize.updateTextFields();
                    $("input, textarea, select").trigger("change");

                    try {
                        prep.destroyInit();
                        radarChart.destroy();
                    } catch (e) {}

                    $("#next, .toolCreate").trigger("click");
                });

                $('#confirm-modal').modal('open');
            }).on('deselect.dt', function (e, dt, type, index) {
                $(".selectedItem").addClass("hide");
                $("#next").addClass("hide");
            });
        } else {
            $(".genre-list").removeClass("hide");
            selectedJSON = {
                "data": []
            };

            tableObj.off("select.dt").on('select.dt', function (e, dt, type, index) {
                var data = tableObj.rows(index).data().toArray()[0];
                $('#genre-selector').find("h4").text(data[0]);
                $('#genre-selector').find("p").first().text(data[1]);

                var validate = [false, 0];
                $.each(selectedJSON["data"], function (i, val) {
                    try {
                        if (data[0] === val[0]) {
                            validate[0] = true;
                            validate[1] = i;
                        }
                    } catch (e) {}
                });

                $('#genre-selector').modal({
                    dismissible: false,
                    ready: function (modal, trigger) {
                        tableObj.rows(index).deselect();
                        $(this).find("input[type='checkbox']").each(function () {
                            $(this).prop("checked", false);
                        });
                        $("#rarity").val(25);
                        if (validate[0]) {
                            $(this).find(".modal-action").text("Done");
                            var rs = selectedJSON["data"][validate[1]][2].split(", ");
                            $.each(rs, function (i, val) {
                                $(`#${val}`).prop("checked", true);
                            });
                            $("#rarity").val(selectedJSON["data"][validate[1]][3]);
                        } else {
                            $(this).find(".modal-action").text("Agree");
                        }
                    },
                    complete: function () {
                        var $so = [];

                        if (validate[0]) selectedJSON["data"].splice(validate[1], 1);

                        $so.push(data[0]);
                        $so.push(data[1]);

                        var levels = [];
                        $(this).find("input[type='checkbox']").each(function () {
                            if ($(this).prop("checked")) levels.push($(this).attr("id"));
                        });
                        if (levels.length === 0) levels.push("r5");
                        $so.push(levels.join(", "));
                        $so.push($("#rarity").val());

                        selectedJSON["data"].push($so);

                        prep.selectedJSON = selectedJSON;
                        $(".pNext").removeClass("disabled");
                    }
                });
                $("#genre-selector").modal('open');
            }).on('deselect.dt', function (e, dt, type, index) {});
        }
    };
});

export default {
    name: 'DataTable'
}