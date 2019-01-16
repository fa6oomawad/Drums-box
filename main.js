$(document).ready(function(){
var flag=0;
var btnn=1;
$("#onoff").click(function(){
if (flag==0){
    $("#onoff").animate({left:"77%"},400);
    
    $(".tools h4").text("OFF");
    btnn=0;
    flag=1;  
    

}

else
 {
    $("#onoff").animate({left:"83%"},400);
    
    $(".tools h4").text("ON");
    flag=0;
    btnn=1;
    
}
});

$(document).keypress(function(e){
    console.log(e.which);

if (e.which==113){
    $("#heater").animate({width: "28%",
    height: "85px"},300);
    $("#heater").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){

        $("#Q").get(0).play();
        $("#volume h2").text("Heater-2");
    }
}

else if(e.which==119){
    $("#dsc").animate({width: "28%",
    height: "85px"},300);
    $("#dsc").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#W").get(0).play();
        $("#volume h2").text("Dsc-Oh");
        }
}
else if (e.which==101){
    $("#kick").animate({width: "28%",
    height: "85px"},300);
    $("#kick").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#E").get(0).play();
        $("#volume h2").text("Kick-n-Hat");
        }
}
else if (e.which==97){
    $("#chord3").animate({width: "28%",
    height: "85px"},300);
    $("#chord3").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#A").get(0).play();
        $("#volume h2").text("Chord-3");
        }
}
else if (e.which==115){
    $("#dry").animate({width: "28%",
    height: "85px"},300);
    $("#dry").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#S").get(0).play();
        $("#volume h2").text("Dry-Ohh");
        }
}
else if(e.which==100){
    $("#bld").animate({width: "28%",
    height: "85px"},300);
    $("#bld").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#D").get(0).play();
        $("#volume h2").text("Bld-H1");
        }
}
else if(e.which==122){
    $("#punchykick").animate({width: "28%",
    height: "85px"},300);
    $("#punchykick").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#Z").get(0).play();
        $("#volume h2").text("punchy-kick");
        }
}
else if(e.which==120){
    $("#sidestick").animate({width: "28%",
    height: "85px"},300);
    $("#sidestick").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#X").get(0).play();
        $("#volume h2").text("side-stick-1");
        }
}

else if(e.which==99){
    $("#brksnr").animate({width: "28%",
    height: "85px"},300);
    $("#brksnr").animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
        $("#C").get(0).play();
        $("#volume h2").text("Brk-snr");
        }
}

});






$("#heater").click(function(){
$(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);

    if(btnn==1){
        $("#Q").get(0).play();
        $("#volume h2").text("Heater-2");
    }
    
});

$("#dsc").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
    $("#W").get(0).play();
    $("#volume h2").text("Dsc-Oh");
    }
});

$("#kick").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
    $("#E").get(0).play();
    $("#volume h2").text("Kick-n-Hat");
    }
});

$("#chord3").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);

    if(btnn==1){
    $("#A").get(0).play();
    $("#volume h2").text("Chord-3");
    }
});

$("#dry").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);

    if(btnn==1){
    $("#S").get(0).play();
    $("#volume h2").text("Dry-Ohh");
    }
});

$("#bld").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
    $("#D").get(0).play();
    $("#volume h2").text("Bld-H1");
    }
});

$("#punchykick").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
    $("#Z").get(0).play();
    $("#volume h2").text("punchy-kick");
    }
});

$("#sidestick").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
    $("#X").get(0).play();
    $("#volume h2").text("side-stick-1");
    }
});

$("#brksnr").click(function(){
    $(this).animate({width: "28%",
    height: "85px"},300);
    $(this).animate({width: "30%",
    height: "90px"},300);
    if(btnn==1){
    $("#C").get(0).play();
    $("#volume h2").text("Brk-snr");
    }
});
















});