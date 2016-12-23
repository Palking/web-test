var checker = true;

$("document").ready(function(){
    $("#SideBar").load("sidebar.html");
    $("#NavBar").load("header.html"); 
});



function DoStuff() {
//    var field = document.getElementById("MainHead");
//    field.innerHTML ="nice";
    $("#MainHead").text("jQuery ftw");
    if(checker){
        $("#BigBox").fadeTo("slow", 0.33);
        checker = false;
    }
    else{
        $("#BigBox").fadeTo("slow", 1)
        checker = true;
    }
}