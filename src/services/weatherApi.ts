export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    condition: string;
    humidity: number;
    wind_kph: number;
    pressure_mb: number;
    vis_km: number;
  };
}

export interface ForecastData {
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: {
          text: string;
          icon: string;
        };
        daily_chance_of_rain: number;
      };
    }>;
  };
}

// Free weather API service using WeatherAPI.com
const API_KEY = 'd590fd9c12c94216beb162851252107'; 
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=no`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  const data = await response.json();
  
  return {
    location: {
      name: data.location.name,
      country: data.location.country,
      localtime: new Date(data.location.localtime).toLocaleString(),
    },
    current: {
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      condition: data.current.condition.text,
      humidity: data.current.humidity,
      wind_kph: data.current.wind_kph,
      pressure_mb: data.current.pressure_mb,
      vis_km: data.current.vis_km,
    },
  };
};

export const fetchForecastData = async (location: string): Promise<ForecastData> => {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${encodeURIComponent(location)}&days=5&aqi=no`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  
  const data = await response.json();
  
  return {
    forecast: {
      forecastday: data.forecast.forecastday,
    },
  };
};