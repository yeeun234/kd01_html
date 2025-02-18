

document.addEventListener('DOMContentLoaded',()=>{
    const img = document.querySelector('img');
    const bt = document.querySelector('button');
    const inpu = document.querySelector('input');
    const put = document.querySelector('.put');
    const retry = `<button>다시하세요</button>`;
    const again = `<input type="number" >
                <button>확인</button>`;
    let randFlag = false ;
    let randFix = 0;
    bt.addEventListener('click',()=>{
        //1.최초 버튼 클릭시 변수 생성
        
        if (randFlag==false){
            let random = Math.floor(Math.random()*10); 
            randFix=random;
            randFlag=true;
        }
        console.log(randFix);

        if (inpu.value == randFix) {
            img.setAttribute('src',"../img/good.png");
            put.innerHTML= retry;
            const bt = document.querySelector('button');

            if( inpu.innerHTML == retry ) {
                bt.addEventListener('click',()=>{
                restart }); }

        } else if(inpu.value > randFix) {
            img.setAttribute('src',"../img/down.png");
            inpu.value = "";
        } else if(inpu.value < randFix) {
            img.setAttribute('src',"../img/up.png");
            inpu.value = "";

        } else {
            img.setAttribute('src',"../img/what.png");
            inpu.value = "";
        }
        
        
        
    });


});

// 2.랜덤수 고정시키기

// 3.클릭시 랜덤수와 인풋벨류값 비교 후 img 소스주소 변경 
// 4.일치 할 시 다시하기 인풋 박스 없애고 다시하기버튼으로 내용바꾸기