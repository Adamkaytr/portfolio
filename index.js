
var video = document.getElementById("myVideo");
video.controls = false;
video.autlay = true;
video.load();
video.play();

var images = document.querySelectorAll(".image");

var showImage = function(index) {
  images[index].style.opacity = "1";
  setTimeout(function() {
    if (index < images.length - 1) {
      showImage(index + 1);
    }
  }, 1000);
};

showImage(0);


const creative = document.getElementById("creative");

function checkInView() {
  const bounding = creative.getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    creative.style.opacity = 1;
    window.removeEventListener("scroll", checkInView);
  }
}

window.addEventListener("scroll", checkInView);


