import React from 'react';
import './App.css';
import Search from './companent/search/Search';
import Cart from './companent/weathercart/Cart';

function App() {
  const searchData = (data) => {
    console.log(data);
  }
  return (
    <>
      <Search searchCountry={searchData}/>
      <Cart/>
    </>
  );
}

export default App;
