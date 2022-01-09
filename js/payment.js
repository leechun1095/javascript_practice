// image
// kor_name
// eng_name
// price
// sum_price

// #### 컵사이즈=Tall 이면 price 사용
// #### 컵사이즈=Grande 또는 Venti 이면 after_price 사용

//포장옵션 셋팅
localStorage.setItem("takeout", "N");
var takeout = document.querySelector(".chk1");
takeout.onclick = function(){
    if(takeout.checked === false) {
        localStorage.setItem("takeout", "N");
    } else {
        localStorage.setItem("takeout", "Y");
    }
}

//결제수단 셋팅
var rdo1 = document.querySelector(".rdo1");
var rdo2 = document.querySelector(".rdo2");
var rdo3 = document.querySelector(".rdo3");
rdo1.onclick = function(){
    if(rdo1.checked === true) {
        localStorage.setItem("pay_channel", "스타벅스카드");
    }
}
rdo2.onclick = function(){
    if(rdo2.checked === true) {
        localStorage.setItem("pay_channel", "신용카드");
    }
}
rdo3.onclick = function(){
    if(rdo3.checked === true) {
        localStorage.setItem("pay_channel", "SSG PAY");
    }
}

// 최종 결제할 메뉴 셋팅
var con11 = document.querySelector("#content11");
var kor_name = localStorage.getItem("kor_name");
var price = localStorage.getItem("price");
var quantity = localStorage.getItem("quantity");
var sum_price = localStorage.getItem("sum_price");

localStorage.setItem("discount", 0);
var discount = localStorage.getItem("discount");
var final_price = Number(sum_price) - Number(discount);
localStorage.setItem("final_price", final_price);

con11.children[0].innerText = kor_name + " "+quantity+"잔";
con11.children[2].innerText = "\\ "+sum_price+"원";

var con12 = document.querySelector("#content12");
con12.children[1].innerText = sum_price + "원";
con12.children[4].innerText = discount +"원";

var con13 = document.querySelector("#content13");
con13.children[1].innerText = final_price +"원";


// 주문하기 페이지 이동
// var payment = document.querySelector("#content14");
// payment.onclick = paymentClick;

// function paymentClick() {
//   console.log(this);
//   window.open("fanalConfirm.html", "_self");
// }

var payment = document.querySelector("#content14");
payment.onclick = openPop;
function openPop() {
    // 결제수단 선택했는지 체크
    var pay_channel = localStorage.getItem("pay_channel");
    if(pay_channel === "스타벅스카드" || pay_channel === "신용카드" || pay_channel ==="SSG PAY") {
        var newWin = window.open("fanalConfirm.html", "", "width=440, height=555");
        newWin.moveBy(306, 280);
    } else {
        alert("결제수단을 선택해주세요^^");
    }
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