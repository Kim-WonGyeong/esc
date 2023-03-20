gsap.registerPlugin(ScrollTrigger);









/* 

// Data 탭 data
const data = [
    { item: "item2", value: 30, label: "지성" },
    { item: "item1", value: 20, label: "지성" }
];


svg.selectAll(".text")
    .text(d => `${d.label}: ${d.value}`); // 레이블과 값 표시


*/
const right = document.querySelector('.right');
const left = document.querySelector('.left');

const list_left = document.querySelectorAll('.tbodyL');
const list_right = document.querySelectorAll('.tbodyR');

const body = document.body;
const bgColorsBody = ["#ffb457",  "#BCAAA4", "rgb(110, 110, 110)", "#BCAAA4", "rgb(110, 110, 110)"];

const key = { item: "item2", value: 5500 };/* 예시 */

// Data
const data = [
    { item: "item2", value: 5500 },
    { item: "item1", value: 3000 }
];


// SVG setup
const margin = { top: 20, right: 20, bottom: 30, left: 0 };
const width = 300 - margin.left - margin.right;
const height = 100 - margin.top - margin.bottom;

const svg = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);



// Scales
const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([0, width]);

const yScale = d3.scaleBand()
    .range([height, 0])
    .padding(0.1)
    .domain(data.map(d => d.item));

// Bars
const bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", d => yScale(d.item))
    .attr("width", 0)
    .attr("height", yScale.bandwidth());

svg.selectAll(".text")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", d => xScale(d.value) - 10) // 바 중앙 x좌표
    .attr("y", d => yScale(d.item) + yScale.bandwidth() / 2) // 바 중앙 y좌표
    .attr("dy", "0.35em") // 텍스트 위치 조정
    .text(d => d.value);

    
// Difference between the two values
/*       svg.selectAll(".difference")
.data(data)
.enter()
.append("text")
.attr("class", "difference")
.attr("x", d => xScale(d.value) + 10) // 바 오른쪽에 표시할 x좌표
.attr("y", d => yScale(d.item) + yScale.bandwidth() / 2) // 바 중앙 y좌표
.attr("dy", "0.35em") // 텍스트 위치 조정
.text(d => `${d.value - data[0].value}`); // 두 값의 차이 표시
*/

/*  svg.selectAll(".difference")
.data(data)
.enter()
.append("text")
.attr("class", "difference")
.attr("x", d => xScale(d.value) + 20) // 바 오른쪽에 표시할 x좌표
.attr("y", d => yScale(d.item) + yScale.bandwidth() / 2) // 바 중앙 y좌표
.attr("dy", "0.35em") // 텍스트 위치 조정
.text(d => {
const diff = d.value - data[0].value;
return diff > 0 ? `^${diff}` : diff === 0 ? `0` : `${diff}`;
}); */
// Animation

bars.transition()
    .duration(2000)
    .attr("width", d => xScale(d.value));

// Axes
const xAxis = d3.axisBottom(xScale)
    .tickSizeOuter(0)
    .ticks(5)
    .tickSizeInner(-height);
const yAxis = d3.axisLeft(yScale)
    .tickSize(0)
    .tickSizeOuter(0)
    .ticks(5);


/*  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis); 이게 x축 보이는거*/

svg.append("g")
    .call(yAxis)
    .selectAll(".tick text")
    .text(d => d) // 아이템 이름 추가


    


const svg2 = d3.select(".chart2")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const bars2 = svg2.selectAll(".bar2")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar2")
    .attr("x", 0)
    .attr("y", d => yScale(d.item))
    .attr("width", 0)
    .attr("height", yScale.bandwidth());

svg2.selectAll(".text")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    
    .attr("x", d => xScale(d.value)-10) // 바 중앙 x좌표
    .attr("y", d => yScale(d.item) + yScale.bandwidth() / 2) // 바 중앙 y좌표
    .attr("dy", "0.35em") // 텍스트 위치 조정
    .text(d => d.value);



bars2.transition()
    .duration(2000)
    .attr("width", d => xScale(d.value));

    
svg2.append("g")
    .call(yAxis)
    .selectAll(".tick text")
    .text(d => d) // 아이템 이름 추가










/* 탭 */

const $tabContent = $(".tab_content");
$tabContent.hide();
$tabContent.first().show();

let ione=0;


/* if in tab mode */
$(".tabs >li").click(function () {

    $tabContent.hide();
    const activeTab = $(this).attr("rel");

    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    ione+=1;
   
    body.style.backgroundColor = bgColorsBody[ione];
    if (ione==4) {
        ione=0
    }
   
});


/* Extra class "tab_last" 
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");


/* right */

/* 감자 찌개 상자*/

right.addEventListener('click', ()=> {

    $('.choisItemR').addClass('active');
    $('.right').addClass('de_active');
    $('.right_des').addClass('de_active');
    /* $('.right').removeClass('active'); */
  
})

left.addEventListener('click', ()=>{
    $('.choisItemL').addClass('active');
    $('.left').addClass('de_active');
    $('.left_des').addClass('de_active');
})

function clickv (side) {
    if (side == "R") {
        $('.choisItemR').removeClass('active');
        $('.right').removeClass('de_active');
    }else if (side == "L") {
        $('.choisItemL').removeClass('active');
        $('.left').removeClass('de_active');
    }
}


list_right.forEach(item => {

    item.addEventListener('click', () => {

        $('.choisItemR').removeClass('active');
        $('.right').removeClass('de_active');
        $('.right_des').removeClass('de_active');        
        
    })
    
});
/* $('.right').removeClass('active'); */

list_left.forEach(item => {
    item.addEventListener('click', ()=> {

        $('.choisItemL').removeClass('active');
        $('.left').removeClass('de_active');
        $('.left_des').removeClass('de_active');
        
    })
});



/* 클릭하면 차트 보이는 */

const tempImgDeTween = TweenLite.delayedCall(0.8, tempImgDe);
const tempImgDeTween3 = TweenLite.delayedCall(0.1, tempImgDe2);

const tempImgDeTween2 = TweenLite.to('.tempImg', {
    height: 0,
    transformOrigin: '50%',
    duration: 1,
    margin:0
});



function tempImgDe () {
    $('.tempImg').addClass('de_active');
  
}

function tempImgDe2 () {
    $('.clickHere').addClass('de_active');
    $('.clickHereDes').addClass('de_active');
}



const tempImg = document.querySelector('.tempImg');
const clickHere = document.querySelector('.clickHere');
const clickHereDes = document.querySelector('.clickHereDes');
const chanImg = document.querySelector('.chart1 > h1 ')

const tl = new TimelineLite({ paused: true })
    .to(tempImg, { opacity: 0, duration: 1 }, '-=1')
    .to(clickHere, { opacity: 0, duration: 0.5 }, '-=1')
    .add(tempImgDeTween2)
    .add(tempImgDeTween3)
    .to(chanImg, {backgroundColor: "#b16666", delay:1})
    .add(tempImgDeTween);

tempImg.addEventListener('click', () => {
    // timeline을 실행하여 요소가 부드럽게 이동하고 사라지도록 합니다.
    clickHereDes.style.top='89.3%'
    clickHereDes.style.left='77%'
    clickHereDes.style.color='rgb(69, 69, 69)'
    clickHereDes.style.backgroundColor="#e9e6e4"
   

    tl.play();
    tempImg.style.margin = '0';
    document.getElementsByClassName("showtext")[0].innerHTML = showtext2;


 });

 

const h4 = document.querySelector('.chart1 > h4');
const button_x = document.querySelector('.button_x')

const showtext = "추천 창을 닫으시려면 Click";
const showtext2 = "추천을 보시려면 Click";
let ione2 = 0;

const leftCard = document.querySelector('.wraper2');
const leftCard_in = document.querySelector('.card3');

const describe_view1 = document.querySelector('.card_in-describe > p')


/* const chartAni = document.querySelector('chartAni') 일단 보류 */

h4.addEventListener('click', clickk);
button_x.addEventListener('click', clickk);

function clickk() {
    ione2++;

    if (ione2 == 1) {
        leftCard.classList.add('active')
        leftCard_in.classList.add('active')

        nonedis.classList.add('active')
        nonedis2.classList.add('active')


        document.getElementsByClassName("showtext")[0].innerHTML = showtext;

        
       
    } else if (ione2 == 2) {
        leftCard.classList.remove('active')
        leftCard_in.classList.remove('active')

        nonedis.classList.remove('active')
        nonedis2.classList.remove('active')
        

        document.getElementsByClassName("showtext")[0].innerHTML = showtext2;

        ione2=0;
    }
}


function types (type) {
	console.log(type);
    const charArray = type.split('');
  
    if (charArray[0] == "D") {
      $('.type_D').addClass('active');
    }else if (charArray[0] == "O") {
      $('.type_O').addClass('active');
    }
  
    if (charArray[1] == "S") {
      $('.type_S').addClass('active');
    }else if (charArray[1] == "R") {
      $('.type_R').addClass('active');
    }
  
    if (charArray[2] == "P") {
      $('.type_P').addClass('active');
    }else if (charArray[2] == "N") {
      $('.type_N').addClass('active');
    }
  
    if (charArray[3] == "W") {
      $('.type_W').addClass('active');
    }else if (charArray[3] == "T") {
      $('.type_T').addClass('active');
    }
  }

const describe_view2 = document.querySelector('.describe-view')

const nonedis = document.querySelector('.nonedis')
const nonedis2 = document.querySelector('.nonedis2')

const rightCard = document.querySelector('.wraper3');
const rightCard_in = document.querySelector('.card4');

const button_x2 = document.querySelector('.button_x2')

describe_view1.addEventListener('click', clickk2);
button_x2.addEventListener('click', clickk2);

let ione4 = 0;

function clickk2 () {
    ione4++;

    if (ione4 == 1) {
        rightCard.classList.add('active')
        rightCard_in.classList.add('active')

        nonedis.classList.add('active')
        nonedis2.classList.add('active')



       
    } else if (ione4 == 2) {
        rightCard.classList.remove('active')
        rightCard_in.classList.remove('active')

        ione4=0;
    }
}



const button_plus = document.querySelector('.button_plus');
const left_img = document.querySelector('.left> img');
const right_img = document.querySelector('.right> img');

const left_name = document.querySelector('#tab1 h2');
const right_name = document.querySelector('#tab1 h3');

const left_name_t2 = document.querySelector('#tab2 h2');
const right_name_t2 = document.querySelector('#tab2 h3');

const left_cost = document.querySelector('tab_contentC > h2');
const right_cost = document.querySelector('tab_contentC > h3');




const tempsrc = "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0015/A00000015857913ko.jpg?l=ko"

const images = document.querySelectorAll('.tab_img > img'); 
const srcList = [];

const images_name = document.querySelectorAll('.img_name');
const imagesNList = [];

const images_cost = document.querySelector('.img_name > h3').childNodes[0].nodeValue;
const imagesCList = [];


for (let i = 0; i < images.length; i++) {
    srcList.push(images[i].src); 

    const tempnn = images_name[i].firstChild.data;


    imagesNList.push(tempnn);

    imagesCList.push(images_cost[i]);
}

/* tempImg.style.position = 'absolute';
tempImg.style.bottom = '0';
tempImg.style.margin = '0';
tempImg.style.width = '100%'; */
/* window.onload = function rap() {
    $('.tempImg').removeClass('de_active');
    $('.clickHere').removeClass('de_active');
    $('.clickHereDes').removeClass('de_active');
}

/*
tempImg.addEventListener('click', () => {

    $('.tempImg').addClass('de_active');
    $('.clickHere').addClass('de_active');
    $('.clickHereDes').addClass('de_active');

}) */





/* tempImg.addEventListener('click', () => {
    const tempImg = document.querySelector('.tempImg');
    const clickHere = document.querySelector('.clickHere');
    
  
    // 요소에 .move 클래스를 추가하여 요소가 부드럽게 이동하도록 합니다.
    tempImg.classList.add('move');
    clickHere.classList.add('move');
});
 */


/* 차트  axis 이름 value 값 (백분율) 

function asyncTest(csmtNo){
	let url = '/test';
	fetch(url + "?csmtNo=" + csmtNo)
	.then(res=>{
		res.text().then(function(rs){
		
	})
	.catch(err=>{
		console.log(err);
	})
}

fetch로 reponse request
json / string
>> const asdf(예시) = []
cosnt 받아온녀석들
const 최대길이

for i < 최대길이

asdf.push(받아온 녀석들)

asdf[0] 알락꼬리꼬마도요
asdf[1] value

axis asdf[0]
value asdf[1]

*/


!function () {
	
	

    var data = [
        [   /* 비율 */
            { axis: '알락꼬리꼬마도요', value: 0.95 },
            { axis: '트러블', value: 0.45 },
            { axis: '주름', value: 0.24 },
            { axis: '미백', value: 0.63 },
            { axis: '지성', value: 0.23 },
        ],
    ];

    var RadarChart = function (id, data, options) {
        var config = {
            width: 485,
            height: 485,
            levels: 5,
            radians: 2 * Math.PI,
            opacityArea: 1,
            factor: 0.5,
            segment: 'circle'
        };
        this.data = data;

        if ('undefined' !== typeof options) {
            for (var i in options) {
                if ('undefined' !== typeof options[i]) {
                    config[i] = options[i];
                }
            }
        }

        var allAxis = data[0].map(function (i, j) {
            return i.axis;
        });

        var total = allAxis.length;
        var radius = config.factor * Math.min(config.width / 2, config.height / 2);
        d3.select(id).select('svg').remove();

        var g = d3.select(id)
            .append('svg')
            .attr('width', config.width)
            .attr('height', config.height)
            .append('g');

        var axis = g.selectAll('.axis')
            .data(allAxis)
            .enter()
            .append('g')
            .attr('class', 'axis');

        for (var j = 0; j < config.levels; j++) {

            if (config.segment === 'line') {
                var wlevelFactor = (j + 1) * (config.factor * config.width / config.levels / 2);//config.factor*radius*((j+1)/config.levels);//
                var hlevelFactor = (j + 1) * (config.factor * config.height / config.levels / 2);//config.factor*radius*((j+1)/config.levels);//
                g.selectAll(".levels")
                    .data(allAxis)
                    .enter()
                    .append("svg:line")
                    .attr("x1", function (d, i) { return wlevelFactor * (1 - Math.sin(i * config.radians / total)); })
                    .attr("y1", function (d, i) { return hlevelFactor * (1 - Math.cos(i * config.radians / total)); })
                    .attr("x2", function (d, i) { return wlevelFactor * (1 - Math.sin((i + 1) * config.radians / total)); })
                    .attr("y2", function (d, i) { return hlevelFactor * (1 - Math.cos((i + 1) * config.radians / total)); })
                    .attr("class", "line")
                    .style("stroke", "grey")
                    .style("stroke-opacity", "0.75")
                    .style("stroke-width", "0.3px")
                    .attr("transform", "translate(" + (config.width / 2 - wlevelFactor) + ", " + (config.height / 2 - hlevelFactor) + ")");
            }

            else if (config.segment === 'circle') {
                g.append('svg:ellipse')
                    .attr('cx', config.width / 2)
                    .attr('cy', config.height / 2)
                    .attr('rx', function (d, i) { return (j + 1) * config.factor * (config.width / config.levels / 2) })
                    .attr('ry', function (d, i) { return (j + 1) * config.factor * (config.height / config.levels / 2) })
                    .attr('class', 'ring-level')
                    .style('stroke-dasharray', function () {
                        if (j === config.levels - 1) {
                            return '1,0';
                        }
                        else {
                            return '1,4';
                        }
                    });
            }

            g.append('text')
                .attr('class', 'level-mark')
                .text(100 / config.levels * (j + 1))
                .attr('text-anchor', 'middle')
                .attr('dy', '1em')
                .attr('x', config.width / 2 + 10)
                .attr('y', config.height / 2 - 15 - config.factor * (j + 1) * (config.height / config.levels / 2));
        }


        axis.append('line')
            .attr('x1', config.width / 2)
            .attr('y1', config.height / 2)
            .attr('x2', function (d, i) {
                return config.width / 2 * (1 - config.factor * Math.sin(i * config.radians / total));
            })
            .attr('y2', function (d, i) {
                return config.height / 2 * (1 - config.factor * Math.cos(i * config.radians / total));
            })
            .attr('class', 'line');

        axis.append('text')
            .attr('class', 'legend')
            .text(function (d) { return d; })
            .attr('text-anchor', 'middle')
            .attr('dy', '1em')
            .attr('transform', 'translate(0, -10)')
            .attr('x', function (d, i) {
                var val = i * config.radians / total;
                return (config.width / 2 * (1 - config.factor * Math.sin(val))) - (60 * Math.sin(val));
            })
            .attr('y', function (d, i) {
                var val = i * config.radians / total;
                return (config.height / 2 * (1 - config.factor * Math.cos(val))) - (60 * Math.cos(val));
            });


        data.forEach(function (path, i) {
            var dataValues = [];

            path.forEach(function (point, index) {
                dataValues.push([
                    config.width / 2 * (1 - (parseFloat(Math.max(point.value, 0))) * config.factor * Math.sin(index * config.radians / total)),
                    config.height / 2 * (1 - (parseFloat(Math.max(point.value, 0))) * config.factor * Math.cos(index * config.radians / total)),
                ]);
            });

            g.append('polygon')
                .attr('class', 'radar-chart-' + legendsName[i])
                .data([dataValues])
                .attr('points', function (d) {
                    var string = '';
                    for (var i = 0; i < d.length; i++) {
                        string = string + d[i][0] + ',' + d[i][1] + ' ';
                    }
                    return string;
                })
                .style('stroke', '#485359')
                .style('stroke-width', '3px')
                .style('fill', 'rgb(177, 102, 102)')
                .attr('transform', 'translate(' + 250 + ',' + 250 + ') scale(0)')
                .transition()
                .delay(1500) // 2초 딜레이
                .duration(1500)
                .attr('transform', 'translate(' + 0 + ',' + 0 + ') scale(1)');
        });
    };

    var inputContainer = d3.select('#controller');
    var legendsName = [2013];
    var radar = new RadarChart('#container', data);
    data[0].forEach(function (el, i) {
        var input = inputContainer.append('input')
            .attr('type', 'range')
            .attr('min', '0')
            .attr('max', '100')
            .attr('step', '1')
            .attr('value', el.value * 100)
            .on('input', function () {
                radar.update.call(radar, this.value, i);
            });
    });
}();




/* 왼쪽 탭 */

const $tabT_content = $(".tabT_content");
$tabT_content.hide();
$tabT_content.first().show();


let ione3=0;


/* if in tab mode */
$(".tabTs >li").click(function () {

    $tabT_content.hide();
    const activeTabT = $(this).attr("rel");

    $("#" + activeTabT).fadeIn();
    $("ul.tabTs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_head").removeClass("d_active");
    $(".tab_head[rel^='" + activeTabT + "']").addClass("d_active");

   
});

const cart = ['img/pexels1.jpg', 'img/pexels2.jpg'];
const maxSize = 3; 

const cartn = ['1', '2'];
const cartc = ['1', '2'];
const cartj = ["SkinDeep: 1, Name: 'Yak1'"];

const data2 = [];

const table = document.getElementsByClassName(".dynamicTable");
const tbodyL = document.querySelectorAll(".tbodyL")[0];
const tbodyR = document.querySelectorAll(".tbodyR")[0];
const yak = document.querySelectorAll(".tbody > tr > td:nth-child(1)");
function button_pluss(num) {
    const hidejunss = document.querySelectorAll('.hidejun')[num].firstChild;
    cart.push(srcList[num]);
    cartn.push(imagesNList[num]);
    cartc.push(imagesCList[num]);
    cartj.push(hidejunss);
  
    if (cart.length >= maxSize) {
      cart.shift();
      cartn.shift();
      cartc.shift();
      cartj.shift();
    }
  
    left_img.src = cart[0];
    right_img.src = cart[1];
    left_name.textContent = cartn[0];
    left_name_t2.textContent = cartn[0];
    right_name.textContent = cartn[1];
    right_name_t2.textContent = cartn[1];
  
    // 새로운 data2 계산
    const newData = [];
    cartj.forEach((elem) => {
      const text = elem.textContent.trim();
      const [, skinDeepText, nameText] = text.match(/Skindeep:\s*([\d-]+)\s*#\s*Name:\s*(.*)/i);
      const skinDeep = skinDeepText.trim();
      const name = nameText.trim();
      newData.push({ SkinDeep: skinDeep, Name: name });
    });
    data2.length = 0;
    data2.push(...newData);
  
    if (data2.length >= maxSize) {
      data2.shift();
    }
  
    // 테이블 업데이트
    tbodyL.innerHTML = '';
    tbodyR.innerHTML = '';
    data2.forEach((item, index) => {
      const rowL = tbodyL.insertRow();
      const nameCellL = rowL.insertCell();
      const numCellL = rowL.insertCell();
      const rowR = tbodyR.insertRow();
      const nameCellR = rowR.insertCell();
      const numCellR = rowR.insertCell();
      nameCellL.textContent = item.SkinDeep;
      numCellL.textContent = item.Name;
      nameCellR.textContent = item.SkinDeep;
      numCellR.textContent = item.Name;

      switch (item.SkinDeep) {
        case '1':
        case '1-2':
        case '1-3':
        case '1-4':
        case '2-3':
        case '2-4':
        case '2':
            bgColor = '#009d4f'; // 초록색
            break;
        case '?':
        case '0':
            bgColor = '#a6a6a6'; // 노란색
            break;
        case '3':
        case '3-4':
        case '3-5':
        case '3-6':
        case '4':
        case '4-5':
        case '4-6':
        case '5':
        case '5-6':
        case '6':
        case '6-8':
        case '6-9':
            bgColor = '#ff9e18'; // 빨간색
            break;
        case '7':
        case '8':
        case '9':
            bgColor = '#ff9e18'; // 빨간색
            break;
        default:
            bgColor = ''; // 기본값
            break;
    }
        nameCellL.style.backgroundColor = bgColor;
        nameCellR.style.backgroundColor = bgColor;



    });
  }
