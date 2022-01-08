


const api_key = '988aac9b7fd3931f769476f1cfa470d1'
let city = 'vancouver'
let unit = 'metric'



async function getData(){
    try {
        const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=988aac9b7fd3931f769476f1cfa470d1`,{mode:'cors'}); 
        const data  = await response.json(); 

        document.querySelector('#city').textContent = data.name
        document.querySelector('#country').textContent = data.sys.country
        document.querySelector('.current').textContent = data.main.temp
        document.querySelector('.feels-like').textContent = data.main.feels_like
        document.querySelector('.desc').textContent = data.weather[0].description
        console.log(data);
        
    } catch (error) {
        console.log('not a city')
        
    }

}



getData();