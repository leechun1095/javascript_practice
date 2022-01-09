// kor_name
// quantity
// cup_size
// cup_kind
// takeout

// pay_channel
// discount
// final_price

//주문내역 확인 값들 셋팅

var kor_name = localStorage.getItem("kor_name");
localStorage.getItem("eng_name", "");
localStorage.getItem("price");
localStorage.getItem("after_price");
localStorage.getItem("sum_price");
var cup_kind = localStorage.getItem("cup_kind");
var cup_size = localStorage.getItem("cup_size");
var quantity = localStorage.getItem("quantity");
var takeout = localStorage.getItem("takeout");
var pay_channel = localStorage.getItem("pay_channel");
var discount = localStorage.getItem("discount");
var final_price = localStorage.getItem("final_price");
localStorage.getItem("image");

var tx1 = document.querySelector("#tx1");
var tx2 = document.querySelector("#tx2");
var tx3 = document.querySelector("#tx3");
var tx4 = document.querySelector("#tx4");
var tx5 = document.querySelector("#tx5");
var tx6 = document.querySelector("#tx6");
var tx7 = document.querySelector("#tx7");
var tx8 = document.querySelector("#tx8");
tx1.setAttribute("placeholder", kor_name);
tx2.setAttribute("placeholder", quantity);
tx3.setAttribute("placeholder", cup_size);
tx4.setAttribute("placeholder", cup_kind);
tx5.setAttribute("placeholder", takeout);
tx6.setAttribute("placeholder", pay_channel);
tx7.setAttribute("placeholder", discount);
tx8.setAttribute("placeholder", final_price);

// ## 확인 버튼 클릭 시
var move = document.querySelector("#tr1");
move.onclick = function() {
    window.close();
    window.open("completion.html", "");
}

