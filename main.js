$(".project-item").hover(function () {
    var parentId = this.id.charAt(this.id.length - 1);
    
    $("#proj-text-" + parentId).css({"opacity": "1" , "transition" : "0.5s", "background-color" : "rgba(241,241,241,0.95)"});
    
    console.log(parentId);
    
}, function () {
    var parentId = this.id.charAt(this.id.length - 1);

    $("#proj-text-" + parentId).css({"opacity": "0" , "transition" : "0.5s"});
    
});