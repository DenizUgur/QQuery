$(document).ready(function () {
    $('select').material_select();

    $("input[type='text'], textarea, select").each(function () {
        $(this).change(function () {
            console.log($(this).val());
        });
    });

    $("input[type='checkbox']").change(function () {
        console.log($(this).prop('checked'));
    });

    $("form").change(function () {
        var data = $(this).serializeArray();
        console.log(data);
    });
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