import React, { useState } from 'react';
import './App.css';
import Search from './companent/search/Search';
import Cart from './companent/weathercart/Cart';
import Forecast from './companent/otherDays/Forecast';
import {WEATHER_API,MY_API_KEY} from './companent/api'

function App() {
  const [weather, setWeather] = useState(null)
  const [fores, setFores] = useState(null)
  
  const searchData = (data) => {

    const [lat, lon] = data.value.split(" ");

   const weatherFetch = fetch(`${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}&units=metric`); {/*bu birinci bu gunu esas olan ucundur */}
   const foresFetch = fetch(`${WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}&units=metric`);  {/*bu ise sonra'ki olanlar ucundur */}

   Promise.all([weatherFetch,foresFetch])
   .then(async (response) =>{
      const weatherResponse = await response[0].json();
      const foresFetchResponse = await response[1].json();

      setWeather({ city: data.label, ...weatherResponse})
      setFores({ city: data.label, ...foresFetchResponse})
   })
   .catch((error) =>{console.log(error);})
   
  }
  console.log(weather);
  console.log(fores);

  return (
    <>
     <Search  searchCountry = {searchData}/>
         <div className='app'>
         { weather &&  <Cart data={weather} />}          {/* Burdada weatherin varligini yoxlayiriq */}
         {fores && <Forecast data={fores} />}     {/* Weather !== null ve weather !== undefined  */}
       </div>                                          {/* <Cart data={weather} Render olunur  */}
                                                  
    </>                                       
  );
}

export default App;
