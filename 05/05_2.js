// 함수정의 방법2개
function check1() {
    let s = document.getElementById("txt1").value;

//     //문자열 출력
//     console.log(s);

//     //한문자씩출력
//     for (let i=0; i <s.length; i++){
//         console.log(s[i]);
//     }
//     for (let i = s.length-1; i >=0; i--){
//         console.log(s[i]);
//     }
// //문자열순회

//     for (let c of s ) {
//         console.log(c);
//     }

    console.log(s.indexOf('ss'));
    console.log(s.includes('ss'));
    console.log(s.slice(0,9));

    // let s2 = document.getElementById("txt2").value;
    // document.getElementById("txt2").value = isNaN(s);
    // document.getElementById("msg").innerHTML= parseInt(s) + parseInt(s2) // html에 두빈칸에 적은값더하기. 문자열로 나오니 .... 정수로바꿔서.
    // document.getElementById("txt2").value= s[s.length-1]; //맨마지막글자뽑기
    // document.getElementById("txt2").value= s.charAt(s.length-1); //위랑똑같은데 캐릭터엣이라는  메소드쓴거. 위는배열쓴거임.
    // document.getElementById("txt2").value= s.split(',')[2]; // 배열첫번째꺼 ,로 나눠진거 가져오란.
    
} 
// const check2 = function() {

// } 가능
const check2 = (e) => {
    console.log("check2");
}