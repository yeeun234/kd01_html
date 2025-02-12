//배열선언
let arr = [] ; //빈배열
let arr1 = [1,2,3,4] ; //초기값이 있는 배열
let arr2 = new Array() ; //Array 객체 선언

console.log(arr);
console.log(arr1);
console.log(arr2);

//배열에 자료 추가, 수정 , 삭제 
arr.push(10); 
arr.push(20); 
arr.push(30,20); 
console.log(arr);

arr[0] = 1 ; //수정 , 0번째인덱스배열에 입력
console.log(arr);

arr3= [7,7,7,7];
arr3.pop(); //삭제 마지막게 날라감
console.log(arr3);


arr.length = 0; //이것도 비우는거긴 함 
console.log(arr);


//배열의 순회 . 기본반복
arr = [1,2,3,4,5];
for(let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}

console.log("in반복");
for(let i in arr) {
    console.log(arr[i]);
} // 인덱스 값  가져오기

console.log("of반복");
for(let i of arr) {
    console.log(i);
} // 인덱스값가지고 값 자체를 가지고옴  of 뒤에는 항상 묶음 ( 어레이나 , 딕셔너리)


//구조분해할당
console.log("of반복2");
for(let [i, item] of arr.entries()) {
    console.log(i,item);
}//키 ,값이 나옴

console.log("foreach 메소드");
arr.forEach((item, i)=>{
    console.log(i,item)
});//매개변수로 함수가 들어감 (콜백함수) //값,키가 나옴 (인수로쓸땐주로 화살표함수를쓴다.)

//map()
arr1 = arr.map((item)=>{
    console.log(item);
    return item *2;
});//인자에는 어레이의 키가 아니라 아이템이들어옴. 

console.log(arr1);

arr1 = arr1.map(item=> item *2); //매개변수가 한개면 () 생략가능  . 실행문이 하나면 { 이것도 생략가능하고 리턴도 생략가능}
console.log(arr1);
arr1 = arr1.map((item,i)=> item *i);  //매개변수가 두개면 ()생략불가
console.log(arr1); //포이치도 그렇고 맵 메소드도 아이템먼저 나오고 그 뒤에 키값넣는순서임


//filter()
let arrF = arr.filter(item => item % 2 ==0);
console.log(arrF);

//map + filter () 

let arrMF = arr.map((item,i)=>item *i)
                .filter(item=>item%3==0);
console.log(arrMF);


//랜덤수 생성
let arrRand = Math.floor(Math.random()*6)+1; //0~5.88까지 랜덤수생성  // 정수로 만들기 // 6까지하게 +1
console.log(arrRand);

//6개의 숫자로 생성된 배열만들기
let arrRand1=[];
for (let i= 0; i<6; i++) {
    arrRand1.push(Math.floor(Math.random()*6)+1);
}
console.log(arrRand1);

let arrRand2=[0,0,0,0,0,0];
arrRand2.length=0;
arrRand2 = arrRand1.map(item =>Math.floor(Math.random()*6)+1);
console.log(arrRand2);


//오름차순
arrRand2.sort((a,b)=>a-b);
console.log(arrRand2);

//내림차순
arrRand2.sort((a,b)=>b-a);
console.log(arrRand2);


//reverse()

console.log(arrRand2.reverse());


//join() 모든요소를문자열로결험

console.log(arrRand2.join());
console.log(arrRand2.join(" "));//디폴트 쉼표싫다면..결합하는문자열을 인자로주면됨


console.log(arrRand2.concat(arr));

//요소확인
console.log(arrRand2.indexOf(10)); //없으면 -1 
console.log(arrRand2.includes(10)); //있으면 폴스

//배열카피
console.log(`arr = ${arr}`);
let arrCopy ;
arrCopy = arr.map(item =>item);
console.log(`arrCopy = ${arrCopy}`);

//전개연산자

arrCopy = [...arr];
console.log(`arrCopy = ${arrCopy}`);

arrCopy = [...arr,...arrRand1];
console.log(`arrCopy = ${arrCopy}`);


