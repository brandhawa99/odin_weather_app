const api_key = '988aac9b7fd3931f769476f1cfa470d1'


const submit_button = document.querySelector('.search')
const input = document.querySelector('.input')
const get_unit = document.querySelector('.cel')
let unit = 'metric'
let city = 'vancouver'

submit_button.addEventListener('click',() => {
    let city = input.value;
    getData(city,unit);
})
input.addEventListener('keyup',(e) =>{
    if(e.keyCode ===13){
        let city = input.value;
        getData(city,unit);

    }
})


get_unit.addEventListener('click',() =>{
    let city = document.querySelector('#city').textContent
    const CorF = document.querySelectorAll('.CorF')
    if(unit == 'metric'){
        unit = 'imperial'
        CorF.forEach(ele =>{
            ele.textContent = "F"
        })

        getData(city,unit)
    }
    else{
        unit = 'metric'
        getData(city,unit)
                CorF.forEach(ele =>{
            ele.textContent = "C"
        })
    }

})



async function getData(city,unit){
    try {
        const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=988aac9b7fd3931f769476f1cfa470d1`,{mode:'cors'}); 
        const data  = await response.json(); 
        // let iconID = data.weather[0].icon;

        document.querySelector('#city').textContent = data.name
        document.querySelector('#country').textContent = data.sys.country
        document.querySelector('.current').textContent = data.main.temp
        document.querySelector('.feels-like').textContent = data.main.feels_like
        document.querySelector('.desc').textContent = data.weather[0].description
        let img = document.querySelector('img')
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        
    } catch (error) {
        // input.value = ('not a city')
        let val = input.value

        document.querySelector('#city').textContent = `${val} is not a city `
        document.querySelector('#country').textContent = ""
        document.querySelector('.current').textContent = ""
        document.querySelector('.feels-like').textContent =""
        document.querySelector('.desc').textContent = ""
        let img = document.querySelector('img')
        img.src = ""; 
        
    }

}






getData(city,unit);