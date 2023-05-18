import React from 'react';
import './App.css';
import Search from './companent/search/Search';
import Cart from './companent/weathercart/Cart';
import {WEATHER_API,MY_API_KEY} from './companent/api'

function App() {
  
  const searchData = (data) => {
   const [lat, lon] = data.value.split(" ");

   const weatherFetch = `${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}`
   const weather2Fetch = `${WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}`
    
   Promise.all([weatherFetch,weather2Fetch])

  }

  return (
    <>
     <Search  searchCountry = {searchData}/>
         <div className='app'>
          <Cart />
        </div>
    </>
  );
}

export default App;
