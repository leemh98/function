// 일급 객체 실습
// 1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
function para(arg) {
    arg();
}

function bar() {
    console.log('bar');
}

para(bar);

// 2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
function ret(arg) {
    return arg;
}

ret(bar)();

// 3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// 4. 자바스크립트 함수는 동일 비교의 대상이 될 수 있다.
const hal = function (arg) {
    return arg;
};
hal(1);




// 매개변수 실습
// 1. 기본값 매개변수 default function parameter
function de(arg = 115) {
    console.log(arg);
}
de();
// 2. 나머지 매개변수 Rest parameter
function rest(arg, ...rest) {
    console.log(rest);
}
rest(1, 2, 43, 1, 2, 4);
// 3. arguments 객체
function argu(arg) {
    console.log(arguments);
}
argu(1,2,3,4);

// 함수 생성 방법
// 1. 함수 선언문
function foo1() {
    console.log('foo1');
}
foo1();

// 2. 함수 표현식
const foo2 = function () {
    console.log('foo2');
};
foo2();

// 3. Function 생성자 함수
const foo3 = new Function("console.log('foo3')");
foo3();
// 4. 화살표 함수 표현식
const foo4 = () => {
    console.log('foo4');
}
foo4();

// 함수의 여러가지 형태
// 1. IIFE (즉시 실행 함수)
(function iife() {
    console.log('iife');
})();

// 2. 재귀함수
function recu (arg) {
    if(arg === 3) return;
    console.log(arg);
    recu(arg + 1);
}
recu(1);

// 3. 중첩함수
function nest(arg) {
    function inner() {
        console.log(arg)
    }
    inner();
}
nest(1);

// 4. 콜백함수
function call(arg) {
    arg();
}
call(() => {
    console.log(3);
});