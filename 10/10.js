//단위변경 함수 (바깥에 빼기)

const unitChange = (s1,s2 ,span1,span2,input1,input2 ) => {
    if (s1.value == "℃") {
        s2.value = "℉";
    } else { s2.value = "℃"; }
    span1.innerHTML = s1.value;
    span2.textContent = s2.value;
    input1.value = "";
    input2.value = ""
    input1.focus();
};




//DOM이 생성되고 난 후 이벤트리스터가 감지가 됨.
document.addEventListener('DOMContentLoaded', () => {
    //DOM요소 가져오기

    //select box
    const sel1 = document.getElementById('sel1');
    const sel2 = document.querySelector('#sel2');

    //input box
    const input1 = document.querySelector('input'); //query SelectorAll 이 아니라 처음만나는 인풋만 찾음(1개만)
    const input2 = document.querySelector('input[readonly]'); //리드온리속성가진애는 한개뿐이라

    // const input = document.querySelector('input[type=text]')[0];
    // const input1 = document.querySelector('input[type=text]')[1];


    //span tag
    // const spanDocs = document.querySelectorAll('span'); // node list


    // const spanDoc1 = document.querySelectorAll('span')[0];
    // const spanSupc1 = document.querySelectorAll('span')[1];

    const span1 = document.querySelector('.unitDiv div input +span');
    const span2 = document.querySelector('.unitDiv div input[readonly] +span');

    // console.log(sel1.value);
    // console.log(sel2.value);
    // console.log(inputDoc.value);
    // console.log(inputSupc.value);
    // console.log(spanDoc.innerHTML);
    // console.log(spanSupc.innerHTML);

    //첫번째 select box 값이 변경이 되었을때
    sel1.addEventListener('change', () => {
        // console.log('sel1', sel1.value);
        // if (sel1.value == "℃") {
        //     sel2.value = "℉";
        // } else { sel2.value = "℃"; }
        // span1.innerHTML = sel1.value;
        // span2.innerHTML = sel2.value;
        // input1.value = "";
        // input2.value = ""

        unitChange(sel1,sel2 ,span1,span2,input1,input2);
    });

    //두번째 select box 값이 변경이 되었을때
    sel2.addEventListener('change', () => {
        // console.log('sel2', sel2.value);
        unitChange(sel2,sel1 ,span2,span1,input2,input1);

    });
    //input 입력이 되었을때
    input1.addEventListener('input' , () => {
        // console.log(input1.value);
        input2.value = input1.value;
        // input2.innerText=input1.innerText;

        //화씨섭씨 단위변환 함수
        if(sel1.value == "℃") {
            input2.value = ((input1.value)*(9/5)+32).toFixed(4);
        } else { input2.value = (((input1.value)-32)*(5/9)).toFixed(4);}

    });
});