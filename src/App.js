import React from 'react';
import './App.css';
import Search from './companent/search/Search';
import Cart from './companent/weathercart/Cart';

function App() {
  
  const searchData = (data) => {
   const [lat, lon] = data.value.split(" ");
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
