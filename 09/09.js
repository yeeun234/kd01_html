// 주사위 던지기
// 1.클릭 
// 2.랜덤수 생성
// 3.이미지 소스와 alt값 바꾸기

// 컴퓨터 주사위값 생성
// 유저 주사위값 생성
// 비교
// 비교값 출력확인란에 넣기

document.addEventListener('DOMContentLoaded', () => {
    const bts = document.querySelectorAll('button')// button배열만듦
    const img = document.querySelectorAll('img')//img 배열 2개만듦
    
    
    for (let bt of bts) {
        bt.addEventListener('click', () => {
            let num1 = Math.floor(Math.random() * 6) + 1;
            img[0].setAttribute('src', `../img/${num1}.png`);

            let num2 = Math.floor(Math.random() * 6) + 1;
            img[1].setAttribute('src', `../img/${num2}.png`);


            const SameDice = `같은 값임`;
            const NSameDice = `다른 값임`;
            
            
            console.log(img[0].getAttribute('src'), img[1].getAttribute('src'));
            img[0].getAttribute('src') == img[1].getAttribute('src') ?
                document.getElementById("msg").innerHTML = SameDice :
                document.getElementById("msg").innerHTML = NSameDice;
        });
    };


});
