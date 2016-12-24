var checker = true;
$("document").ready(function(){
    
    //load templates
    $("#SideBar").load("template/sidebar.html");
    $("#NavBar").load("template/header.html"); 
    
    //Expandable textContainers
    $(".textContainer").click(function(){
        //alert("works");
        if( $(this).hasClass("expanded")){
        $(this)
            .children("p")
                .slideUp();
        $(this).removeClass("expanded");
        }
        else{
        $(this)
            .children("p")
                .slideDown();
        $(this).addClass("expanded");
        }
    });
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