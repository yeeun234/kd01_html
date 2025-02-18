document.addEventListener('DOMContentLoaded',()=>{
    //제어할 요소 가져오기

    const img = document.querySelector('img');
    const txt1 = document.querySelector('#txt1');
    const bt = document.querySelector('button');


    //게임 랜덤수
    let n ;
    //랜덤수가 생성되었는지 확인
    let isFlag = false;

    //확인 버튼이 눌러졌을때
    bt.addEventListener('click',(event)=>{

        event.preventDefault(); // 자기자신으로 돌아가는 디폴트이벤트를 막아줌. ( 폼태그일경우)
        //랜덤수를 생성 할 지 결정
        if(!isFlag) {
            n = Math.floor(Math.random()*100)+1 ; //1~100
            console.log(n);
            isFlag = true;
            img.setAttribute('src','../img/what.png');
            txt1.value='';
            txt1.focus();
            txt1.style.display='inline';
            bt.innerHTML='확인';
            return
        }

        //숫자비교

        if(parseInt(txt1.value)> n) { // 입력한 숫자가 n보다 큰 경우 :down
            img.setAttribute('src','../img/up.png');
            txt1.value='';


        } else if (parseInt(txt1.value)< n){ // 입력한 숫자가 n보다 작은 경우 :up
            img.setAttribute('src','../img/down.png');
            txt1.value='';

        } else if (parseInt(txt1.value)== n) { //맞춘경우
            img.setAttribute('src','../img/good.png');
            txt1.style.display ='none';
            bt.innerHTML = '다시하기'
            isFlag = false;

        }
    });

});