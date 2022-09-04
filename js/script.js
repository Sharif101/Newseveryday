
function loadData(){
    let url = `https://openapi.programming-hero.com/api/news/categories`
    try{
        fetch(url)
    .then(res => res.json())
    .then(res =>displayNewsTitle(res.data.news_category))
    }
    catch(error){
        console.log('error');
    }
}

let displayNewsTitle = (news) =>{
    try{
        let title = document.getElementById('title');
    for(let newes of news){
        // console.log(newes);
      let li = document.createElement('li');
      li.innerHTML = `
      <a href="#" onclick="loadNews('${newes.category_id}')">${newes.category_name}</a>
      `;
      title.appendChild(li);
    }
    togggle(true);
    }
    catch(error){
        console.log('error');
    }
}

let loadNews = (category_id) =>
{
    let url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    try{
        fetch(url)
    .then(res => res.json())
    .then(res => displayNews(res.data))
    }
    catch(error)
    {
        console.log('error');
    }
}

function compare(a, b){ 
    if(a.total_view < b.total_view)return 1; 
    else if(a.total_view > b.total_view)return -1; 
    else return 0; 
}

let displayNews =(data)=>{
    let new_box =document.getElementById('new_box');
    new_box.innerHTML = '';
    let total_news = document.getElementById('news_found');
    if(data.length>0){
        total_news.innerText = data.length + ' Items Found'
    }
    else
    {
        total_news.innerText = 'No Item Found'
    }
    data.sort(compare);
    for(let datas of data){
        // console.log(datas);
        let newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.innerHTML = `
                <div class="col-md-2 img">
                <img src="${datas.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                    <div class="col-md-10">
                    <div class="card-body">
                        <h5 class="card-title" style="font-weight: 600;" style="color: #00000;">${datas.title}</h5>
                        <p class="card-text pt-2">${datas.details.slice(1,200) + '...'}</p>
                        <div class="d-flex author justify-content-between align-items-center mt-3">
                        <div class="profile d-flex align-items-center">
                        <div class="img ps-3"> 
                                <img class="img-fluid" src="${datas.author.img}" alt="">
                        </div>
                            <div class="text">
                                <p style="color: #FF6F3F;">${datas.author.name ? datas.author.name: 'no author found'}</p>
                                <p>${datas.author.published_date ? datas.author.published_date: 'no date found'}</p>
                            </div>
                        </div>
                        <div><p>${datas.total_view ? datas.total_view: 'no view'}</p></div>
                        <div><p><a onclick="modalData('${datas._id}')" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></a></p></div>
                    </div>
                    </div>
                </div>  
                
        `;
        new_box.appendChild(newDiv);
    }
    togggle(false);
}


// modal data load 
let modalData =(_id)=>{
    let url = `https://openapi.programming-hero.com/api/news/${_id}`
    try{
        fetch(url)
    .then(res => res.json())
    .then(res => displayModaldata(res.data[0]))
    }
    catch(error){
        console.log('error');
    }
}

let displayModaldata = (id) =>{
    let modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = id.title;
    let modalBody = document.getElementById('m_body');
    modalBody.innerText = id.details;
}



let togggle = (isloading) =>
{
    let loder = document.getElementById('lodder');
    if(isloading){
        loder.classList.remove('d-none');
    }
    else
    {
        loder.classList.add('d-none')
    }
}



loadData();
loadNews('08');
// modalData();

