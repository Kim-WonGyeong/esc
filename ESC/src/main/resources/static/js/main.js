gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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
    if (window.matchMedia("(min-width:769px)").matches) {
    document.body.style.overflow = "auto"; 
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });
    };

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

let piclist = ['/img/final1.jpg','/img/final2.jpg','/img/final3.jpg','/img/final4.jpg','/img/final5.jpg'];
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
    endTrigger:".container > h1",
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

function temp2 () {
    document.getElementsByClassName("click_text_top")[0].innerHTML = `
                <span>Skintype Brief</span>
                <br><br>클릭하시면 줄임말을 풀어볼 수 있습니다
                `;
}

gsap.to(".click_text", {
    scrollTrigger: {
        trigger:".section3-text",
        endTrigger:".check_showtxt",
        toggleActions: "resume reverse",
        start: "top 50%",
        end: "top 72%",
        onEnter: function () {
            $('.click_text').css({
                "display":""
            });
        },
        onLeave: function () {
            temp2();
            $('.click_text').css({
                "display":"none"
                
            });
        },
        onEnterBack: function() {
            $('.click_text').css({
                "display":""
            });
        },
        onLeaveBack: function() {
            temp2();
            $('.click_text').css({
                "display":"none"
            });
        }
    },

})


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
/*       markers: true,
 */      start: "top 70%",
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


/* var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  } */

/* 
function showText(num) {
    // num에 따라 다른 텍스트를 가져와서 text라는 변수에 저장합니다.
    var showText1 ="";
    var showText2 ="";
    if (num === 1) {
        showText1 = "<span>DSPT</span> <br>  DRY | SENSITIVE <br>PIGMENTED | TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 2) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED | TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 3) {
        showText1 = "<span>DSPT</span> <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 4) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 5) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 6) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 7) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 8) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 9) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 10) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 11) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 12) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 13) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 14) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 15) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } else if (num === 16) {
        showText1 = "DSPT <br>  DRY | SENSITIVE | PIGMENTED |TIGHT";
        showText2 = "건성, 민감성, 색소성, 지복합성 피부 타입은<br>탈수, 염증, 색소 침착이라는 피부 건강을 해치는 세 가지 장벽을 가지고 있습니다<br>건조하고 민감한 피부는 특별한 관리가 필요할 수 있지만,<br>적절한 보습제와 피부 진정 성분이 포함된 스킨케어 루틴을 통해<br> DSPT 피부 타입은 더 건강하고 행복한 피부로 나아갈 수 있습니다.";

    } 
    // 가져온 텍스트를 화면에 표시합니다.
    document.getElementsByClassName("click_text_top")[0].innerHTML = showText1;
    document.getElementsByClassName("click_text_bottom")[0].innerHTML = showText2;
}  */


/* const txtX = './';

function showText(num) {
    // 파일 불러오기
    console.log(txtX);
    fetch('./type.txt')
      .then(response => response.text())
      .then(data => {
        // 파일에서 가져온 데이터를 줄바꿈으로 나누어 배열로 저장합니다.
        let texts = data.split('\n');
        // num에 해당하는 글을 가져와서 text에 저장합니다.
        let text = texts[num - 1];
        // 가져온 텍스트를 화면에 표시합니다.
        document.getElementsByClassName(".click_text_bottom").innerHTML = text;
      })
      .catch(error => console.error(error));
  }
  
  node js를 쓰던가
  */

/* async function loadFile(file) {
    let text = await file.text();
    document.getElementById('output').textContent = text;
} */



/* const text = document.querySelector('.lev3_text1 >h2');
const chars = new SplitText(text, { type: 'chars' }).chars;
const SplitText = window.SplitText;


// 각 글자들의 opacity 값을 0으로 설정
gsap.set(chars, { opacity: 0 });

// 각 글자들의 opacity 값을 일정 시간 간격으로 변경하여 텍스트가 나타나는 효과 구현
gsap.timeline({ repeat: -1 })
    .to(chars, { opacity: 1, duration: 0.1, stagger: 0.05 })
    .to(chars, { opacity: 0, duration: 0.1, stagger: 0.05 }, '+1.5'); */

function showText(num) {
    fetch('/json/textjson.json')
        .then(response => response.json())
        .then(json => {
            const type = json.type[num];
            const preview = json.preview[num];
            const describe2 = json.text[num];

            document.getElementsByClassName("click_text_top")[0].innerHTML = `
            ${type}<br>
            <h2>${preview}</h2>
            
            `;

            document.getElementsByClassName("click_text_bottom")[0].innerHTML = `
            ${describe2}
            `;
        });
}