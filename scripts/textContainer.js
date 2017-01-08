    //###########################
    //Expandable textContainers
    //########################### 

$("document").ready(function(){
        /*
        create the html
        */
        var containers = $(".textContainer");
        for(i = 0; i < containers.length; i++){
            var heading = containers[i].getAttribute("data-heading");
            if(heading == null){
                console.log("Loading text container with the number " + i 
                            + " failed. No proper data-heading attribute provided.");
                continue;
            }
            console.log(heading);
            //is jquerys way cleaner/faster? might rework
            var newContent = containers[i].innerHTML;
            containers[i].innerHTML = "";
            var newHead = $(document.createElement("div"));
            newHead.addClass("head");
            newHead.html("<h3>" + heading + "</h3>");
            newHead.appendTo(containers[i]);
            var newInfo = $(document.createElement("div"));
            newInfo.addClass("containerInfo");
            newInfo.html("[click to expand]");
            newInfo.appendTo(newHead);
            var newContentDiv = $(document.createElement("div"));
            newContentDiv.appendTo(containers[i]);
            newContentDiv.addClass("content");
            newContentDiv.html(newContent);
        }
});


$("document").ready(function(){
        /*
        exandable logic
        */   
    $(".textContainer>.head").click(function(){
        //alert("head clicked");
        var currentHead = $(this);
        //colapse
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
        //expand
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