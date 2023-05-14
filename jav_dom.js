
var el = document.getElementById("brand-title");
//id 를 통해서 요소를 가져오겠다.

console.log(el);

console.log(el.innerHTML);
console.log(el.innerText); //실제 감싸져 있는 텍스트만 출력 (html 전체 X)

el.innerText = "안녕하세요 :)" //변경이 일어남
console.log(el.innerText)

var el = document.getElementsByClassName('stb-title'); //클래스 값을 갖는 것을 모두 가져옴
console.log(el);

/*
이벤트

폼 이벤트
- 제출, 초기화
마우스 이벤트
- 클릭, 더블클릭, 마우스 이동 
키보드 이벤트
- keydown 이벤트, keypress, keyup

on + 이벤트 타입
    */

    var myfunc = function () {
        alert('addEventListener123');
    };

    var al =document.getElementById('brand-title2');
    al.addEventListener("click",myfunc);