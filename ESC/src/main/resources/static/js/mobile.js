gsap.registerPlugin(ScrollTrigger);


const buttonBlock = document.querySelector('.title');
const header = document.querySelector('.header');
const menu = document.querySelector('.title_item');
const menu2 = document.querySelector('.title_item_two');
const menu3 = document.querySelector('.title_item_three');
const menu4 = document.querySelector('.header_nonedis')


const pic = document.querySelector('.slide_pic_wrap');
const section1 = document.querySelector('.section1');
const pic2 = document.querySelector('.slide_pic_img');

let piclist = ['./img/final1.jpg','./img/final2.jpg','./img/final3.jpg','./img/final4.jpg','./img/final5.jpg'];
let ione =0;
let wordlist = ['.explain','.explain2','.explain3','.explain4','.explain5'];

const word1 = document.querySelector('.explain');
const word2 = document.querySelector('.explain2');
const word3 = document.querySelector('.explain3');
const word4 = document.querySelector('.explain4');
const word5 = document.querySelector('.explain5');

ScrollTrigger.defaults({
    toggleActions: "restart  resume ",
    scroller: ".container"
  });
  

window.onload = function rap(){
    $('.explain').addClass('active');

}

buttonBlock.addEventListener('click', ()=> {

    header.classList.toggle('active');
    buttonBlock.classList.toggle('active');
    menu.classList.toggle('active');
    menu2.classList.toggle('active');
    menu3.classList.toggle('active');
    menu4.classList.toggle('active');
});



function wichange(ione) {
    if (ione == 1) {
        $('.explain').addClass('active');
        $('.explain2').removeClass('active');
        $('.explain3').removeClass('active');
        $('.explain4').removeClass('active');
        $('.explain5').removeClass('active');
    } else if (ione == 2) {
        $('.explain').removeClass('active');
        $('.explain2').addClass('active');
        $('.explain3').removeClass('active');
        $('.explain4').removeClass('active');
        $('.explain5').removeClass('active');
    } else if (ione == 3) {
        $('.explain').removeClass('active');
        $('.explain2').removeClass('active');
        $('.explain3').addClass('active');
        $('.explain4').removeClass('active');
        $('.explain5').removeClass('active');
    } else if (ione == 4) {
        $('.explain').removeClass('active');
        $('.explain2').removeClass('active');
        $('.explain3').removeClass('active');
        $('.explain4').addClass('active');
        $('.explain5').removeClass('active');
    } else if (ione == 0) {
        $('.explain').removeClass('active');
        $('.explain2').removeClass('active');
        $('.explain3').removeClass('active');
        $('.explain4').removeClass('active');
        $('.explain5').addClass('active');
    }
}

var imageIndex = 0;
var cat2 = document.querySelector('.slide_pic_img');

function changeImage() {
    $('cat2').addClass('fade-out');
    setTimeout(function() {
        if(cat2.src == 'http://127.0.0.1:5501/img/final5.jpg') {
            cat2.src = './img/final1.jpg';
            $('cat2').removeClass('fade-out');
            wichange(0);
        }else if (cat2.src == 'http://127.0.0.1:5501/img/final1.jpg')  {
            cat2.src = "./img/final2.jpg";
            $('cat2').removeClass('fade-out');
            wichange(1);
        }else if (cat2.src == 'http://127.0.0.1:5501/img/final2.jpg'){
            cat2.src = "./img/final3.jpg";
            $('cat2').removeClass('fade-out');
            wichange(2);
        }else if (cat2.src == 'http://127.0.0.1:5501/img/final3.jpg'){
            cat2.src = "./img/final4.jpg";
            $('cat2').removeClass('fade-out');
            wichange(3);
        }else if (cat2.src == 'http://127.0.0.1:5501/img/final4.jpg') {
            cat2.src = "./img/final5.jpg";
            $('cat2').removeClass('fade-out');
            wichange(4);
        }
    }, 1000);
  }

setInterval(changeImage,5000); 


section1.addEventListener('click', ()=> {
    ++ione;
    pic2.setAttribute('src',piclist[ione])
    
    wichange(ione);
  
    if (ione >= piclist.length-1) {
      ione=-1;
      
    }
  
  })


  var cat = document.querySelector('.slide_pic');

  function title_play4() {
      document.querySelector('.slide_pic').style.transform = 'scale(1)';
  
  }
  
  function title_play3() {
      document.querySelector('.slide_pic').style.transform = 'scale(1.1)';
  }
  function title_play2() {
      document.querySelector('.slide_pic').style.transform = 'scale(1.2)';
  }
  
  
  
ScrollTrigger.create({
    trigger: ".slide_pic_img",
    start: "top 10%-=50px",
    end: "top 10%-=50px",
    toggleActions: "resume reverse",
    endTrigger: ".container > h1",
    scrub: 1,
    duration: 0.1,
    ease: 'back',

    onEnter: function () {
        $('.slide_pic').width("100%");
        title_play2();
        $('.section1').css({
            "position": "sticky",
            "overflow": "hidden"
        });
    },

    onLeave: function () {
        $('.slide_pic').width("90%");
        title_play3();
        $('.section1').css({
            "position": "relative",
        });
    },

    onLeaveBack: function() {
        $('.slide_pic').width("90%");
        title_play4();
        $('.section1').css({
            "position": "relative",
        });
    },


});
  
  gsap.to(".slide_pic", {
      scrollTrigger: {
          trigger: ".section2",
          toggleActions: "resume reverse",
          start: "top 55%",
          end: "top 55%",
          scrub: true
      },
      y: -650,
  });
  
  gsap.to(".explainup", {
      scrollTrigger: {
          trigger: ".section2",
          toggleActions: "resume reverse",
          start: "top 55%",
          end: "top 55%",
          scrub: true
      },
      y: -650,
  });

  