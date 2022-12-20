var a = document.querySelector("nav");
var b = "-" + a.offsetHeight + "px";
a.style.top = b;
window.onscroll = function(){
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    a.style.top = "0";
  } else {
    a.style.top = b;
  }
};
