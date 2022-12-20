$(".start-button").click(function() {
   $(".title").hide();$(".start-button").hide();$(".firstImage").hide();
    $(".image-2").show();$(".text2").show();$(".button2").show();
});

$(".button2").click(function() {
    $(".image-2").hide();$(".text2").hide();$(".button2").hide();
    $(".image-p").show();$(".text3").show();$(".image-p").css('display', 'flex' );
});
$(".image-red").click(function() {
    $(".image-p").hide();$(".text3").hide();
    $(".enemy").show();$(".text4").show();$(".fight").show();$(".sneak").show();
});
$(".fight").click(function() {
    $(".enemy").hide();$(".text4").hide();$(".fight").hide();$(".sneak").hide();
    $(".ded").show();$(".text5").show();$(".red-ded").show();
});
$(".continue").click(function() {
    $(".ded").hide();$(".text5").hide();$(".red-ded").hide();$(".continue").hide();
    $(".text-end-r").show();$(".end").show();$(".red-end").show();
});
$(".end").click(function() {
    $(".text-end-r").hide();$(".end").hide();$(".red-end").hide();
    $(".end-img").show();
});
$(".sneak").click(function() {
    $(".enemy").hide();$(".fight").hide();$(".sneak").hide();$(".text4").hide();
    $(".sneak-img").show();$(".text-sneak").show();$(".continue").show();
});
$(".continue").click(function() {
    $(".sneak-img").hide();$(".text-sneak").hide();$(".continue").hide();
    $(".text-end-r").show();$(".end").show();$(".red-end").show();
});
$(".image-blue").dblclick(function() {
    $(".image-p").hide();$(".text3").hide();
    $(".b-enemy").show();$(".blue1").show();$(".b-attack").show();$(".ignore").show();
});
$(".b-attack").dblclick(function() {
    $(".b-enemy").hide();$(".blue1").hide();$(".b-attack").hide();$(".ignore").hide();
    $(".attack-path").show();$(".blue-2").show();$(".b-conclusion").show();
});
$(".b-conclusion").dblclick(function() {
    $(".attack-path").hide();$(".blue-2").hide();$(".b-conclusion").hide();
    $(".blue-end").show();$(".end-b").show();$(".end2").show();
});
$(".end2").dblclick(function() {
    $(".blue-end").hide();$(".end-b").hide();$(".end2").hide();
    $(".end-img2").show();
});
$(".ignore").dblclick(function() {
    $(".b-enemy").hide();$(".blue1").hide();$(".b-attack").hide();$(".ignore").hide();
    $(".blue-ded").show();$(".b-ded").show();
});