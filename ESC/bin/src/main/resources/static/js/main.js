gsap.registerPlugin(ScrollTrigger);

window.onload = function rap(){
    $('.explain').addClass('active');

    const tl = new TimelineLite({delay: 1.2}),
      firstBg = document.querySelectorAll('.kk_first'),
      secBg = document.querySelectorAll('.kk_second'),
      etext = document.querySelectorAll('.header_text');
    tl
      .to(firstBg, 0.7, {scaleX:3})
      .to(secBg, 0.7, {scaleX:3})
      .to(firstBg, 0.7, {scaleX:0})
      .to(secBg, 0.7, {scaleX:0})
      .to(etext, 0, {opacity:0})
      .to(etext, 0.2, {scaleY:0});

 
}

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


const images = gsap.utils.toArray("section3-img> img");
const loader = document.querySelector(".loader--text");
const updateProgress = (instance) =>
loader.textContent = `${Math.round(
instance.progressedCount * 100 / images.length)
}%`;

const showD = () => {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

    gsap.utils.toArray(".section3-img").forEach((section, index) => {
        const w = section.querySelector(".wraper_img");
        const [x, xEnd] =
            index % 2 ?
                ["100%", (w.scrollWidth - (section.offsetWidth + 800)) * -1] :
                [w.scrollWidth * -1, 432];

        gsap.fromTo(
            w,
            { x },
            {
                x: xEnd,
                scrollTrigger: {
                    trigger: ".section3-text",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    toggleActions: "resume"
                }
            });



    });



    gsap.to(".section3-text", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top center",
            end: "center center",
            toggleActions: "resume reverse",
            scrub: 1
        },
        x: -1590,
    });
};

imagesLoaded(images).on("progress", updateProgress).on("always", showD);




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


section1.addEventListener('click', ()=> {
  ++ione;
  pic2.setAttribute('src',piclist[ione])
  
  wichange(ione);

  if (ione >= piclist.length-1) {
    ione=-1;
    
  }

})

/* document.getElementById("hz").style.width = "200px"; */
var cat = document.querySelector('.slide_pic');

function title_play4() {
    document.querySelector('.slide_pic').style.transform = 'scale(0.3)';

}

function title_play3() {
    document.querySelector('.slide_pic').style.transform = 'scale(1)';
}
function title_play2() {
    document.querySelector('.slide_pic').style.transform = 'scale(1.15)';
}



ScrollTrigger.create({
    trigger: ".slide_pic_img",
    start: "top 10%-=50px",
    end: "top 1%-=100px",
    toggleActions: "resume reverse",
    endTrigger:"body > h1",
    scrub:1,
    duration:0.1,
    ease: 'back',

    onEnter: function () {
        $('.slide_pic').width("100%");
        title_play2();
        $('.section1').css({
            "position":"sticky",
            "overflow":"hidden"
        });
    },

    onLeave: function() {
        $('.slide_pic').width("90%");
        title_play4();
        title_play3();
        $('.section1').css({
            "position":"relative",
        });
    }
    

});

gsap.to(".slide_pic", {
    scrollTrigger: {
        trigger: ".section2",
        toggleActions: "resume reverse",
        start: "top 55%",
/*         markers:true,
 */        end: "top 55%",
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



/* ScrollTrigger.create({
    trigger: ".section4_bottom",
    start: "top 79%",
    end: "top 79%",
    scrub:3,
    
    duration:1,

    toggleActions: "resume reverse",
    onEnter: function () {
        $('.slide_pic').width("90%");
        title_play3();
        
        const t3 = new TimelineLite({delay:0}),
        movesection = document.querySelectorAll('.section1');

        t3
        .to(movesection, 0, {y:-400})
        .to(movesection, 0, asd123qwd())
        .to(movesection, 1, {y:400})
        
        
    }

}); */

function asd123qwd () {

$('.section1').css({
    "position":"relative",
});
}

/* gsap.to(".section-02 h2", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".section-02",
      start: 'center 55%',
      markers: true,
      toggleActions: 'play complete restart',
      scrub: true
      
    }, 
    scale: 4,
    duration: 2,
    ease: 'back'
  }); */


  
  /* const sections = gsap.utils.toArray('section');

  ScrollTrigger.create({
  
    trigger: '.header',
    start: 'top top',
    endTrigger: 'footer',
    end: 'bottom bottom',
    
    //snap: 1 / (sections.length - 1)
    
    snap: {
      snapTo: '.stop',
      duration: {min: 0.25, max: 0.75}, // the snap animation should be at least 0.25 seconds, but no more than 0.75 seconds (determined by velocity)
      delay: 0, // wait 0.125 seconds from the last scroll event before doing the snapping
      ease: "power3.inOut" // the ease of the snap animation ("power3" by default)
    }
    
  }) */

  gsap.to(".lev3_img", {
    scrollTrigger: {
      trigger: ".section2",
      endTrigger: ".lev3_text1 >p",
      toggleActions: "resume reverse",
      /* markers: true, */
      start: "top 70%",
      end: "top 70%",
      scrub:2
    },
    y: 350, duration: 2,
  });
  
  gsap.to(".lev3_img2", {
    scrollTrigger: {
      trigger: ".lev3_text2 > h3",
      endTrigger:".lev3_text2 >p",
      toggleActions: "resume reverse",
      start: "top center",
      end: "bottom center",
      scrub:2
    },
    x: -850, duration: 4,
  });
  
  gsap.to(".lev3_img3", {
    scrollTrigger: {
      trigger: ".textbox_1 > h4",
      endTrigger:".textbox_1 >p",
      toggleActions: "resume reverse",
/*       markers: true,
 */      start: "top center",
      end: "bottom center",
      scrub:1
    },
    x: 1050, duration: 2,
  });


/* section1.addEventListener('click', ()=> {
    ++ione;
    pic2.setAttribute('src',piclist[ione])
    
    wichange(ione);
  
    if (ione >= piclist.length-1) {
      ione=-1;
      
    }
  
}) */


/* for (i in 16) {
    const picme = gsap.utils.toArray("section3-img> img");
    picme[i].addEventListener('click',()=>{
        $(위치).picword[i]

    })

} */