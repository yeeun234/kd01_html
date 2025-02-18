let arr = [0,0,0,0,0,0,0,0,1];
let isFlag =false;
let arrindex;
document.addEventListener('DOMContentLoaded',()=>{
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    let imgCount =0;
    

   function restart() { 
    if(imgCount==0 && isFlag==false) {
           //배열의 셔플
    arrindex = arr.sort(()=> Math.random()-0.5);

    console.log(arr);
     arrindex = arr.findIndex(a => a===1)+1;
    console.log(arrindex);
    }
   }
   restart();
    //보드에 숫자 쓰기
    for ( let [index,col] of cols.entries()) {
        col.innerHTML = index+1;

    }

    for ( let [index,col] of cols.entries()) {
        col.addEventListener('click',()=>{
            if(arrindex!=col.innerHTML && isFlag==false && col.innerHTML !=`<img src="../img/hart.png" alt="">`)
                {
                    col.innerHTML=`<img src="../img/hart.png" alt="">`
                    imgCount++;
                    console.log(imgCount);
                }
                else if (arrindex==col.innerHTML && imgCount<8 ){
                col.innerHTML=`<img src="../img/boom.png" alt="">`
                isFlag = true;
            } else if(arrindex == col.innerHTML && imgCount== 8) {
                col.innerHTML=`<img src="../img/hart.png" alt="">`
                isFlag = true;
            }
        });
    }
 

    // //셔플된 배열에서 1이 어디에 있는지 찾기
    // console.log(arr);
    // const arrindex = arr.findIndex(a => a===1)+1;
    // console.log(arrindex);
    // //1이 있는 인덱스 숫자랑 일치하는 것 클릭했을때 폭탄나오게

    
    //다시시작
    bt.addEventListener('click',()=>{
        if (isFlag) {
            arr.sort(()=> Math.random()-0.5);
            
            console.log(arr);
            const arrindex = arr.findIndex(a => a===1)+1;
             console.log(arrindex);
            imgCount = 0;
            isFlag = false;

            restart();


            for ( let [index,col] of cols.entries()) {
                col.innerHTML = index+1;
            }
        } 
    });
    
    
});