$("document").ready(function(){
    //Expandable textContainers
    $(".textContainer>.head").click(function(){
        //alert("head clicked");
        var currentHead = $(this);
        if( currentHead.hasClass("expanded")){
        currentHead
            .siblings(".content")
                .slideUp("fast", function(){
                    //animate here -> waits for slideUp to finish
                    
                    currentHead
                        .animate({ 
                borderBottomLeftRadius: 10, 
                borderBottomRightRadius: 10}, 100);
                })
                currentHead.removeClass("expanded")
                    .children(".containerInfo")
                        .html("[click to expand]");
         }
        else{
        currentHead
          //  .css({
          //      borderBottomLeftRadius: 10, 
          //      borderBottomRightRadius: 10 })
            .animate({ 
                borderBottomLeftRadius: 0, 
                borderBottomRightRadius: 0}, 100,
                function(){
                    currentHead
                        .siblings(".content")
                            .slideDown("fast")
                    currentHead
                        .addClass("expanded")
                        .children(".containerInfo")
                            .html("[click to colapse]");                  
                });
        }
    });
});