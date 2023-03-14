gsap.registerPlugin(ScrollTrigger);


/* 

// Data
const data = [
    { item: "item2", value: 30, label: "지성" },
    { item: "item1", value: 20, label: "지성" }
];


svg.selectAll(".text")
    .text(d => `${d.label}: ${d.value}`); // 레이블과 값 표시


*/
const right = document.querySelector('.right');
const left = document.querySelector('.left');

const list_left = document.querySelectorAll('.list >li');
const list_right = document.querySelectorAll('.list2 >li');

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "rgb(110, 110, 110)"];

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
right.addEventListener('click', ()=> {

    $('.choisItemR').addClass('active');
    $('.right').addClass('de_active');
    /* $('.right').removeClass('active'); */
  
})

left.addEventListener('click', ()=>{
    $('.choisItemL').addClass('active');
    $('.left').addClass('de_active');
})

list_right.forEach(item => {

    item.addEventListener('click', () => {

        $('.choisItemR').removeClass('active');
        $('.right').removeClass('de_active');
        /* $('.right').removeClass('active'); */

    })

});

list_left.forEach(item => {
    item.addEventListener('click', ()=> {

        $('.choisItemL').removeClass('active');
        $('.left').removeClass('de_active');
        /* $('.right').removeClass('active'); */
        
        
    })
});




