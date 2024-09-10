const key = "93b9a137b2944c45be5152042240305";

const query = prompt("Enter the name of the Place: ")
const getWeather = async (query) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

let ihtml = document.getElementsByClassName("weather")[0]


getWeather(query).then((data) => {
  ihtml.innerHTML = `
  Location: ${data['location']['name']}<br>
 Time: ${data['location']['localtime']}<br>
        Temperature_in_Celsius: ${data['current']['temp_c']}<br>
        Temperature_in_Fahrenheit: ${data['current']['temp_f']}<br>
        Wind_Speed: ${data['current']['wind_kph']}<br>
        Humidity: ${data['current']['humidity']}<br>
  `
});

localStorage.setItem(query, getWeather(query))