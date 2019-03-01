$(document).ready(function() {

    var calc = $('.calc');
    var calcKeys = calc.find(".calc_key");
    var charMapping = new Map();

    charMapping.set("sign", "\u00B1"); // &#177;
    charMapping.set("mc", "MC")
    charMapping.set("mr", "MR")
    charMapping.set("m+", "M+")
    charMapping.set("m-", "M-")
    charMapping.set("ms", "MS")
    charMapping.set("mm", "M<sup>-</sup>")
    charMapping.set("bksp", "\u232B")   // &#9003;
    charMapping.set("sqr", "<i>x</i><sup>2</sup>") // \u00B2
    charMapping.set("sqrt", "\u221A")
    charMapping.set("1x", "<sup>1</sup>\u2044<sub><i>x</i></sub>") // U+002F / Solidus and U+2044 ⁄ Fraction slash
    charMapping.set("/", "\u00F7")
    charMapping.set("ce", "CE")
    charMapping.set("c", "C")

    calcKeys.each(function () {
        var current = $(this).attr("value");
        var mapping = charMapping.get(current);
        $(this).html((mapping == undefined) ? current : mapping);
    })



})


