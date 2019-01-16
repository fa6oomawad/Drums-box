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




});