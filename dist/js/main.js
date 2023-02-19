var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

//scroll fade in
window.onload = function(){
  AOS.init({
    duration: 1200
   });
}

//사이드 메뉴 스크롤
const $sec = $('section');

$(window).scroll(function(){

  //화면 스크롤 위치
  let sct = $(window).scrollTop();

  // offSet().top이 4개 필요하므로 반복문 사용
  for(let i = 0; i < $sec.length; i++) {

    //section top위치
    let sectionTop = $sec.eq(1).offset().top;
    
    //section bottom위치: section top + outerHeight
    let sectionBottom = sectionTop + $sec.eq(1).outerHeight();
    console.log(sectionBottom)
    //스크롤이 sectionTop보다 크거나 작고 

  }

});