// image
// kor_name
// eng_name
// price
// sum_price

// console.log(menu1.childNodes[1].innerHTML); 아이스 카페 아메리카노
// console.log(menu1.childNodes[4].innerHTML); Iced Caffe Americano
// console.log(menu1.childNodes[7].innerHTML); 4100원

// #### 컵사이즈=Tall 이면 price 사용
// #### 컵사이즈=Grande 또는 Venti 이면 after_price 사용

// 사진 변경
// 가장 안됐던 부분... 책 8장에서 hint를 얻음 pic.src = newPic, setAttribute("src", ); 2가지 방법으로 해결함.
var pic = document.querySelector("#con1");
var newPic = localStorage.getItem("image");
pic.setAttribute("src", newPic);
// pic.src = newPic;

// 메뉴 셋팅
var menu1 = document.querySelector("#menu1");

menuSelect();

function menuSelect() {
  var kor_name = localStorage.getItem("kor_name");
  var eng_name = localStorage.getItem("eng_name");
  var price = localStorage.getItem("price");

  menu1.childNodes[1].innerHTML = kor_name;
  menu1.childNodes[4].innerHTML = eng_name;
  menu1.childNodes[7].innerHTML = price + "원";
}


//수량 셋팅 : 은근히 1~20 숫자 제한거는 조건문에서 생각을 많이 하게됨 로직 문제로..;;
//초기화
localStorage.setItem("quantity", 1);
localStorage.setItem("cup_size", "Tall");
var price = localStorage.getItem("price");
localStorage.setItem("sum_price", price);

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var result = document.querySelector("#lable1");
result.innerText = 1;

function change(num) {
  var defaultNum = result.innerText;
  defaultNum = Number(defaultNum) + Number(num);
    if(defaultNum > 0 && defaultNum <= 20) {
      result.innerHTML = Number(defaultNum)
      localStorage.setItem("quantity", defaultNum)
      
      var cup_size = localStorage.getItem("cup_size");

        if(cup_size === "Tall") {
          var price = localStorage.getItem("price");
          var sum_price = Number(price) * Number(defaultNum);

          localStorage.setItem("sum_price", sum_price);
          menu1.childNodes[7].innerHTML = sum_price +"원";
        
        } else if (cup_size === "Grande") {
          var after_price = localStorage.getItem("after_price");
          var sum_price = Number(after_price) * Number(defaultNum);

          localStorage.setItem("sum_price", sum_price);
          menu1.childNodes[7].innerHTML = sum_price +"원";

        } else {
          var after_price = localStorage.getItem("after_price");
          var sum_price = Number(after_price) * Number(defaultNum);

          localStorage.setItem("sum_price", sum_price);
          menu1.childNodes[7].innerHTML = sum_price +"원";
        }
    } else {
      alert("1~20잔 사이에서 주문해 주세요^^");
  }
}


// //컵 선택 구현
var cupKind = document.querySelector("#table1");
var element1 = cupKind.children[0].childNodes[0].childNodes[1];
var element2 = cupKind.children[0].childNodes[0].childNodes[3];
var element3 = cupKind.children[0].childNodes[0].childNodes[5];

cupKind.children[0].childNodes[0].childNodes[1].onclick = function() {
  localStorage.setItem("cup_kind", "매장컵");
  //글자색
  element1.style.color = "white";
  element2.style.color = "black";
  element3.style.color = "black";
  //배경색
  element2.style.backgroundColor = "";
  element3.style.backgroundColor = ""; 
  element1.style.backgroundColor = "#757575"; 
}

cupKind.children[0].childNodes[0].childNodes[3].onclick = function() {
  localStorage.setItem("cup_kind", "개인컵");
  //글자색
  element1.style.color = "black";
  element3.style.color = "black";
  element2.style.color = "white";
  //배경색
  element1.style.backgroundColor = "";
  element3.style.backgroundColor = ""; 
  element2.style.backgroundColor = "#757575";
}

cupKind.children[0].childNodes[0].childNodes[5].onclick = function() {
  localStorage.setItem("cup_kind", "일회용컵"); 
  //글자색
  element1.style.color = "black";
  element2.style.color = "black";
  element3.style.color = "white";
  //배경색
  element1.style.backgroundColor = "";
  element2.style.backgroundColor = ""; 
  element3.style.backgroundColor = "#757575"; 
}

// cup_size 셋팅 : localstorage Value값이 다 String이라서 if문에서 "" 안해줘서 개헤맴..
/* selected 속성값을 하나만 줘야하는데 이걸몰라서 자꾸 venti가 선택되어 페이지에 입력됨;;
아래와 같이 여러가지 test해보면서 헤멤...

  // localStorage.setItem("cup_size", "Tall");
  
  // cupSize.children[2].setAttribute("selected", false);
  // cupSize.children[0].setAttribute("selected", true);
  // cupSize.children[0].selected = true;
*/

/*
## Select박스에서 이벤트 발생 시 자바스크립트 호출
<select id="num" onchange="selectNum()">
<option value = "1" selected>하나</option>
<option value = "2">둘</option>
</select>

## Select박스에서 선택한 값의 option value,text 가져오기
function selectNum(){
var numSelect = document.getElementById("num");

// text 가져오기
var text = numSelect.options[document.getElementById("num").selectedIndex].text;

// option value 가져오기
var value = numSelect.options[document.getElementById("num").selectedIndex].value
}
*/
var cupSize = document.getElementById("table2");
optShow();
function optShow() {
  var value = cupSize.options[document.getElementById("table2").selectedIndex].value;
  if(value === "1") {
    localStorage.setItem("cup_size", "Tall");
    
    var price = localStorage.getItem("price");
    //가격과 수량을 초기화하기로 함.. 너무 복잡해지기 때문..
    menu1.childNodes[7].innerHTML = price + "원";
    result.innerText = 1;

  } else if(value === "2") {
    localStorage.setItem("cup_size", "Grande");
    
    var price = localStorage.getItem("price");
    var after_price = Number(price) + Number(500);
    localStorage.setItem("after_price", after_price);
    
    //가격과 수량을 초기화하기로 함.. 너무 복잡해지기 때문..
    menu1.childNodes[7].innerHTML = after_price + "원";
    result.innerText = 1;
  
  } else if(value === "3") {
    localStorage.setItem("cup_size", "Venti");

    var price = localStorage.getItem("price");
    var after_price = Number(price) + Number(1000);
    localStorage.setItem("after_price", after_price);
    
    menu1.childNodes[7].innerHTML = after_price + "원";
    result.innerText = 1;
  }
}


// var cupSize = document.querySelector("#table2");
// var opt1 = cupSize[0].children[0];
// var opt2 = cupSize[0].children[1];
// var opt3 = cupSize[0].children[2];
// var size1 = opt1.innerText.split(" ")[24];
// var size2 = opt2.innerText.split(" ")[24];
// var size3 = opt3.innerText.split(" ")[24];

// localStorage.setItem("cup_size", size1);

// opt2.onfocus = function() {
//   localStorage.setItem("cup_size", size2);
// }
// opt3.onfocus = function() {
//   localStorage.setItem("cup_size", size3);
// }


// 주문하기 기능 구현
var payment = document.querySelector("#tr5");
payment.onclick = paymentClick;

function paymentClick() {
  var cup_kind = localStorage.getItem("cup_kind");
  if(cup_kind === "매장컵" || cup_kind === "개인컵" || cup_kind === "일회용컵") {
    window.open("payment.html", "_self");
  } else {
    alert("컵 선택을 해주세요^^");
  }
}


// var con1 = document.querySelector(".content1");
// var menu1 = document.querySelectorAll("#menu1");

// con1.onclick = function(){
//     // console.log(this);
//     // console.log(this.children[0].outerHTML.split("/")[1].split(".")[0]); // cofee1 
//     // console.log(this.children[1].children);     
//     // console.log(this.children[1].children[0].innerHTML); 이름
//     // console.log(this.children[1].children[2].innerHTML); 영문
//     // console.log(this.children[1].children[4].innerHTML); 가격
    
//     localStorage.setItem("image", this.children[0].outerHTML.split("/")[1].split(".")[0]+".png");
//     localStorage.setItem("kor_name", this.children[1].children[0].innerHTML);
//     localStorage.setItem("eng_name", this.children[1].children[2].innerHTML);
//     localStorage.setItem("price", this.children[1].children[4].innerHTML);
    
//     window.open("menuDetail.html", "");
// }


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