//when user types in search field local storage saves it for listing purposes but all display weather snippets. 
var button = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue');

//APIKey to call on for later 
var APIKey="&appid=00b640b6c43ad18944cc842b8bce44fb";

//current container variables
var cityNameEl = document.querySelector('.name');
var descEl = document.querySelector('.desc');
var tempEl= document.querySelector('.temp');
var uvIndex = document.querySelector('.uvIndex');
var windEl = document.querySelector('.wind');
var humidityEl = document.querySelector('.humidity');

//future container variables
//Day 1 
var day1date = document.querySelector('.futuredate');
var day1futuretempEl= document.querySelector(".futuretemp1");
var day1futurewindEl = document.querySelector(".futurewind1");
var day1futurehumidityEl = document.querySelector(".futurehumidity1");
//Day2
var day2futuretempEl= document.querySelector(".futuretemp2");
var day2futurewindEl = document.querySelector(".futurewind2");
var day2futurehumidityEl = document.querySelector(".futurehumidity2");
//Day 3
var day3futuretempEl = document.querySelector(".futuretemp3");
var day3futurewindEl = document.querySelector(".futurewind3");
var day3futurehumidityEl = document.querySelector(".futurehumidity3");
//Day 4
var day4futuretempEl = document.querySelector(".futuretemp4");
var day4futurewindEl = document.querySelector(".futurewind4");
var day4futurehumidityEl = document.querySelector(".futurehumidity4");
//Day 5
var day5futuretempEl = document.querySelector(".futuretemp5");
var day5futurewindEl = document.querySelector(".futurewind5");
var day5futurehumidityEl = document.querySelector(".futurehumidity5");


//when the searchbutton is click the current weather will be listed and the future forecast
button.addEventListener('click', function(event){ 
    event.preventDefault()

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+ APIKey)
    .then(response => response.json())
    // .then(data => console.log (data))
    .then(data => {
        var nameValue = data ['name'];
        var descValue = data ['weather'][0]['description'];
        var tempValue = data ['main']['temp'];
        // var uvIndexValue = data ['id'];
        var windValue = data ['wind']['speed'];
        var humidityValue = data  ['main']['humidity'];

        cityNameEl.innerHTML=nameValue ;
        descEl.innerHTML= "Weather Description: " + descValue;
        tempEl.innerHTML="Temp: " + tempValue  + "F";
        // uvIndex.innerHTML=uvIndexValue;
        windEl.innerHTML= "Wind: " + windValue + "MPH";
        humidityEl.innerHTML= "Humidity: " + humidityValue + "%";
        })
        
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+ APIKey)
        .then(response => response.json())
        // .then(data => console.log (data))
        .then(data => {
            //data attribute for furture forecast 
            // var day1futureDate = data ['list'][1]['dt_txt'];
            var day1futuretempValue = data ['list'][1]['main']['temp'];
            var day1futurewindValue = data ['list'][1]['wind']['speed'];
            var day1futurehumidityValue = data ['list'][1]['main']['humidity'];
            // var day1futurenameValue = data ['city']['name'];
            // var day1futuredescValue = data ['list'][0]['weather'][0]['description'];
            // var day1futureuvIndexValue = data ['city']['coord']['lat','lon'];

            // day1date.innerHTML=day1futureDate;
            day1futuretempEl.innerHTML="Temp: " + day1futuretempValue + "F";
            day1futurewindEl.innerHTML="Wind: " + day1futurewindValue + "MPH";
            day1futurehumidityEl.innerHTML="Humidity: " +day1futurehumidityValue + "%";
            // day1futureNameEl.innerHTML=day1futurenameValue;
            // day1futuredescEl.innerHTML=day1futuredescValue;
            // day1futureuvIndex.innerHTML=day1futureuvIndexValue;


            var day2futuretempValue = data ['list'][2]['main']['temp'];
            var day2futurewindValue = data ['list'][2]['wind']['speed'];
            var day2futurehumidityValue = data ['list'][2]['main']['humidity'];
            // var day2futurenameValue = data ['city']['name'];
            // var day2futuredescValue = data ['list'][1]['weather'][0]['description'];
            // var day2futureuvIndexValue = data ['city']['coord']['lat','lon'];


            day2futuretempEl.innerHTML="Temp: " +day2futuretempValue + "F";
            day2futurewindEl.innerHTML="Wind: " + day2futurewindValue + "MPH";
            day2futurehumidityEl.innerHTML="Humidity: " + day2futurehumidityValue + "%";
            // day2futureNameEl.innerHTML=day2futurenameValue;
            // day2futuredescEl.innerHTML=day2futuredescValue;
            // day2futureuvIndex.innerHTML=day2futureuvIndexValue;


            var day3futuretempValue = data ['list'][3]['main']['temp'];
            var day3futurewindValue = data ['list'][3]['wind']['speed'];
            var day3futurehumidityValue = data ['list'][3]['main']['humidity'] ;
            // var day2futurenameValue = data ['city']['name'];
            // var day2futuredescValue = data ['list'][1]['weather'][0]['description'];
            // var day2futureuvIndexValue = data ['city']['coord']['lat','lon'];

            day3futuretempEl.innerHTML="Temp: " +day3futuretempValue + "F";
            day3futurewindEl.innerHTML="Wind: " + day3futurewindValue + "MPH";
            day3futurehumidityEl.innerHTML="Humidity: " + day3futurehumidityValue + "%";
            // day3futureNameEl.innerHTML=day3futurenameValue;
            // day3futuredescEl.innerHTML=day3futuredescValue;
            // day3futureuvIndex.innerHTML=day3futureuvIndexValue;

            var day4futuretempValue = data ['list'][4]['main']['temp'];
            var day4futurewindValue = data ['list'][4]['wind']['speed'];
            var day4futurehumidityValue = data ['list'][4]['main']['humidity'];

            day4futuretempEl.innerHTML="Temp: " +day4futuretempValue + "F";
            day4futurewindEl.innerHTML="Wind: " + day4futurewindValue + "MPH";
            day4futurehumidityEl.innerHTML="Humidity: " + day4futurehumidityValue + "%";

            var day5futuretempValue = data ['list'][5]['main']['temp'];
            var day5futurewindValue = data ['list'][5]['wind']['speed'];
            var day5futurehumidityValue = data ['list'][5]['main']['humidity'];

            day5futuretempEl.innerHTML="Temp: " +day5futuretempValue + "F";
            day5futurewindEl.innerHTML="Wind: " + day5futurewindValue + "MPH";
            day5futurehumidityEl.innerHTML="Humidity: " + day5futurehumidityValue + "%";

        })

    .catch(err => alert("City Name undefined"))
})
