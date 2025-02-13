//object. 배열이랑 비슷함 근데 순서가 필요없는거 앞에 뭐가끼어들든 알빠아님 어차피 인덱스가 아니라 키로 찾는거니

let obj = {'사과' : '🍎',
    '바나나' : '🍌',
    '딸기' : '🍓',
    '케이크':'🍰'
};
console.log(obj);
console.log(obj.사과);
console.log(obj['사과']);

//추가
obj['당근']='🥕';
console.log(obj['당근']);

//수정
obj.사과 = '🍏';
console.log(obj['사과']);

//삭제
delete obj['케이크'];
console.log(obj);

//순회
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


for (let i = 0 ; i < Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i],Object.values(obj)[i],obj[Object.keys(obj)[i]]);
}

//in은 배열의 키값을 가져옴
for(let i in Object.keys(obj)){
    console.log(Object.keys(obj)[i],Object.values(obj)[i],obj[Object.keys(obj)[i]]);

}

//사과,바나나 당근..이모지 값이 들어감 
for (let item of Object.keys(obj)) {
    console.log(item,obj[item]);
}

//키랑 값 둘다 주는 엔트리즈 배열을 ... 하나씩 뽑아씀
for (let[k,v] of Object.entries(obj)){
    console.log(k,v);
}

//전개연산자
let obj2 = {'수박' :'🍉' };
let obj3 = {...obj2,...obj };
console.log(obj3);


//기탄

let obj4 = {
    '과일' : {'apple': '🍎','pizza':'🍕'},
    '채소' : {'banana': '🍌','pizza':'🍕'}
}

console.log(obj4['과일']['apple']);
console.log(obj4['채소'].banana);
console.log(obj4.채소.banana);