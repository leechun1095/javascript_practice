// image
// kor_name
// eng_name
// price
// sum_price

// 초기화
function init2(){
    localStorage.setItem("kor_name", "");
    localStorage.setItem("eng_name", "");
    localStorage.setItem("price", "");
    localStorage.setItem("after_price", "");
    localStorage.setItem("sum_price", "");
    localStorage.setItem("cup_kind", "");
    localStorage.setItem("cup_size", "");
    localStorage.setItem("quantity", "");
    localStorage.setItem("takeout", "");
    localStorage.setItem("pay_channel", "");
    localStorage.setItem("discount", "");
    localStorage.setItem("final_price", "");
    localStorage.setItem("image", "");
}
init2();

var con1 = document.querySelector(".content1");
var con2 = document.querySelector(".content2");
var con3 = document.querySelector(".content3");
var con4 = document.querySelector(".content4");
var con5 = document.querySelector(".content5");
var con6 = document.querySelector(".content6");
var con7 = document.querySelector(".content7");
var con8 = document.querySelector(".content8");

var menu1 = document.querySelectorAll("#menu1");

con1.onclick = menuClick;
con2.onclick = menuClick;
con3.onclick = menuClick;
con4.onclick = menuClick;
con5.onclick = menuClick;
con6.onclick = menuClick;
con7.onclick = menuClick;
con8.onclick = menuClick;

function menuClick() {
    // console.log(this);
    // console.log(this.children[0].outerHTML.split("/")[1].split(".")[0]); // cofee1 
    // console.log(this.children[1].children);     
    // console.log(this.children[1].children[0].innerText); //이름
    // console.log(this.children[1].children[2].innerHTML); 영문
    // console.log(this.children[1].children[4].innerHTML); 가격
    
    localStorage.setItem("image", this.children[0].outerHTML.split("=")[2].split(">")[0].split('"')[1]);
    localStorage.setItem("kor_name", this.children[1].children[0].innerText);
    localStorage.setItem("eng_name", this.children[1].children[2].innerHTML);
    localStorage.setItem("price", this.children[1].children[4].innerHTML.split("원")[0]);
    
    window.open("menuDetail.html", "_self");
}


//시계 구현
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `현재시간 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}



function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();

// setInterval(첫번째 인자, 두번쨰 인자)
// 첫번째 인자 : 함수
// 두번쨰 인자 : 실행한 시간 간격(밀리세컨 기준, 1초 = 1000)
