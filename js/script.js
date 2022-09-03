
function loadData(){
    let url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(res =>displayNewsTitle(res.data.news_category))
}

let displayNewsTitle = (news) =>{
    for(let newes of news){
        console.log(newes);
    }
}

loadData();