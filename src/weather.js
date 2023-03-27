const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '0a552953224797b8b5ea714eff14edef';

export const fetchWeatherByCityName = cityName => fetch(`${BASE_URL} ? q = ${cityName} & units=metric & lang=ua & appid=${API_KEY}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(response.status);
        }
        return res.json();
})
