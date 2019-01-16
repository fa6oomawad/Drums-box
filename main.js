$(document).ready(function(){
var flag=0;
$("#onoff").click(function(){
if (flag==0){
    $("#onoff").css("left","77%");
    flag=1;  
}

else
 {
    $("#onoff").css("left","83%");
    flag=0;
}
});

$("#heater").click(function(){
    $("#Q").get(0).play();
    $("#volume h2").text("Heater-2");
});

$("#dsc").click(function(){
    $("#W").get(0).play();
    $("#volume h2").text("Dsc-Oh");
});

$("#kick").click(function(){
    $("#E").get(0).play();
    $("#volume h2").text("Kick-n-Hat");
});

$("#chord3").click(function(){
    $("#A").get(0).play();
    $("#volume h2").text("Chord-3");
});

$("#dry").click(function(){
    $("#S").get(0).play();
    $("#volume h2").text("Dry-Ohh");
});

$("#bld").click(function(){
    $("#D").get(0).play();
    $("#volume h2").text("Bld-H1");
});

$("#punchykick").click(function(){
    $("#Z").get(0).play();
    $("#volume h2").text("punchy-kick");
});

$("#sidestick").click(function(){
    $("#X").get(0).play();
    $("#volume h2").text("side-stick-1");
});

$("#brksnr").click(function(){
    $("#C").get(0).play();
    $("#volume h2").text("Brk-snr");
});













});