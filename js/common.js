var placeholder; 
  $(document).on({ 
    focus: function () { 
      placeholder = $(this).attr("placeholder"); 
      $(this).attr("placeholder",""); 
    }, 
    focusout: function () { 
      $(this).attr("placeholder",placeholder); 
    } 
  }, 
  'input[placeholder]:not(.readonly),textarea[placeholder]');

$(document).ready(function () {
  $(".slide1").slick({
    arrows: true,
    nextArrow: $('.next__svg1'),
    prevArrow: $('.prev__svg1'),
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    edgeFriction: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slide2").slick({
    dots: false,
    infinite: false,
    arrows: true,
    nextArrow: $('.next__svg2'),
    prevArrow: $('.prev__svg2'),
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".slide3").slick({
    dots: false,
    infinite: false,
    arrows: true,
    nextArrow: $('.next__svg3'),
    prevArrow: $('.prev__svg3'),
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    edgeFriction: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".single-item").slick({
    arrows: false, // показать стрелки
    dots: true, // не показывать точки
    slidesToShow: 1, // показывать по 3 слайда
    autoplay: false,
    adaptiveHeight: true,
    variableWidth: true,
  });
});

// Header

let headerCategory = document.querySelector(".header__category");
let menu = document.querySelector(".header__minmenu-wrap");
headerCategory.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".header__category").length === 0) {
    $(".header__minmenu-wrap").removeClass("active");
  }
});




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
document.querySelector(".header__place").addEventListener("click", function () {
  document.getElementById("headerPlace").classList.add("regionwrap-active")
})
window.onclick = function(event) {
  if (!event.target.closest(".header__place")) {
     document.getElementById("headerPlace").classList.remove("regionwrap-active");
  } 
}

let headerCrate = document.querySelector(".header__crate");
let crateMinmenu = document.querySelector(".crate__minmenu-wrap");

headerCrate.addEventListener("click", function (event) {
  event.preventDefault();
  crateMinmenu.classList.toggle("crateminmenu-active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".header__crate").length === 0) {
    $(".crate__minmenu-wrap").removeClass("crateminmenu-active");
  }
});


let headerLogin = document.querySelector(".header__login");
let cardMenu = document.querySelector(".header__card-minmenu");

headerLogin.addEventListener("click", function (event) {
  event.preventDefault();
  cardMenu.classList.toggle("activ");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".header__login").length === 0) {
    $(".header__card-minmenu").removeClass("activ");
  }
});

// /Header


// Scroll
let scrollCategory = document.querySelector(".scroll__category");
let scrollMenu = document.querySelector(".scroll__minmenuu");

scrollCategory.addEventListener("click", function (event) {
  event.preventDefault();
  scrollMenu.classList.toggle("scroll__active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".scroll__category").length === 0) {
    $(".scroll__minmenuu").removeClass("scroll__active");
  }
});


let scrollLogin = document.querySelector(".scroll__login");
let loginMinmenuScroll = document.querySelector(".login__minmenu-scroll");

scrollLogin.addEventListener("click", function (event) {
  event.preventDefault();
  loginMinmenuScroll.classList.toggle("scroll__login-active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".scroll__login").length === 0) {
    $(".login__minmenu-scroll").removeClass("scroll__login-active");
  }
});


let scrollCrate = document.querySelector(".scroll__crate");
let scrollcrateMinmenu = document.querySelector(".scrollcrate__minmenu-wrap");

scrollCrate.addEventListener("click", function (event) {
  event.preventDefault();
  scrollcrateMinmenu.classList.toggle("scrollcrateminmenu-active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".scroll__crate").length === 0) {
    $(".scrollcrate__minmenu-wrap").removeClass("scrollcrateminmenu-active");
  }
});


let scrollPlace = document.querySelector(".scroll__place");
let scrollRegionWrap = document.querySelector(".scrollregion__wrap");

scrollPlace.addEventListener("click", function (event) {
  event.preventDefault();
  scrollRegionWrap.classList.toggle("scroll__region-active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".scroll__place").length === 0) {
    $(".scrollregion__wrap").removeClass("scroll__region-active");
  }
});



// Header__seach
let HeaderSearch = document.querySelector(".header__search");
let searchList = document.querySelector(".search__list");
let searchExpanded = document.querySelector(".search__expanded-text");
let searchMultiple = document.querySelector(".search__multiple-text");
let headerDownLeft = document.querySelector(".header__down-left");
let search = document.querySelector(".search");

HeaderSearch.addEventListener("click", function (event) {
  event.preventDefault();
  search.classList.toggle("sear__active");
  searchList.classList.toggle("searchlist__active");
  searchExpanded.classList.toggle("search__active");
  searchMultiple.classList.toggle("search__active");
  headerDownLeft.classList.toggle("headerdownleft__active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".header__search").length === 0) {
    $(".search__list").removeClass("searchlist__active");
    $(".search__expanded-text").removeClass("search__active");
    $(".search__multiple-text").removeClass("search__active");
    $(".header__down-left").removeClass("headerdownleft__active");
    $(".search").removeClass("sear__active");
  }
});

// Scroll__Search

let scrollSearch = document.querySelector(".scroll__search");
let scrollLeft = document.querySelector(".scroll__left");
let scrollSearchList = document.querySelector(".scroll-search__list");
let scrollRight = document.querySelector(".scroll__right");
let searchScroll = document.querySelector(".search__scroll");
// let headerDownLeft = document.querySelector(".header__down-left");
// let search = document.querySelector(".search");

scrollSearch.addEventListener("click", function (event) {
  event.preventDefault();
  scrollSearch.classList.toggle("scrollsearch-avtive");
  scrollSearchList.classList.toggle("scroll__search-avtive");
  scrollRight.classList.toggle("scrollright-avtive");
  searchScroll.classList.toggle("searchscroll-avtive");
  scrollLeft.classList.toggle("scrollleft-avtive");
  
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".scroll__search").length === 0) {
    $(".scroll-search__list").removeClass("scroll__search-avtive");
    $(".scroll__right").removeClass("scrollright-avtive");
    $(".search__scroll").removeClass("searchscroll-avtive");
    $(".scroll__left").removeClass("scrollleft-avtive");
    $(".scroll__search").removeClass("scrollsearch-avtive");
  }
});


// Фиксированный хедер
var headerH = $(".headerr__scroll").innerHeight();

$(window).on("scroll", function () {
  if ($(this).scrollTop() > headerH) {
    $(".headerr__scroll").addClass("fixed");
  } else {
    $(".headerr__scroll").removeClass("fixed");
  }
});
