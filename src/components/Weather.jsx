const Weather = ({ data }) => {
    return (
      <div className="weather-box">
        <div className="details">
          <div className="temp">{Math.round(data.main.temp)}&deg;C</div>
          <p className="feels">
            Feels Like {Math.round(data.main.feels_like)}&deg;C
          </p>
          <div className="maxmin">
            <p>&#8593; &nbsp;{Math.round(data.main.temp_max)}&deg;C</p>
            <p>&#8595; &nbsp;{Math.round(data.main.temp_min)}&deg;C</p>
          </div>
        </div>
        <div className="desc">
          <div className="weather">{data.weather[0].main}</div>
          <div>{data.weather[0].description}</div>
        </div>
      </div>
    );
  };
  
  export default Weather;
  