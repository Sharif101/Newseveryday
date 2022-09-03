
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
                    <div class="card-body pt-3">
                        <h5 class="card-title" style="color: #FF6F3F;">${datas.title}</h5>
                        <p class="card-text pt-2">${datas.details}</p>
                        
                             <div class="author mt-3">
                                <div class="profile d-flex align-items-center">
                                   <div class="img ps-3"> 
                                        <img class="img-fluid" src="${datas.author.img}" alt="">
                                   </div>
                                    <p class="px-3">${datas.author.name ? datas.author.name: 'no author found'}</p>
                                </div>
                                <div class="view">
                                    <p></p>
                                </div>
                                <div class="icon">
                                    
                                </div>
                            </div>
                    </div>
                </div>  
        `;
        new_box.appendChild(newDiv);
    }
}

loadData();
loadNews();
