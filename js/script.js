
function loadData(){
    let url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(res =>displayNewsTitle(res.data.news_category))
}

let displayNewsTitle = (news) =>{
    let navTabs = document.getElementById('nav-tab');
    for(let newes of news){
        // console.log(newes);
        let button = document.createElement('div');
        button.classList.add('tabs-div');
        button.innerHTML = `
        <button onlclick="loadNewsDetails('${newes.category_id}')" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">${newes.category_name}</button>
        `;
        navTabs.appendChild(button);
    }
}


let loadNewsDetails = (category_id) =>{
    let url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(res => displaynews(res.data))
} 

let displaynews = (data) =>{
    let newTitle = document.getElementById('nav-home');
    newTitle.innerText = data;
    return newTitle;
}

loadData();
loadNewsDetails();
