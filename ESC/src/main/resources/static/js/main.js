var ak1 = '<i class="fa-sharp fa-solid fa-circle-dot"></i> <i class="fa-sharp fa-solid fa-circle"></i> <i class="fa-sharp fa-solid fa-circle"></i><p>PERFECT SKINCARE</p>'
var ak2 = '<i class="fa-sharp fa-solid fa-circle"></i> <i class="fa-sharp fa-solid fa-circle"></i> <i class="fa-sharp fa-solid fa-circle-dot"></i><p>PERFECT SKINCARE</p>'
var ak3 = '<i class="fa-sharp fa-solid fa-circle"></i> <i class="fa-sharp fa-solid fa-circle-dot"></i> <i class="fa-sharp fa-solid fa-circle"></i><p>PERFECT SKINCARE</p>'

var testimg = './img/pic1.jpg'
var testimg2 = './img/pic2.jpg'
var cat = document.querySelector('.galary_img')

var testlist = [testimg, testimg2]
var templist = [ak1, ak2, ak3]


$('body').on('keydown', function (event) {



function movelr(e) {
  if (e == 37) {
      $('#ab').html(templist[0])
     /*  document.getElementsByClassName("galary_img").src = testlist[0] */
      cat.setAttribute('src','./img/pic1.jpg')
  }else if (e == 39) {
    $('#ab').html(templist[1])
/*       document.getElementsByClassName("galary_img").src = './img/pic2.jpg'
 */      cat.setAttribute('src','./img/pic2.jpg')

  }
}

function resetc() {
  $('#ab').html(templist[2])
}



movelr(event.keyCode);
setTimeout(resetc,1000);


})





var imageIndex = 0;
var cat2 = document.querySelector('.galary_img');

function changeImage() {
    cat2.classList.add("fade-out");
    setTimeout(function() {
        if(cat2.src == 'http://127.0.0.1:5500/img/pic1.jpg') {
            cat2.src = './img/pic2.jpg';
            cat2.classList.remove("fade-out");
        }else if (cat2.src == 'http://127.0.0.1:5500/img/pic2.jpg')  {
            cat2.src = "./img/pic3.jpg";
            cat2.classList.remove("fade-out");
        }else if (cat2.src == 'http://127.0.0.1:5500/img/pic3.jpg'){
            cat2.src = "./img/pic4.jpg";
            cat2.classList.remove("fade-out");
        }else {
            cat2.src = "./img/pic1.jpg";
            cat2.classList.remove("fade-out");
        }
    }, 1000);
  }

 setInterval(changeImage,12000); 


const buttonBlock = document.querySelector('.title');
const menu = document.querySelector('.title_item');
const menu2 = document.querySelector('.title_item-none');
const menu3 = document.querySelector('.title_item_two');
const menu4 = document.querySelector('.title_item_three');
const menu5 = document.querySelector('.title_item_four');
const menu6 = document.querySelector('.icon_name_title');

buttonBlock.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    menu2.classList.toggle('active');
    menu3.classList.toggle('active');
    menu4.classList.toggle('active');
    menu5.classList.toggle('active');
    menu6.classList.toggle('active');
});


const pic = document.querySelector('.galary_img_wrap');
const pic2 = document.querySelector('galary_img')

var piclist = ['./img/pic1.jpg','./img/pic2.jpg','./img/pic3.jpg','./img/pic4.jpg']
var ione =0

pic.addEventListener('click', ()=> {
  ++ione;
  cat.setAttribute('src',piclist[ione])
  console.log(ione)
  if (ione >= piclist.length-1) {
    ione=-1;
    
  }

})


/* const dark = document.querySelector('.dark_button');
const body = document.querySelector('body')
const header_top = document.querySelector('.header_top')

dark.addEventListener('click', ()=>{
  header_top.classList.toggle('dark');

}) *//* 
cat2.src = './img/pic2.jpg'
lcclor.setAttribute('src','img/leftcolor.png');
rcclor.setAttribute('src','img/rightcolor.png'); */
function dis_non() {
  document.getElementsByClassName("typing_demo")[0].style.display="none";
  document.getElementsByClassName("logo")[0].style.display="none";
}
self.setTimeout("dis_non()",6900);


/* var lcclor = document.querySelector(".Lchange_color")
var rcclor = document.querySelector(".Rchange_color");
function changeColor() {


  lcclor.setAttribute('src','./img/leftcolor.png');
  rcclor.setAttribute('src','./img/rightcolor.png');

}
self.setTimeout("changeColor()",4900);

 */
gsap.registerPlugin(ScrollTrigger);

gsap.to(".lev3_img", {
  scrollTrigger: {
    trigger: ".section2_text",
    toggleActions: "resume reverse",
    /* markers: true, */
    start: "top center",
    end: "bottom center",
    scrub:2
  },
  y: 350, duration: 2,
});

gsap.to(".lev3_img2", {
  scrollTrigger: {
    trigger: ".lev3_text2 > h3",
    toggleActions: "resume reverse",
/*     markers: true,
 */    start: "top center",
    end: "bottom center",
    scrub:2
  },
  x: -850, duration: 4,
});

gsap.to(".lev3_img3", {
  scrollTrigger: {
    trigger: ".textbox_1 > h4",
    toggleActions: "resume reverse",
    /* markers: true, */
    start: "top center",
    end: "bottom center",
    scrub:1
  },
  x: 850, duration: 2,
});



const images = gsap.utils.toArray("section3-img> img");
const loader = document.querySelector(".loader--text");
const updateProgress = (instance) =>
loader.textContent = `${Math.round(
instance.progressedCount * 100 / images.length)
}%`;



const showDemo = () => {
  document.body.style.overflow = "auto";
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

  gsap.utils.toArray(".section3-img").forEach((section, index) => {
    const w = section.querySelector(".wraper_img");
    const [x, xEnd] =
    index % 2 ?
    ["100%", (w.scrollWidth - (section.offsetWidth-30)) * -1] :
    [w.scrollWidth * -1, 0];

    gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: ".section3-text",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        toggleActions: "resume"
       } });

       

  });

 

  gsap.to(".section3-text", {
    scrollTrigger: {
      trigger: ".section3",
        start: "top center",
        end: "center center",
        toggleActions: "resume reverse",
        scrub: 2
    },
    x: -1900, 
  });
};


imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);


window.onload = function(){
  const tl = new TimelineLite({delay: 1}),
    firstBg = document.querySelectorAll('.text__first-bg'),
    secBg = document.querySelectorAll('.text__second-bg'),
    word  = document.querySelectorAll('.text__word');
  
  tl
    .to(firstBg, 0.7, {scaleX:1})
    .to(secBg, 0.7, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")  
    .to(firstBg, 0.7, {scaleX:0})
    .to(secBg, 0.7, {scaleX:0});
  
}

function kkk(){
  const t2 = new ScrollTrigger(),
    firstBg2 = document.querySelector('.kkk__first-bg'),
    secBg2 = document.querySelector('.kkk__second-bg');

  t2
    .to(firstBg2, 0.7, {scaleX:1})
    .to(secBg2, 0.7, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")  
    .to(firstBg2, 0.7, {scaleX:0})
    .to(secBg2, 0.7, {scaleX:0});
}



kkk();