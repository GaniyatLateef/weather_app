import  { useState } from 'react'
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import Weather from './components/Weather';

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const APP_ID = import.meta.env.VITE_APP_ID;

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState({});
  const [errorMsg, setErrorMsg] =useState(null);

  const searchWeather = (e) => {
    if (e.key === "Enter") {
      if (searchText) {
        fetch(`${API_URL}weather?q=${searchText}&units=metric&APPID=${APP_ID}`)
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => setErrorMsg(err.message));
      };
    };
  };
  
  return (
    <>
      <div className={`app ${data.main && data.main.temp > 19 && "warm"}`}>
        <main>
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            searchWeather={searchWeather}
          />
          {data.main && (
            <>
              <Location data={data} />
              <Weather data={data} />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
