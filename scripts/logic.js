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
$("document").