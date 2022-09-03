
function loadData(){
    let url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(res =>displayNewsTitle(res.data.news_category))
}

let displayNewsTitle = (news) =>{
    let title = document.getElementById('title');
    for(let newes of news){
        // console.log(newes);
      let li = document.createElement('li');
      li.innerHTML = `
      <a href="#" onclick="loadNews('${newes.category_id}')">${newes.category_name}</a>
      `;
      title.appendChild(li);
    }
}

let loadNews = (category_id) =>
{
    let url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(res => displayNews(res.data))
}

let displayNews =(data)=>{
    let new_box =document.getElementById('new_box');
    new_box.innerHTML = '';
    for(let datas of data){
        console.log(datas);
        let newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.innerHTML = `
                <div class="col-md-2 img">
                <img src="${datas.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
        `;
        new_box.appendChild(newDiv);
    }
}

loadData();
loadNews();
