(function(){
    var focusedElementData = {},
    selectedClass = "ba-ce-focused",
    cancelButton = "ba-cancel";
    
    $("#paragraph-select").click(function(){
        $("p").mouseover(function(e){
            $(this).addClass(selectedClass);
            focusedElementData.text = $(this).text().trim();
            focusedElementData.class = $(this).attr("class");
            focusedElementData.id = $(this).attr("id");
            $("#"+ cancelButton).removeClass("hide")
        })
        $("p").mouseout(function(e){
            $(this).removeClass(selectedClass);
            $("#"+ cancelButton).addClass("hide")
        })
        $("p").click(function(e){
            $(this).attr("contenteditable", true)
        })
    })
}())