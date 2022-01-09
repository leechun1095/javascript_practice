var button = document.querySelector("#button img");
button.onclick = function(){
    // console.log("ggg");
    window.open("menu.html", "_self");
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