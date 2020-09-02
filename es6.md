## ES6란?

- ES6의 여러가지 문법중 Vue.js 코딩을 간편하게 해주는 문법 학습
- const & let, Arrow Function, Enhanced Object Literals, Modules 학습 

- ECMAScript 2015와 동일한 용어이다
- 2015년은 ES5(2009년)이래로 진행한 첫 메이저 업데이트가 승인된 해이다.
- 최신 프론트엔드 프레임웍인 리액트, 뷰, 앵귤러에서 권고하는 언어 형식이다.
- ES5에 비해 문법이 간결해져서 익숙해지면 코딩을 훨씬 편하게 할수 있다.

## Babel
- 구 버전 브라우저 중에서 ES6의 기능을 지원하지 않는 브라우저가 있으므로 transpiling이 필요하다.
- ES6의 문법을 각 부라우저의 호환 가능한 ES5로 변환하는 컴파일러.


## const & let - 새로운 변수 선언 방식
- 블록단위 `{}`로 변수의 범위가 제한되었다.
- const : 한번 선언한 값에 대해서 변경할 수 없다.(상수)
- let : 한번 선언한 값에 대해서 다시 선언할 수 없다.

## 변수의 Scope
- 기존 자바스크립트는 `{}`에 상관없이 스코프가 설정된다.

```javascript
var sum = 0;
for (var i =1; i<=5 ; i++){
    sum = sum+i;
}
console.log(sum); //15
console.log(i); //6
```

## Hoisting
- Hoisting 이란 선언한 함수와 변수를 해석기가 가장 상단에 있는것 처럼 인식한다.
- js 해석기는 코드의 라인 순서와 관계 없이 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보한다.
- 따라서 function a() 와 var 는 코드의 최상단으로 끌어 올려진것 처럼 보인다.

```javascript
function willBeOveridden(){
    return 10;
}
willBeOveridden(); //5
function willBeOveridden(){
    return 5;
}
```

```javascript
function sum(){
    //function 선언문
    return 10+20;
}
var s = function (){
    //function
    return 10+20;
}
```

```javascript
var sum = 5;
sum = sum +i;
function sumAllNumbers(){

}
var i = 10;
```

```javascript
var sum;
function sumAllNumbers(){
}
var i;

sum = 5;
sum = sum +i;
i = 10;
```


## `{}`단위로 변수의 범위가 제한된다.

```javascript
let sum = 0;
for(let i =1; i<=5 ; i++){
    sum = sum + i;
}
console.log(sum);//10
console.log(i);//에러 
```

- const 로 지정한 값 변경 불가능
```javascript
const a = 10;
a = 20 ; //에러발생
```

- 하지만 객체나 배열의 내부는 변경 할 수 있다.
```javascript
const a = {};
a.num = 10;
console.log(a); // {num : 10}

const a = [];
a.push(20);
console.log(a); // [20]
```

- let 선언한 값에 대해서 다시 선언 불가능하다.

```javascript
function f(){
    {
        let x;
        {
            //새로운 블록안에 새로은 x의 스코프가 생김
            const x = "sneaky";
            x = "foo";//위에 이미 const로 x를 선언했으므로 다시 값을 대입하면 에러 발생
        }   
            // 이전 블록 범위로 돌아왔기 때문에 let x에 해당하는 메모리 값을 대입
        x = "bar";
        let x = "inner";
    }
}
```


## Arrow Function - 화살표 함수
- 함수를 정의할때 function 이라는 키워드를 사용하지 않고 =>  대체
- 흔히 사용하는 콜백 함수의 문법을 간결화 한다.

```javascript
var sum = function(a,b){
    return a+b;
};

var sum = (a,b)=>{
    return a+b;
}

sum (10 ,20);
```


- 사용 예시

```javascript
var arr = ["a", "b", "c"];
arr.forEach(function(value){
    console.log(value);
});

arr.forEach(value => console.log(value));

```

## Enhanced Object Literals - 향상된 객체 리터럴
- 객체의 속성을 메서드로 사용할때 function 예약어를 생략하고 생성가능하다.
```javascript
var dictionary = {
    words: 100,
    lookup: function(){
        console.log("find words");
    },
    lookup(){
        console.log("find");
    }   
}
```

- 객체의 속성명과 값 명이 동일할때 축약가능
```javascript
var figures = 10;
var dictionary = {
    figures
};
```

## Modules - 자바스크립트 모듈화 방법
- 자바스크립트 모듈 로더 라이브러리 (AMD , Commons JS)기능을 js 언어 자체에서 지원
- 호출되기 전 까지 코드 실행과 동작을 하지 않는 특징이 있다.
```javascript
// libs/math.js
export funciton sum(x,y){
    return x+y;
}
export var pi = 3.14;
// main.js
import {sum} from 'libs/math.js';
sum(1,2);
```

- Vue.js에서 마주칠 `default` export
```javascript
//util.js
export default function(x){
    return console.log(x);
}
//main.js
import  util from 'uilt.js';
console.log(util);
util("hi");
//app.js
import  log from 'util.js';
console.log(log);
log("hi");
```