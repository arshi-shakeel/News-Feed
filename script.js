let breakingImg = document.querySelector('#breakingImg')
let breakingNews_title = document.querySelector('#breakingNews .title')
let breakingNews_desc = document.querySelector('#breakingNews .description')
let topNews = document.querySelector('.topNews')
let sportsNews = document.querySelector('#sportsNews .newsBox')
let businessNews = document.querySelector('#businessNews .newsBox')
let techNews = document.querySelector('#techNews .newsBox')
let entertainmentNews = document.querySelector('#entertainmentNews .newsBox')
let scienceNews = document.querySelector('#scienceNews .newsBox')
let healthNews = document.querySelector('#healthNews .newsBox')


let header = document.querySelector('.header')
let toggleMenu = document.querySelector('.bar')
let menu = document.querySelector('nav ul')
// Array



const toggle = (e)=>{
    toggleMenu.classList.toggle('active')
    menu.classList.toggle('activeMenu')
}

toggleMenu.addEventListener('click',toggle)

// making header sticky
window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        header.classList.add('sticky')
    }
    else{
        header.classList.remove('sticky')
    }
})

// fetching news data from a website providing api

const apiKey = "f5e4d43bccec4e7a86e57e0cb5bb2c5c";
const fetchData = async (category,pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    return response.articles
}



// fetchData('general',5)

// adding breaking news

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url}target="_blank"><h2>${data[0].title}</h2></a>`  
    breakingNews_desc.innerHTML = `${data[0].description}`

}
fetchData('general',10).then(add_breakingNews)



const add_topNews = (data)=>{
    let html = ''
    let title = ''
   
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="news">
                   <div class="img">
                   <img src=${element.urlToImage} alt="image">
                   </div>
                   <div class="text">
                       <div class="title">
                       <a href=${element.url} target="_blank"><p>${title}</p></a>
                       <a href="${element['url']}" target="_blank" style="   text-decoration: none; color:black; 
                       letter-spacing:0px;  display: inline-block;

                       margin-top: 20px;
                       padding: 8px 20px;
                       background: #fff;
                       border-radius: 40px;
                       " >Read more here</a> 
                
                       </div>
                   </div>
               </div>`
             
    })
    topNews.innerHTML = html
}
fetchData('general',30).then(add_topNews)


const add_sportsNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                   <div class="img">
                   <img src=${element.urlToImage} alt="image">
                   </div>
                   <div class="text">
                       <div class="title">
                       <a href=${element.url} target="_blank"><p>${title}</p></a>
                       <a href="${element['url']}" target="_blank" style="   text-decoration: none;  color: black;
                       letter-spacing:0px; display: inline-block;
                       margin-top: 20px;
                       padding: 8px 20px;
                       background: #fff;
                       border-radius: 40px;" >Read more here</a> 
                       </div>
                   </div>
               </div>` 
    })
    sportsNews.innerHTML = html
}
fetchData('sports',10).then(add_sportsNews)


const add_businessNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                   <div class="img">
                   <img src=${element.urlToImage} alt="image">
                   </div>
                   <div class="text">
                       <div class="title">
                       <a href=${element.url} target="_blank"><p>${title}</p></a>
                       <a href="${element['url']}" target="_blank" style="   text-decoration: none;  color: black;
                       letter-spacing:0px;display: inline-block;
                       margin-top: 20px;
                       padding: 8px 20px;
                       background: #fff;
                       border-radius: 40px;" >Read more here</a> 
                       </div>
                   </div>
               </div>` 
    })
    businessNews.innerHTML = html
}
fetchData('business',10).then(add_businessNews)

const add_techNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                   <div class="img">
                   <img src=${element.urlToImage} alt="image">
                   </div>
                   <div class="text">
                       <div class="title">
                       <a href=${element.url} target="_blank"><p>${title}</p></a>
                       <a href="${element['url']}" target="_blank" style="   text-decoration: none;  color: black;
                       letter-spacing:0px; display: inline-block;
                       margin-top: 20px;
                       padding: 8px 20px;
                       background: #fff;
                       border-radius: 40px;" >Read more here</a>   
                       </div>
                   </div>
               </div>` 
    })
    techNews.innerHTML = html
}
fetchData('technology',10).then(add_techNews)


const add_entertainmentNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                   <div class="img">
                   <img src=${element.urlToImage} alt="image">
                   </div>
                   <div class="text">
                       <div class="title">
                       <a href=${element.url} target="_blank"><p>${title}</p></a>
                       <a href="${element['url']}" target="_blank" style="   text-decoration: none;  color: black;
                       letter-spacing:0px; display: inline-block;
                       margin-top: 20px;
                       padding: 8px 20px;
                       background: #fff;
                       border-radius: 40px;" >Read more here</a>   
                       </div>
                   </div>
               </div>` 
    })
    entertainmentNews.innerHTML = html
}
fetchData('entertainment',10).then(add_entertainmentNews)

const add_scienceNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                   <div class="img">
                   <img src=${element.urlToImage} alt="image">
                   </div>
                   <div class="text">
                       <div class="title">
                       <a href=${element.url} target="_blank"><p>${title}</p></a>
                       <a href="${element['url']}" target="_blank" style="   text-decoration: none;  color: black;
                       letter-spacing:0px; display: inline-block;
                       margin-top: 20px;
                       padding: 8px 20px;
                       background: #fff;
                       border-radius: 40px;" >Read more here</a> 
                       </div>
                   </div>
               </div>` 
    })
    scienceNews.innerHTML = html
}
fetchData('science',10).then(add_scienceNews)

const add_healthNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element) => {
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                   <div class="img">
                   <img src=${element.urlToImage} alt="image">
                   </div>
                   <div class="text">
                       <div class="title">
                       <a href=${element.url} target="_blank"><p>${title}</p></a>
                       <a href="${element['url']}" target="_blank" style="   text-decoration: none;  color: black;
                       letter-spacing:0px;display: inline-block;
                       margin-top: 20px;
                       padding: 8px 20px;
                       background: #fff;
                       border-radius: 40px;" >Read more here</a> 
                       </div>
                   </div>
               </div>` 
    })
    healthNews.innerHTML = html
}
fetchData('health',10).then(add_healthNews)

