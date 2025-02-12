function check1() {

    //1.입력문자열가져오기
    let s = document.getElementById("txt1").value;

    //2.뒤집어진 문자열 생성
    let sr = '';
    // for (let i = s.length-1; i >=0; i--){
    //     sr = sr + s[i];
    // }


    //2-1.배열을 이용하여 뒤집어진 문자열 생성
    sr = s.replaceAll(' ','').split('').reverse().join('');
    console.log(s);
    console.log(`sr = ${sr}`);


    //3.입력문자열과 뒤집어진 문자열을 비교(동일한지?회문인지)
   if (s.replaceAll(' ','') === sr.replaceAll(' ','')) {
    document.getElementById("txt2").value ='회문입니다.';
   }else {
    showMsg('회문이아닙니다.');
   }
            
}

const check2 = () => {
    //1.입력문자열 가져오기
    let s = document.getElementById("txt1").value;
    //2.문자열을 순회하며 숫자인지 아닌지 체크 (숫자이면 합계 계싼)
    let sum = 0;
    for (let c of s) {
        if ( !isNaN(c)){
            sum= sum +parseInt(c);
        }
    }
    //3.결과 출력
    document.getElementById("txt2").value = sum ;
}

function showMsg(m) {
    document.getElementById("txt2").value = m;

}