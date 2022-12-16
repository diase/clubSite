$("#menu-btn").click(function() {
    if ($("#drop-down-menu").hasClass("hidden")) {
      $("#drop-down-menu").removeClass("hidden");
    } else {
      $("#drop-down-menu").addClass("hidden");
    }
  });
