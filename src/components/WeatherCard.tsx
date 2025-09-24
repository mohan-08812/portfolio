import React from 'react';
import { Thermometer, Eye, Wind, Droplets } from 'lucide-react';
import { WeatherData } from '../services/weatherApi';

interface WeatherCardProps {
  weather: WeatherData;
  isCelsius: boolean;
  onToggleUnit: () => void;
  getWeatherIcon: (condition: string) => React.ReactNode;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ 
  weather, 
  isCelsius, 
  onToggleUnit, 
  getWeatherIcon 
}) => {
  const temperature = isCelsius 
    ? weather.current.temp_c 
    : weather.current.temp_f;
  
  const feelsLike = isCelsius 
    ? weather.current.feelslike_c 
    : weather.current.feelslike_f;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        {/* Location and Current Weather */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow">
            {weather.location.name}, {weather.location.country}
          </h2>
          <p className="text-white/80">
            {weather.location.localtime}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Temperature Display */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 text-white">
              {getWeatherIcon(weather.current.condition)}
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                {Math.round(temperature)}
              </span>
              <div className="flex flex-col">
                <button
                  onClick={onToggleUnit}
                  className="text-2xl text-white/80 hover:text-white transition-colors"
                >
                  °{isCelsius ? 'C' : 'F'}
                </button>
                <span className="text-sm text-white/60">
                  click to toggle
                </span>
              </div>
            </div>
            
            <p className="text-xl text-white/90 capitalize mb-2">
              {weather.current.condition}
            </p>
            <p className="text-white/70">
              Feels like {Math.round(feelsLike)}°{isCelsius ? 'C' : 'F'}
            </p>
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <Eye className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white/70 text-sm">Visibility</p>
              <p className="text-white font-semibold">
                {weather.current.vis_km} km
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <Wind className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white/70 text-sm">Wind Speed</p>
              <p className="text-white font-semibold">
                {weather.current.wind_kph} km/h
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <Droplets className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white/70 text-sm">Humidity</p>
              <p className="text-white font-semibold">
                {weather.current.humidity}%
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <Thermometer className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white/70 text-sm">Pressure</p>
              <p className="text-white font-semibold">
                {weather.current.pressure_mb} mb
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;