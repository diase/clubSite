

//Source: instructor provided

const SLIDES1 = $(".slide");
const SLIDES2 = $(".slides");
const CAP1 = $(".caption");
const CAP2 = $(".captions");



function nextSlide() {

  let nextNum = SLIDES1.index($(".slide").not($(".hidden"))) + 1 + 1;
  if (nextNum > SLIDES1.length) {
    nextNum = 1;
  }
  showSlide(nextNum);

}

function nextCaption()
{
  let nextNum = CAP1.index($(".caption").not($(".hidden"))) + 1 + 1;
  if (nextNum >  CAP1.length)
  {
    nextNum = 1;
  }
  showCaption(nextNum);
}

function nextSlide2() {
  let nextNum = SLIDES2.index($(".slides").not($(".hidden"))) + 1 + 1;
  if (nextNum > SLIDES2.length) {
    nextNum = 1;
  }
  showSlide2(nextNum);
}

function nextCaption2()
{
  let nextNum = CAP2.index($(".captions").not($(".hidden"))) + 1 + 1;
  if (nextNum >  CAP2.length)
  {
    nextNum = 1;
  }
  showCaption2(nextNum);
}



$("#rightbutton1").click(function() {
  nextSlide();
  nextCaption();
});

$("#rightbutton2").click(function() {
  nextSlide2();
  nextCaption2();
});

function prevSlide() {

  let prevNum = SLIDES1.index($(".slide").not($(".hidden"))) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES1.length;
  }
  showSlide(prevNum);
}

function prevCaption() {

  let prevNum = CAP1.index($(".caption").not($(".hidden"))) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = CAP1.length;
  }
  showCaption(prevNum);
}


function prevSlide2() {

  let prevNum = SLIDES2.index($(".slides").not($(".hidden"))) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES2.length;
  }
  showSlide2(prevNum);
}

function prevCaption2() {

  let prevNum = CAP2.index($(".captions").not($(".hidden"))) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = CAP2.length;
  }
  showCaption2(prevNum);
}

$("#leftbutton1").click(function() {
  prevSlide();
  prevCaption();
});

$("#leftbutton2").click(function() {
  prevSlide2();
  prevCaption2();
});




function showSlide(num) {
  let index = num - 1;
  let currentSlide1 = SLIDES1.eq(index);
  SLIDES1.addClass("hidden");
  currentSlide1.removeClass("hidden");

}

function showCaption(num){
  let index = num - 1;
  let currentCaption1 = CAP1.eq(index);
  CAP1.addClass("hidden");
  currentCaption1.removeClass("hidden");

}


function showSlide2(num) {
  let index = num - 1;
  let currentSlide = SLIDES2.eq(index);
  SLIDES2.addClass("hidden");
  currentSlide.removeClass("hidden");

}

function showCaption2(num){
  let index = num - 1;
  let currentCaption2 = CAP2.eq(index);
  CAP2.addClass("hidden");
  currentCaption2.removeClass("hidden");

}
