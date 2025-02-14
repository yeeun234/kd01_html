

document.addEventListener('DOMContentLoaded',()=>{
    const bts =document.querySelectorAll('button') ;//all이니까 배열로만들어짐
    console.log(bts);


    //노트 리스트 순회
    for(let bt of bts){
        bt.addEventListener('click',()=>{
            //속성 변경
            bt.addEventListener('click',()=>{
                bt.setAttribute("id",bt.textContent);
                console.log(bt.getAttribute);
            });
        });
    }
});