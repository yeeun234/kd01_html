function lotto() {
    //1. 로또번호생성
    //1-1. 로또배열 
    let arrLotto = [] ;
  
    //1-2. 6개
    while( arrLotto.length < 6 ) {
      let n = Math.floor(Math.random() * 45) + 1 ; // 1~45까지 
  
      if (!arrLotto.includes(n)) arrLotto.push(n) ;
    }
    //1-2. 6개 번호 정렬
    arrLotto.sort((a, b) => a - b) ;
    
  
    //1-3.  + 1개 번호 추출
    while( arrLotto.length < 7 ) {
      let n = Math.floor(Math.random() * 45) + 1 ; // 1~45까지 
  
      if (!arrLotto.includes(n)) arrLotto.push(n) ;
    }
  
    arrLotto.splice(6,0,'+');

    console.log(arrLotto) ;

  
    let spanTgs  = arrLotto.map(item => 
        item == '+' ? `<span id='spplus'>${item}</span>`
                    :`<span class='sp${Math.floor(item/10)}'>${item}</span>`)
        
    //10으로 나누어서 몫이0,1,2,3이 되니까 1~9는sp0,10~19는sp1,20~29는sp2 이런식으로 class가 다르게 적용됨. 
    //그리고 매스 플로어를이용해 소숫점자리값을 제거해 정수꼴로 만들어줌.
                            .join('');
    console.log(spanTgs) ;
    document.getElementById("msgLotto").innerHTML = spanTgs;


  }