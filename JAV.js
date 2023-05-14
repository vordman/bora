document.write('<p>JavaScript 는 재미있어!</p>');
/*
변수: 데이터를 담아 놓기 위해
    이름표를 붙여놓은 공간 */
/*
// 변수 선언
var num;

//변수 초기화
num = 10;

//변수 선언 + 초기화 */
var num = 10;
num = 20;

console.log(num);

// 사용할 수 없는 변수명
/* list:
var 4you; (불가능)
var !mportant; (불가능)
var you4 (가능); */

// 예약어: 프로그래밍 언어 자체적으로
// 사용할 단어 혹은 키워드 => 변수 X

// 변수명 (식별자)
// 1. camel Case
// var sendEmailDate
// 2. snake_case
// var send_email_date



// 주석(comments)
// 1. 싱글라인 //
// 2. 멀티라인 /* */

/*
자료형

1. 기본형, 단순형, 원시형
-number
-string
-boolean
-undefined
-null
-symbol

2. 참조형, 객체(Object)

*/

// 기본형
// number 
// 정수, 실수 구분이 없음
var price = 10000;
console.log(price);

// string
// 큰 따움표 작은 따움표 상관없음
var myname = "테킷";
console.log(myname);
var myname2 = '멋사';
console.log(myname2);
//var myname3 = ""멋사3"";
//console.log(myname3);
var myname3 = "\"사자\"";
console.log(myname3);

// boolean
var isTrue = true;
console.log(isTrue);

var isFalse = false;
console.log(isFalse);


// undefined
var a;
console.log(a)

//객체(object)

var student = {
    grade:1,
    school:"lion school"
};

console.log(student);

//타입 확인
console.log(typeof(student));

/*
객체(object)
- 속성의 모음으로 이루어진 데이터
- 속성에는 어떤 데이터 타입이라도 할당 가능
- 속성의 구분,
- 속성의 정의/ 속성명(키):속성값
*/

//객체의 값 호출
var gradeInfo = student.grade;
console.log(gradeInfo);

//객체의 키 호출
var key = Object.keys(student)[0];
console.log(key);

//객체에 속성 추가
student.class = 3;
console.log(student);
console.log(student['class']);
console.log(student.class);

// 비어있는 객체 (에 넣기)
var teacher = new Object();
var teacher = {
    
};

//둘이 같음
var name1 = "김멋사";
var name2 = "김멋사";
console.log(name1 == name2);

//둘이 다름
var name3 = Symbol("이테킷");
var name4 = Symbol("이테킷");
console.log(name3 == name4);

//symbol = 고유하다
var myclass = {
    [Symbol("이테킷")]: 1,
    [Symbol("이테킷")]: 2
};

/*
연산자
- 1개의 표현식에 대해 산술, 대입, 논리, 
타입 등을 평가하여 값을 생성하는 작업
*/

var a = 10;
var b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); //나머지

console.log(a);
console.log(b);

var c = 7;
// console.log(++c); //일단 1을 올리고 출력
console.log(c++); //일단 c를 출력하고 올림
console.log(c);
//console.log(--c);
//console.log(c--);
//console.log(c);

// 2. 대입 연산자, 할당 연산자

var d = 2;
// d= 10;
// console.log(d); //(1이 나옴)

console.log(d += 3); //d = d+3
console.log(d -= 3);
console.log(d *= 3);
console.log(d /= 3);
console.log(d %= 3);

//3. 비교연산자
console.log(2==2); //True
console.log(2=="2"); //True (암묵적 형변환)
console.log(2===2); // 타입까지 비교

console.log(2!=2); //True
console.log(2!="2"); //True (암묵적 형변환)
console.log(2!=="2");

console.log(4 > 2);
console.log(4 < 2);
console.log(4 >= 2);
console.log(4 <= 2);

//4. 논리 연산자

// 논리합(or)
// 피연산자 중에 하나라도 참이면 참
console.log(true || true);
console.log(false || true || false);
console.log(false || false);
console.log(2 > 3 || 5 == 5);

// 논리곱(and)
// 피연산자 모두가 참이어야 참
console.log(true && true);
console.log(false && true && false);
console.log(false && false);
console.log(2 > 3 && 5 == 5); // false 

//부정(not)
// 피연산자의 boolean 값을 부정
console.log(!true);
console.log(!false);
console.log(!(5>4));

//5. typeof 연산자
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null);

// 문자열 선언
var greeting ="Hello!";
var farewell = 'Bye!';
var myname = '김테킷';

var sentence = greeting + '\n' + myname; // \n 은 줄바꾸기
console.log(sentence);

console.log(farewell + 2); //숫자는 문자여로 변환이 됨

var sentence = greeting + '\t' + myname; // \t 는 tap 
// '\'' ,나 "\"" ,"\\"를 쓰면 보여줄 수 있음
console.log(sentence);

//템플릿 리터럴 (ES6)
// 멀티라인 텍스트 작업 가능, 이스케이프 시퀀스 필요X
var a1 = `안녕하세요
여러분:)`;
console.log(a1);

var price = 1000;
var b1 = '이 물건은 ' + price + '원 입니다.'
console.log(b1);

var c1 = `이 물건은 ${price}원 입니다.`
console.log(c1);

var d1 = `이 물건은 ${600 + 400}원 입니다.`
console.log(d1);

// 문자열 함수
var abc = "I am Iron man";

// indexOf
// 문자열의 특정 값이 시작되는 위치
console.log(abc.indexOf("man"));
console.log(abc.indexOf("I"));

//slice
// 문자열의 일부를 잘라낼 때
console.log(abc.slice(0, 11)); //마지막의 11 전까지만 출력

//toUpperCase(), toLowerCase() 
console.log(abc.toUpperCase()); //대문자
console.log(abc.toLowerCase()); //소문자

// startsWith(), endsWith()

var efg = 'This is my car.';
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('is'));
console.log(efg.startsWith('th'));

console.log(efg.endsWith('car. '));

// includes()
console.log(efg.includes('is'));

/*
배열(Array)
복수의 데이터를 순서대로 담고있는 자료구조
배열의 순서는 0부터 시작
키 => 인덱스, 값 => 요소
*/

var mbti = ['INFP', 'ENTJ', 'INTJ'];

console.log(mbti[0]);
console.log(mbti.length); //배열 길이 

mbti[3] = 'ESFP'
console.log(mbti[3]);
console.log(mbti.length); //배열 길이 

mbti[2] = 'ISTJ';
console.log(mbti[2]); //바꾸기

//push() < 마지막에 추가
console.log(mbti.push('EEEE','IIII'));

//스프레드 문법
var newMbti = [...mbti, 'AAAA','SSSS']
console.log(mbti); //그대로 (추가 X)
console.log(newMbti); //추가로 2개요소

// pop()
console.log(mbti.pop()); //마지막요소 빠져나옴
console.log(mbti);

// unshift()
console.log(mbti.unshift('QQQQ','WWWW')); //앞에 추가
console.log(mbti);

//스프레드 문법
var newMbti = ['RRRR','TTTT', ...mbti];
console.log(mbti);
console.log(newMbti); //앞에추가

// shift()
console.log(mbti.shift()); //앞쪽 요소 삭제 
console.log(mbti);


var opa = ['A', 'B', 'C']
//slice()
console.log(opa.slice(0,2)); //첫번째와 두번째꺼 복사 (끝점 포함 X)
console.log(opa.slice()); //전체복사

console.log(opa.slice(-1)); //마지막꺼 복사

//join()
console.log(opa.join()); //모두 문자열로 변환이 되어 출력됨
console.log(opa.join('-'));
console.log(opa.join(''));

//sort()
console.log(opa.sort()); //알파벳 순서대로 정렬

//reverse()
console.log(opa.sort().reverse());

var k = 0;

//1. if...else

if (k>2) {
    console.log('k>2');
} else {
    console.log('k<=2');
}

// 2. if...else if...else
if (k>2) {
    console.log('k>2');
} else if (k == 2) {
    console.log('k=2');
} else if (k ==0 ) {
    console.log('k=0'); //위에것을 먼저 선택
} else if (k <2) { 
    console.log('k<2');
} else {
    console.log('k<2');
}

// 3. switch
var TAR = 'XXXX' ;
var val;
switch (TAR) {
    case 'XXXX':;
        val = 'XXXX';
        break //멈추지 않으면 끝까지 수행이 됨
    case 'AAAA':;
        val = 'AAAA';
    case 'WWWW':;
        val = 'WWWW';
    default: 
        val = '유효한 값이 아닙니다.' //아무것도 없을 때
}

console.log(val);


// 반복문(loop)
// 1. for
//0 으로 시작, i 가 10보다 작을 때 까지만 반복, 1씩 더하기
for (var i =0; i < 10; i++) {
    console.log(i);
}

// 반대로 빼기
for (var i = 10; i >0; i--) {
    console.log(i);
}

for (var i =0; i < 10; i++) {
    for (var j=0; j <10; j++) {
        console.log(`${i}-${j}`);
    }
}

var flag = 10;
while (flag > 0) {
    console.log(flag);
    flag--;
}

// do...while
var fff = 10;
do {
    console.log(fff);
    fff--;
} while (fff > 0);


//예외 처리

try {
    // 에러가 발생할 가능성이 있는 코드
    throw new Error("에러");

} catch (error) { //에러를 받음

    // 에러가 발생했을 때 실행되는 코드
    console.log("에러발생");
    console.log(error);

} finally {

    // 에러 발생여부와 상관없이 무조건 실행
    console.log("무조건 실행");

}

// 함수(functions)
// - 작업의 묶음
// - 코드를 반복해서 작성하는 비효율 줄임

//함수 선언문
/*
function multiply (a, b) {
    return a * b; //return = 연산결과 돌려주기
}

console.log(multiply(10, 5));

var result = multiply(435, 24);
console.log(result);
*/


//함수 표현식
var multiply = function calc (a, b) {
    return a* b;
};

console.log(multiply(10,5));
// console.log(calc(10,5)); <오류


var a = 10;

while (true) {
    var a =1000;
    break;
}
/*
console.log(a); // 블록 영역을 벗어나서도 건드릴 수 있음

//호이스팅
console.log(word);

word = "happy"; //일반적인 다른 언어와 다름
// 실행 되기 이전에 변수로 지정을 해줌!!!

console.log(word);

var word;
*/

// let

let word;

console.log(word);

word = "happy";

console.log(word);

// let word; //실행되기 이전에 실행되는 상황을 막을 수 있음

var a123 = 10;

while (true) {
    let a123 =1000;
    break;
} //let이라고 선언하면 블록 바깥의 범위에 영향을 주지 않음!!! 

console.log(a123);

//const
const b123 = 2; //const 로 값을 선언하면 다른 값을 덮어 쓸 수 없음 
console.log(b123);

//const 로 선언된 변수에 할당된 객체
const student23 = {
    grade: 1,
    class: 3
}
student23.grade = 3;

console.log(student23); //이거는 됨

/*
student23 = {
    num :20213,
    grade : 2
}
console.log(student23); //이거는 안됨
*/


//화살표 함수

/*
let plus = (a11, b11) => {
    return a11 + b11;
};
*/

let plus = (a,b) => a+b; //return 필요 X

console.log(plus(2,3));

/*
let print = word => {
    console.log(word);
}

print("hello!");
*/

let myfunc = () => {
    return 1;
}
console.log(myfunc());