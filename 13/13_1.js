// const f1 = () => {
//   console.log('f1');
// //   f2();
//   setTimeout(()=>{console.log('f2');
//     setTimeout(()=>{console.log('f3');
//         setTimeout(()=>{console.log('f4');
//         }, 100);
//     }, 200);
//   }, 500);
  
  

// }

// document.addEventListener('DOMContentLoaded', ()=>{
//   f1();
// }) ;
// // What will be the output?

// const f2 = () => {
//   console.log('f4');
// }

//패치
// const getFetch = () => {
//     let apiKey = '' ;
//     let baseurl = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
//     let url = `${baseurl}key=${apiKey}&targetDt=20250219`;

//     //fetch API 사용
//     fetch(url)
//     // .then((respone)=>{console.log(respone); return})
//     .then(respone=>respone.json())
//     .then(data=>console.log(data.boxOfficeResult.dailyBoxOfficeList))
//     .catch(err=>console.log(err));

//     console.log('getFetch',url);

//     }   

    const getFetch = async() => {
        let apiKey = '' ;
        let baseurl = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        let url = `${baseurl}key=${apiKey}&targetDt=20250219`;
    
        
    
       
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
        } catch(err){
            console.log(err);
        }   
        console.log('getFetch',url);
    }
        

document.addEventListener('DOMContentLoaded', ()=>{
    const bt = document.querySelector('button');

    bt.addEventListener('click',()=>{
        getFetch();
    });
}) ;