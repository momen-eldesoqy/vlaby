$(document).ready(function () {
  $("body").addClass(localStorage.getItem('mode'));
  var mode = "";
  $(".mode").on("click",function(){
    if(!$("body").hasClass("dark"))
    {
      mode = "dark";
      localStorage.setItem('mode', mode);
    }else {
      localStorage.setItem('mode', mode);
    }
    $(".mode i").toggleClass("fa-sun fa-moon");
    $("body").toggleClass("dark");
  })
  $(".noti-icon .fa-bell , .noti-icon .number").on("click",function(){
    $(".box").toggleClass("hidden");
  })
});

// show | hide the mobile nav bar
var nav = document.getElementsByClassName("nav-mob")[0];
navBtn = document.getElementsByClassName("nav-btn")[0].onclick = function(){

    if(nav.classList.contains("hidden"))
    {
      nav.classList.remove("hidden");
      document.getElementsByClassName("mobile-icon")[0].classList.remove("fa-align-justify");
      document.getElementsByClassName("mobile-icon")[0].classList.add("fa-times");
    }else
    {
      nav.classList.add("hidden");
      document.getElementsByClassName("mobile-icon")[0].classList.remove("fa-times");
      document.getElementsByClassName("mobile-icon")[0].classList.add("fa-align-justify");
    }
}

var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 0,
  wrap: false
})
