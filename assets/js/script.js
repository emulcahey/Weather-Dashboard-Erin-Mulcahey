//Current date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate(); 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("todayDate"); 
    p.innerHTML = newDate;
});
//1st date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate(); 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day1Date"); 
    p.innerHTML = newDate;
});     
//2nd date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+1; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day2Date"); 
    p.innerHTML = newDate;            
});
//3rd date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+2; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day3Date"); 
    p.innerHTML = newDate;            
});
//4th date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+3; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day4Date"); 
    p.innerHTML = newDate;            
});
//5th date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+4; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day5Date"); 
    p.innerHTML = newDate;            
});
//Event listener on search button that will on click call getBird() saving the value to localStorage
document.addEventListener("DOMContentLoaded",function(event){
  const searchBtnEl = document.getElementById('searchBtn');
  searchBtnEl.addEventListener('click', function(e) {
      e.preventDefault();
      getCity();
    });
});
//saves search value to localStorage
function getCity() {
    const searchBarEl = document.getElementById('searchBar');
    const searchValue = searchBarEl.value.trim();
    let cityArray = JSON.parse(localStorage.getItem('city')) || [];
    cityArray.push(searchValue)
    localStorage.setItem('city', JSON.stringify(cityArray));
//add Add searched term to search history
    getWeather(searchValue);
    addToHistory(searchValue);
}
//city weather API fetch request using search bar text value 
function getWeather(city) {
    const geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=18df502e645ab3140dbd925b794d1af9`; //open weather api

    fetch(geoApi, { 
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(geoData) {
        // console.log(geoData); 
      getWeatherWithLatLon(geoData);
    }) 
//geo data fetch request
function getWeatherWithLatLon(geoData) {
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=18df502e645ab3140dbd925b794d1af9`; //open weather api
    //weather fetch request
    fetch(weatherApi, { 
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(currentCityWeather) {
        // console.log('currentCityWeather', currentCityWeather);
      displayCurrentWeather(currentCityWeather); 
    }) 
  };
}
  //Function to display bird facts
  function displayCurrentWeather(currentCityWeather) {
    //current day
    const cityNameEl = document.getElementById('cityName');
    const todayIconEl = document.getElementById('todayIcon');
    const todayTempEl = document.getElementById('todayTemp');
    const todayHumidityEl = document.getElementById('todayHumidity');
    const todayWindSpeedEl = document.getElementById('todayWindSpeed');
    const todayWeatherDescriptionEl = document.getElementById('todayWeatherDescription');
    //day 1
    const day1IconEl = document.getElementById('day1Icon');
    const day1TempEl = document.getElementById('day1Temp');
    const day1HumidityEl = document.getElementById('day1Humidity');
    const day1WindSpeedEl = document.getElementById('day1WindSpeed');
    const day1WeatherDescriptionEl = document.getElementById('day1WeatherDescription');
    //day 2
    const day2IconEl = document.getElementById('day2Icon');
    const day2TempEl = document.getElementById('day2Temp');
    const day2HumidityEl = document.getElementById('day2Humidity');
    const day2WindSpeedEl = document.getElementById('day2WindSpeed');
    const day2WeatherDescriptionEl = document.getElementById('day2WeatherDescription');
    //day 3
    const day3IconEl = document.getElementById('day3Icon');
    const day3TempEl = document.getElementById('day3Temp');
    const day3HumidityEl = document.getElementById('day3Humidity');
    const day3WindSpeedEl = document.getElementById('day3WindSpeed');
    const day3WeatherDescriptionEl = document.getElementById('day3WeatherDescription');
    //day 4
    const day4IconEl = document.getElementById('day4Icon');
    const day4TempEl = document.getElementById('day4Temp');
    const day4HumidityEl = document.getElementById('day4Humidity');
    const day4WindSpeedEl = document.getElementById('day4WindSpeed');
    const day4WeatherDescriptionEl = document.getElementById('day4WeatherDescription');
    //day 5
    const day5IconEl = document.getElementById('day5Icon');
    const day5TempEl = document.getElementById('day5Temp');
    const day5HumidityEl = document.getElementById('day5Humidity');
    const day5WindSpeedEl = document.getElementById('day5WindSpeed');
    const day5WeatherDescriptionEl = document.getElementById('day5WeatherDescription');
    //current day
    cityNameEl.textContent = `${currentCityWeather.city.name}`;
    const todayImg = document.createElement('img');
    todayImg.src = `https://openweathermap.org/img/wn/${currentCityWeather.list[2].weather[0].icon}.png`;
    if(todayIconEl.firstChild == null){
        todayIconEl.append(todayImg)
    }else{
        todayIconEl.replaceChild(todayImg, todayIconEl.firstChild);
    }
    todayWeatherDescriptionEl.textContent = `${currentCityWeather.list[2].weather[0].description}`
    const todayTemp = convertTempKelvinToFarenheit(currentCityWeather.list[2].main.temp);
    todayTempEl.textContent = `Temperature: ${todayTemp}\u2109`;
    todayHumidityEl.textContent = `Humidity: ${currentCityWeather.list[2].main.humidity}\u0025`;
    const todayWindSpeed = convertMetersPerSecToMilesPerHour(currentCityWeather.list[2].wind.speed);
    todayWindSpeedEl.textContent = `Wind: ${todayWindSpeed} mph`;
    //day 1
    const day1Img = document.createElement('img');
    day1Img.src = `https://openweathermap.org/img/wn/${currentCityWeather.list[2].weather[0].icon}.png`;
    if(day1IconEl.firstChild == null){
        day1IconEl.append(day1Img)
    }else{
        day1IconEl.replaceChild(day1Img, day1IconEl.firstChild);
    }
    day1WeatherDescriptionEl.textContent = `${currentCityWeather.list[2].weather[0].description}`
    const day1Temp = convertTempKelvinToFarenheit(currentCityWeather.list[2].main.temp);
    day1TempEl.textContent = `Temperature: ${day1Temp}\u2109`;
    day1HumidityEl.textContent = `Humidity: ${currentCityWeather.list[2].main.humidity}\u0025`;
    const day1WindSpeed = convertMetersPerSecToMilesPerHour(currentCityWeather.list[2].wind.speed);
    day1WindSpeedEl.textContent = `Wind: ${day1WindSpeed} mph`;
    //day 2
    const day2Img = document.createElement('img');
    day2Img.src = `https://openweathermap.org/img/wn/${currentCityWeather.list[10].weather[0].icon}.png`;
    if(day2IconEl.firstChild == null){
        day2IconEl.append(day2Img)
    }else{
        day2IconEl.replaceChild(day2Img, day2IconEl.firstChild);
    }    
    day2WeatherDescriptionEl.textContent = `${currentCityWeather.list[10].weather[0].description}`
    const day2Temp = convertTempKelvinToFarenheit(currentCityWeather.list[10].main.temp);
    day2TempEl.textContent = `Temperature: ${day2Temp}\u2109`;
    day2HumidityEl.textContent = `Humidity: ${currentCityWeather.list[10].main.humidity}\u0025`;
    const day2WindSpeed = convertMetersPerSecToMilesPerHour(currentCityWeather.list[10].wind.speed);
    day2WindSpeedEl.textContent = `Wind: ${day2WindSpeed} mph`;
    //day 3
    const day3Img = document.createElement('img');
    day3Img.src = `https://openweathermap.org/img/wn/${currentCityWeather.list[18].weather[0].icon}.png`;
    if(day3IconEl.firstChild == null){
        day3IconEl.append(day3Img)
    }else{
        day3IconEl.replaceChild(day3Img, day3IconEl.firstChild);
    }
    day3WeatherDescriptionEl.textContent = `${currentCityWeather.list[18].weather[0].description}`
    const day3Temp = convertTempKelvinToFarenheit(currentCityWeather.list[18].main.temp);
    day3TempEl.textContent = `Temperature: ${day3Temp}\u2109`;
    day3HumidityEl.textContent = `Humidity: ${currentCityWeather.list[18].main.humidity}\u0025`;
    const day3WindSpeed = convertMetersPerSecToMilesPerHour(currentCityWeather.list[2].wind.speed);
    day3WindSpeedEl.textContent = `Wind: ${day3WindSpeed} mph`;
    //day 4
    const day4Img = document.createElement('img');
    day4Img.src = `https://openweathermap.org/img/wn/${currentCityWeather.list[26].weather[0].icon}.png`;
    if(day4IconEl.firstChild == null){
        day4IconEl.append(day4Img)
    }else{
        day4IconEl.replaceChild(day4Img, day4IconEl.firstChild);
    }
    day4WeatherDescriptionEl.textContent = `${currentCityWeather.list[26].weather[0].description}`
    const day4Temp = convertTempKelvinToFarenheit(currentCityWeather.list[26].main.temp);
    day4TempEl.textContent = `Temperature: ${day4Temp}\u2109`;
    day4HumidityEl.textContent = `Humidity: ${currentCityWeather.list[26].main.humidity}\u0025`;
    const day4WindSpeed = convertMetersPerSecToMilesPerHour(currentCityWeather.list[2].wind.speed);
    day4WindSpeedEl.textContent = `Wind: ${day4WindSpeed} mph`;
    //day 5
    const day5Img = document.createElement('img');
    day5Img.src = `https://openweathermap.org/img/wn/${currentCityWeather.list[34].weather[0].icon}.png`;
    if(day5IconEl.firstChild == null){
        day5IconEl.append(day5Img)
    }else{
        day5IconEl.replaceChild(day5Img, day5IconEl.firstChild);
    }
    day5WeatherDescriptionEl.textContent = `${currentCityWeather.list[34].weather[0].description}`
    const day5Temp = convertTempKelvinToFarenheit(currentCityWeather.list[34].main.temp);
    day5TempEl.textContent = `Temperature: ${day5Temp}\u2109`;
    day5HumidityEl.textContent = `Humidity: ${currentCityWeather.list[34].main.humidity}\u0025`;
    const day5WindSpeed = convertMetersPerSecToMilesPerHour(currentCityWeather.list[2].wind.speed);
    day5WindSpeedEl.textContent = `Wind: ${day5WindSpeed} mph`;
  }
  // Function to add search history to local storage
  function addToHistory(searchTerm) {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.unshift(searchTerm);
    history = Array.from(new Set(history)); // Remove duplicates
    localStorage.setItem("searchHistory", JSON.stringify(history));
    // console.log('local storage', localStorage)
    displayHistory();
  }
// Function to display search history
  function displayHistory() {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    const historyList = document.getElementById('historyList')
    historyList.innerHTML = "";
    history.forEach(term => {
      const listItem = document.createElement("li");
      listItem.textContent = term;
      historyList.appendChild(listItem);
    });
  }
//function to switch Kelvin To Farenheit
function convertTempKelvinToFarenheit(kelvin) {
    return Math.round((kelvin - 273.15) * 9/5 + 32);
} 
//function to switch meters/second to miles/hour
function convertMetersPerSecToMilesPerHour(metersPerSec) {
    return Math.round(metersPerSec * 2.237);
}