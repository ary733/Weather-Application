const apiKey = 'efad62d9f393814bd9d0e1f5fccc3bb4'; // Replace with your OpenWeatherMap API key

async function getWeather() {
	const area = document.getElementById('search-input').value;
	const weatherContainer = document.getElementById('weather-container');

	if (area === '') {
		weatherContainer.innerHTML = '<p>Please enter an area.</p>';
		return;
	}

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${efad62d9f393814bd9d0e1f5fccc3bb4}&units=metric`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.cod !== 200) {
			weatherContainer.innerHTML = `<p>${data.message}</p>`;
			return;
		}

		const weatherInfo = `
			<div class="weather-info">
				<h2>${data.name}, ${data.sys.country}</h2>
				<p>Temperature: ${data.main.temp} °C</p>
				<p>Humidity: ${data.main.humidity} %</p>
				<p>Wind Speed: ${data.wind.speed} m/s</p>
				<p>Weather: ${data.weather[0].description}</p>
			</div>
		`;

		weatherContainer.innerHTML = weatherInfo;
	} catch (error) {
		weatherContainer.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
	}
}
