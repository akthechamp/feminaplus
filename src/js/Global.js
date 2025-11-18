import $ from "jquery";

$(document).ready(function () {
  $(".menu-click").click(function () {
    $(".mobile-menu").slideDown(300);

    $(this).hide();
    $(".menu-close").show();

    $("header").addClass("bg-white text-black h-40vh height-add");
    $("header a, header p, header button")
      .addClass("h-20vh")
      .removeClass("text-white");
    $("body").addClass("overflow-hidden");
    $(".book-btn").hide();
    $(".main-navbar").hide();
    $(".menu-bar").removeClass("hidden").addClass("!flex");
  });

  $(".menu-close").click(function () {
    $(".mobile-menu").slideUp(300);
    $(this).hide();
    $(".menu-click").show();

    $("header").removeClass("bg-white text-black h-20vh height-add");
    $("header a, header p, header button")
      .removeClass("h-20vh text-black")
      .addClass("text-white");

    $("body").removeClass("overflow-hidden");

    $(".menu-bar").removeClass("!flex").addClass("hidden");
  });
});
