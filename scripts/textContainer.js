$("document").ready(function(){
    //Expandable textContainers
    $(".textContainer>.head").click(function(){
        //alert("works");
        if( $(this).hasClass("expanded")){
        $(this)
            .siblings(".content")
                .slideUp("fast");
        $(this).removeClass("expanded");
        $(this)
            //is this good or bad practice
            //.css({
            //    borderBottomLeftRadius: 0, 
            //    borderBottomRightRadius: 0 })
            .animate({ 
                borderBottomLeftRadius: 10, 
                borderBottomRightRadius: 10}, 300);
        }
        else{
        $(this)
          //  .css({
          //      borderBottomLeftRadius: 10, 
          //      borderBottomRightRadius: 10 })
            .animate({ 
                borderBottomLeftRadius: 0, 
                borderBottomRightRadius: 0}, 300);
        $(this)
            .siblings(".content")
                .slideDown("fast");
        $(this).addClass("expanded");
        }
    });
});