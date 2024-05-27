
const searchBarEl = document.getElementById('searchBar');
const searchBtnEl = document.getElementById('searchBtn');
const birdFacts = document.getElementById('birdFacts');
const historyList = document.getElementById('historyList');

//Current date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate(); 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("todayDate"); 
    p.innerHTML = newDate;            
})
//1st date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+1; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day1Date"); 
    p.innerHTML = newDate;            
})
//2nd date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+2; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day2Date"); 
    p.innerHTML = newDate;            
})
//3rd date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+3; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day3Date"); 
    p.innerHTML = newDate;            
})
//4th date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+4; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day4Date"); 
    p.innerHTML = newDate;            
})
//5th date
document.addEventListener("DOMContentLoaded",function(event){
    var date = new Date(); 
    var dd = date.getDate()+5; 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear(); 
    var newDate = mm + "-" + dd + "-" +yyyy; 
    var p = document.getElementById("day5Date"); 
    p.innerHTML = newDate;            
})
//Event listener on search button that will on click call getBird() saving the value to localStorage
  searchBtnEl.addEventListener('click', function(e) {
    e.preventDefault();
    getCity();
  });
//saves search value to localStorage
function getCity() {
    const searchValue = searchBarEl.value.trim();
  
    let cityArray = JSON.parse(localStorage.getItem('city')) || [];
    cityArray.push(searchValue)
    localStorage.setItem('city', JSON.stringify(cityArray));
  //add Add searched term to search history
    
    getWeather(searchValue);
    addToHistory(searchValue);
  }
  //Will fetch requested bird object from the nuthatch API using search bar text value pulled from localStorage 
function getWeather(city) {
    const nuthatchApi =  `https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=1&name=${bird}&operator=AND`;
  
    //nuthatch fetch request
    fetch(nuthatchApi, { 
      headers: {
        'api-key': 'c4cf748f-f7f9-44a1-8560-b929969c5dab'
      }
    })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(currentCityWeather) {
      displayCurrentWeather(currentCityWeather);
      console.log(currentCityWeather); 
    }) 
  };
  //Function to display bird facts
  function displayCurrentWeather(currentCityWeather) {
    const name = currentCityWeather.entities[0].name;
  
    const cityNameEl = document.getElementById('cityName');
    const todayTempEl = document.getElementById('todayTemp');
    const todayHumidityEl = document.getElementById('todayHumidity');
    const todayWindSpeedEl = document.getElementById('todayWindSpeed');
    const todayUVIndexEl = document.getElementById('todayUVIndex');

    const day1TempEl = document.getElementById('day1Temp');
    const day1HumidityEl = document.getElementById('day1Humidity');
    const day1WindSpeedEl = document.getElementById('day1WindSpeed');

    const day2TempEl = document.getElementById('day2Temp');
    const day2HumidityEl = document.getElementById('day2Humidity');
    const day2WindSpeedEl = document.getElementById('day2WindSpeed');

    const day3TempEl = document.getElementById('day3Temp');
    const day3HumidityEl = document.getElementById('day3Humidity');
    const day3WindSpeedEl = document.getElementById('day3WindSpeed');

    const day4TempEl = document.getElementById('day4Temp');
    const day4HumidityEl = document.getElementById('day4Humidity');
    const day4WindSpeedEl = document.getElementById('day4WindSpeed');

    const day5TempEl = document.getElementById('day5Temp');
    const day5HumidityEl = document.getElementById('day5Humidity');
    const day5WindSpeedEl = document.getElementById('day5WindSpeed');
  
    cityNameEl.textContent = `${birdData.entities[0].name}`;
    todayTempEl.textContent = `Temperature: ${birdData.entities[0].sciName}`;
    todayHumidityEl.textContent = `Humidity: ${birdData.entities[0].family}`;
    todayWindSpeedEl.textContent = `Wind: ${birdData.entities[0].order}`;
    todayUVIndexEl.textContent = `UV Index: ${birdData.entities[0].region}`;

    day1TempEl.textContent = `Temperature: ${birdData.entities[0].status}`;
    day1HumidityEl.textContent = `Size: Measures ${birdData.entities[0].lengthMin}-${birdData.entities[0].lengthMax} cm long`;
    day1WindSpeedEl.textContent = `Wingspan: Measures ${birdData.entities[0].wingspanMin}-${birdData.entities[0].wingspanMax} cm across`;
    
    day2TempEl.textContent = `Temperature: ${birdData.entities[0].name}`;
    day2HumidityEl.textContent = `Day 2 Humidity: ${birdData.entities[0].name}`;
    day2WindSpeedEl.textContent = `Day 2 Wind Speed: ${birdData.entities[0].name}`;
    
    day3TempEl.textContent = `Temperature: ${birdData.entities[0].name}`;
    day3HumidityEl.textContent = `Day 3 Humidity: ${birdData.entities[0].name}`;
    day3WindSpeedEl.textContent = `Day 3 Wind Speed: ${birdData.entities[0].name}`;
    
    day4TempEl.textContent = `Temperature: ${birdData.entities[0].name}`;
    day4HumidityEl.textContent = `Day 4 Humidity: ${birdData.entities[0].name}`;
    day4WindSpeedEl.textContent = `Day 4 Wind Speed: ${birdData.entities[0].name}`;
    
    day5TempEl.textContent = `Temperature: ${birdData.entities[0].name}`;
    day5HumidityEl.textContent = `Day 5 Humidity: ${birdData.entities[0].name}`;
    day5WindSpeedEl.textContent = `Day 5 Wind Speed: ${birdData.entities[0].name}`;
  
    cityName.append(cityNameEl);
    birdFacts.append(todayTempEl);
    birdFacts.append(todayHumidityEl);
    birdFacts.append(todayWindSpeedEl);
    birdFacts.append(todayUVIndexEl);

    birdFacts.append(day1TempEl);
    birdFacts.append(day1HumidityEl);
    birdFacts.append(day1WindSpeedEl);

    birdFacts.append(day2TempEl);
    birdFacts.append(day2HumidityEl);
    birdFacts.append(day2WindSpeedEl);

    birdFacts.append(day3TempEl);
    birdFacts.append(day3HumidityEl);
    birdFacts.append(day3WindSpeedEl);

    birdFacts.append(day4TempEl);
    birdFacts.append(day4HumidityEl);
    birdFacts.append(day4WindSpeedEl);

    birdFacts.append(day5TempEl);
    birdFacts.append(day5HumidityEl);
    birdFacts.append(day5WindSpeedEl);
  }
  // Function to add search history to local storage
  function addToHistory(searchTerm) {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.unshift(searchTerm);
    history = Array.from(new Set(history)); // Remove duplicates
    localStorage.setItem("searchHistory", JSON.stringify(history));
    displayHistory();
  }
// Function to display search history
  function displayHistory() {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    historyList.innerHTML = "";
    history.forEach(term => {
      const listItem = document.createElement("li");
      listItem.textContent = term;
      historyList.appendChild(listItem);
    });
  }


//   <form class="justify-center">
//   <label for="searchBar" class="font-bold">Search for a bird:</label> <!--added label-->
//   <input
//     id="searchBar"
//     type="text"
//     placeholder="Bird name"
//     class="bg-transparent"/> <!--added id-->
//     <input type="submit" id="searchBtn" class="rounded-full">
// </form>

//     <div class="text-center">
//         <div>Birds previously searched:</div>
//         <ul id="historyList"></ul>
//     </div>