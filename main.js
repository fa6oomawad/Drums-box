$(document).ready(function(){
var flag=0;
var btnn=1;
$("#onoff").click(function(){
if (flag==0){
    $("#onoff").css("left","77%");
    $(".tools h4").text("OFF");
    btnn=0;
    flag=1;  
    

}

else
 {
    $("#onoff").css("left","83%");
    $(".tools h4").text("ON");
    flag=0;
    btnn=1;
    
}
});


$("#heater").click(function(){
    if(btnn==1){
        $("#Q").get(0).play();
        $("#volume h2").text("Heater-2");
    }
    
});

$("#dsc").click(function(){
    if(btnn==1){
    $("#W").get(0).play();
    $("#volume h2").text("Dsc-Oh");
    }
});

$("#kick").click(function(){
    if(btnn==1){
    $("#E").get(0).play();
    $("#volume h2").text("Kick-n-Hat");
    }
});

$("#chord3").click(function(){
    if(btnn==1){
    $("#A").get(0).play();
    $("#volume h2").text("Chord-3");
    }
});

$("#dry").click(function(){
    if(btnn==1){
    $("#S").get(0).play();
    $("#volume h2").text("Dry-Ohh");
    }
});

$("#bld").click(function(){
    if(btnn==1){
    $("#D").get(0).play();
    $("#volume h2").text("Bld-H1");
    }
});

$("#punchykick").click(function(){
    if(btnn==1){
    $("#Z").get(0).play();
    $("#volume h2").text("punchy-kick");
    }
});

$("#sidestick").click(function(){
    if(btnn==1){
    $("#X").get(0).play();
    $("#volume h2").text("side-stick-1");
    }
});

$("#brksnr").click(function(){
    if(btnn==1){
    $("#C").get(0).play();
    $("#volume h2").text("Brk-snr");
    }
});
















});