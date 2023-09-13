// function printSomething(){
//     document.body.style.background=" pink"
// }changes the bg color to mentioned after clicking on search button
// function printSomething(){
//     if(document.body.style.backgroundColor=='red'){
//         document.body.style.backgroundColor = 'green'
//     }
//     else{
//         document.body.style.backgroundColor = 'red'
//     }
// }
// function printSomething(){
//     let city=document.getElementById('input').value;
//     console.log(city)
// }
// const apikey="60566ec523049fbc0ed10e8b9cbce255";
// const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// document.getElementById('search').addEventListener('click',()=>{
//     checkWeather(document.getElementById('input').value)
// })

// async function checkWeather(city){
//     const reponse= await fetch(apiurl+ `&appid=${apikey}`)
//     console.log(apiurl +city + `&appid=${apikey}`)

//     let data=await Response.json();

//     document.querySelector('.city').innerHTML=data.name;
//     document.querySelector('.temp').innerHTML=data.main.temp;
//     document.querySelector('.humidity').innerHTML=data.main.humidity;
//     document.querySelector('.wind').innerHTML=data.wind.speed;




// }



const apikey = "02aed78890e6ac3007c8f3fb977b464f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


document.getElementById('search').addEventListener('click',()=>{
    checkWeather(document.getElementById('input').value)
})

async function checkWeather(city){

    const response = await fetch(apiurl+ city + `&appid=${apikey}`)
    console.log(apiurl + city + `&appid=${apikey}`)

    let data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity+"%";
    document.querySelector('.wind').innerHTML = data.wind.speed+"km/hr";
    
}