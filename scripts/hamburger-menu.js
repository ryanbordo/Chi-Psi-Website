// when hamburger icon is clicked:
    // if hamburger panel is currently hidden:
        // show hamburger panel
        // show site overlay
    // if hamburger panel is currently visible:
        // hide hamburger panel
        // hide site overlay

$("#hamburger").click(function(){
    if ($("#hamburger-menu").hasClass("hidden")){
        $("#hamburger-menu").removeClass("hidden");
        $("#ham-overlay").removeClass("hidden");
    }
    else{
        $("#hamburger-menu").addClass("hidden");
        $("#ham-overlay").addClass("hidden");
    }
})
