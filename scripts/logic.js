var checker = true;
//load templates
$("document").ready(function(){
    $("#SideBar").load("template/sidebar.html");
    $("#NavBar").load("template/header.html"); 
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