Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 10;
      const rY = this.mousePY * -10;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -10;
      const tY = this.mousePY * -10;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});

const app = new Vue({
  el: '#app'
});

// json
function showText(num) {
  fetch('/json/data.json')
    .then(response => response.json())
    .then(json => {
      const headers = json.headers[num];
      const titles = json.titles[num];
      const contents = json.contents[num];
      
      document.getElementsByClassName("headers")[num].innerHTML = `
      <h1>${headers}</h1>
      `;

      document.getElementsByClassName("titles")[num].innerHTML = `
      <p>${titles}<p>
      `;

      document.getElementsByClassName("contents")[num].innerHTML = `
      <p>${contents}<p>
      `;
    });
}




// // json 사용
// const fs = require('fs');
// const path = require('path');
// const base64 = require('base64-js');

// // 이미지 파일 읽기
// const imagePath = path.join(__dirname, 'image.jpg');
// const imageData = fs.readFileSync(imagePath);

// // 이미지 데이터를 base64 문자열로 인코딩
// const imageBase64 = base64.fromByteArray(imageData);

// // 영상 데이터를 사용하여 JSON 개체 생성
// const jsonData = {
//   "data-image": "data:image/jpeg;base64," + imageBase64,
//   "header": "지성(O) 설명 및 관리법",
//   "content": ["# # 기름(유분)이 많은 피부 : 모공이 유분에 막히는 경우가 많아 피지가 모공 속에 쌓이게 되고 이것이 여드름이나 모낭종으로 발전할 가능성 있어요.",
//               "• 기름종이 사용하기",
//               "• 화장품 유분기 함량 수치 낮은거 사용하기",
//               "• 꿀이 들어간 제품이나 알로에 제품 사용하기",
//               "• 세수 하루 2번, 순한 비누 및 클렌징 폼 사용하기."]
// };

// // JSON 개체를 파일에 저장
// const jsonPath = path.join(__dirname, 'data.json');
// fs.writeFileSync(jsonPath, JSON.stringify(jsonData));



// const fs = require('fs');
// const path = require('path');

// // 파일에서 JSON 데이터 읽기
// const jsonPath = path.join(__dirname, 'data.json');
// const jsonData = fs.readFileSync(jsonPath, 'utf-8');

// // JSON 데이터를 JavaScript 개체로 구문 분석
// const parsedData = JSON.parse(jsonData);

// // 필요에 따라 개체의 속성에 액세스
// console.log(parsedData['header']); 
// console.log(parsedData['content']); 
// console.log(parsedData['data-image']); 

