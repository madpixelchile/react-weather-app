

const location = "Santiago, CL";
const api_key = "7332e4793f6b1ffdf08f63d552ddc17d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;