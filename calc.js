$(document).ready(function() {

    var calc = $('.calc');
    var calcKeys = calc.find(".calc_key");

    calcKeys.each(function () {
        var current = $(this).attr("value");
        $(this).text(current);
    })
})


