// //기본함수
// function hello() {
//     alert("확인");
// }
// //화살표 함수 hello2에 익명함수를 넣어라
// const hello2 = () => {
//     alert("헬로");
// }

// //매개변수 사용
// const myhello = (msg) => {
//     alert("hello " + msg + " !!");
// }

const myhello = (msg) => {
    document.getElementById("msg").innerHTML = "hello <span>" + msg + "</span> !!";
}