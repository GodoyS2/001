function edit()
{   
    var inputs = document.myform;
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
   
}
 var edit_save = document.getElementById("edit-save");
edit_save.onclick = function(){
   this.src = "img/lampada.jpg";
}