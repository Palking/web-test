var checker = true;

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
$("<input/>", {
  id: "permissionsInput",
  name: "permissions",
  type: "checkbox", 
  click: function(){
    update();
  },
  checked: "checked"
}).appendTo("#MainDiv");