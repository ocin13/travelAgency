$(document).ready(function(){
    $("#open").click(function(){
        $("#mySidebar").hasClass("element-close");
            $("#mySidebar").removeClass("element-close");
            $("#mySidebar").addClass("element-open");
            $("#open").addClass("element-close");
        
    });
    $("#close").click(function(){
        
            $("#mySidebar").removeClass("element-open");
            $("#mySidebar").addClass("element-close");
            $("#open").removeClass("element-close");
        
    });
    $(".menu-item").click(function(){
        
        $("#mySidebar").removeClass("element-open");
        $("#mySidebar").addClass("element-close");
        $("#open").removeClass("element-close");
    
});
});