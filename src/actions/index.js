import axios from 'axios';

const API_KEY = '67f27ca9489ccff6ab215510c6e04415';
const ROOT_URL = `https:/api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},gb`;
    // ReduxPromise middleware intercepts any actions with promise in request
    // and resolves them before sending on the action
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
