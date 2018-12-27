
//let body = ;

let menu = $("#topMenu");

$(document).on("scroll", function(e) {
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if (scroll > 105) {
        menu.addClass("topMenuOnScroll");
    } else {
        menu.removeClass("topMenuOnScroll");
    }
});