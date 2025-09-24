import React from 'react';

interface ForecastDay {
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
}

interface ForecastCardProps {
  day: ForecastDay;
  isCelsius: boolean;
  getWeatherIcon: (condition: string) => React.ReactNode;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ day, isCelsius, getWeatherIcon }) => {
  const maxTemp = isCelsius ? day.day.maxtemp_c : day.day.maxtemp_f;
  const minTemp = isCelsius ? day.day.mintemp_c : day.day.mintemp_f;
  
  const dayName = new Date(day.date).toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
      <h3 className="text-white font-semibold mb-3">
        {dayName}
      </h3>
      
      <div className="flex justify-center mb-4 text-white/90">
        {getWeatherIcon(day.day.condition.text)}
      </div>
      
      <p className="text-white/80 text-sm mb-3 capitalize">
        {day.day.condition.text}
      </p>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-bold text-lg">
          {Math.round(maxTemp)}°
        </span>
        <span className="text-white/60">
          {Math.round(minTemp)}°
        </span>
      </div>
      
      <div className="flex items-center justify-center gap-1 text-blue-200">
        <span className="text-xs">☔</span>
        <span className="text-xs">{day.day.daily_chance_of_rain}%</span>
      </div>
    </div>
  );
};

export default ForecastCard;