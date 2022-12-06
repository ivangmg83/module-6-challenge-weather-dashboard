var searchButton=document.getElementById("searchButton");
var cityInput=document.getElementById("city");
var history=document.getElementById("history");
var currentCity=document.getElementById("currentCity");
var forecast=document.getElementById("forecast");
var baseURL="https://api.openweathermap.org";
var apiKey= "ef8f2594b39248102f1beb0a1a18c233";


function getCity(){
        
    var param = cityInput.value;
    var endpoint = `/data/2.5/weather?q=${param}&units=imperial&appid=${apiKey}`;
    console.log(baseURL+endpoint)
    fetch(baseURL+endpoint)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        createResults(data);
        console.log(data)
        
    })
}
function createResults(dataReceived){
        var cityName = dataReceived.main.name;
        console.log(cityName)
        currentCity.append(cityName)
        // results.appendChild(h1El);
}
searchButton.addEventListener("click", getCity);
