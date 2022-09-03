
function loadData(){
    let url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(res =>displayNewsTitle(res.data.news_category))
}

let displayNewsTitle = (news) =>{
    let title = document.getElementById('title');
    for(let newes of news){
        console.log(newes);
      let li = document.createElement('li');
      li.innerHTML = `
      <a href="#">${newes.category_name}</a>
      `;
      title.appendChild(li);
    }
}

loadData();
