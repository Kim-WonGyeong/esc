gsap.registerPlugin(ScrollTrigger);

window.onload = function rap(){
    const tl = new TimelineLite({delay: 1}),
      firstBg = document.querySelectorAll('.kk_first'),
      secBg = document.querySelectorAll('.kk_second');
    
    tl
      .to(firstBg, 0.7, {scaleX:3})
      .to(secBg, 0.7, {scaleX:3})
      .to(firstBg, 0.7, {scaleX:0})
      .to(secBg, 0.7, {scaleX:0});

/*     setInterval(rap,20000);
 */}




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
        x: -1600,
    });
};

imagesLoaded(images).on("progress", updateProgress).on("always", showD);




const pic = document.querySelector('.slide_pic_wrap');
const pic2 = document.querySelector('.slide_pic_img')

let piclist = ['./img/final1.jpg','./img/final2.jpg','./img/final3.jpg','./img/final4.jpg','./img/final5.jpg']
let ione =0;

pic.addEventListener('click', ()=> {
  ++ione;
  pic2.setAttribute('src',piclist[ione])
  if (ione >= piclist.length-1) {
    ione=-1;
    
  }

})