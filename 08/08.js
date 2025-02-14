
// 주사위 던지기
//DOM이 로드 되엇을때


document.addEventListener('DOMContentLoaded', () => {
    //요소 가져오기
    const bts = document.querySelector('button');

    // 1.버튼 누르기
    bts.addEventListener('click', () => {
        // 2.랜덤수 생성
        let num = Math.floor(Math.random()*6) + 1; //1~6
        // console.log(num);
        // 3.img의 src값이랑 alt값 바꾸기
        document.querySelector('img').setAttribute('src',`../img/${num}.png`)
        document.querySelector('img').setAttribute('alt',`${num}.png`)
    })
});




