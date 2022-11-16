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

// when window is resized to wide and hamburger menu is open,
    // make overlay go away

    $(window).resize(function() {
        if ($(window).width() > 600) {
          if (!$("#ham-overlay").hasClass("hidden")){
            $("#ham-overlay").addClass("hidden");
          }
        }
      });
