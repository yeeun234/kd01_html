document.addEventListener('DOMContentLoaded', ()=>{
    //필요 요소 가져오기
    const input = document.querySelector('input');
    const ul = document.querySelector('ul');

    input.addEventListener('change',(e)=>{
        console.log(input.value);
        getFetch(input.value.replaceAll('-',''),ul);
        e.preventDefault();
    });

    const getFetch = async(input, ul) => {
        let apiKey = '' ;
        let baseurl = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        let url = `${baseurl}key=${apiKey}&targetDt=${input}`;
        
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            // console.log(data.boxOfficeResult.dailyBoxOfficeList);

            let tags ='';
            for (let item of data.boxOfficeResult.dailyBoxOfficeList){
                tags = tags +
                `<li>
                <span class = "sp">${item.rank}</span>
                <span class = "sp">${item.movieNm}</span>
                </li>`;
            }
            
            ul.innerHTML = tags;
        }catch(err){
            console.log(err);
        }
    }
});