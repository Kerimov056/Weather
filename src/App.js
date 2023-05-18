import React from 'react';
import './App.css';
import Search from './companent/search/Search';

function App() {
  const searchData = (data) => {
    console.log(data);
  }
  return (
    <>
      <Search searchCountry={searchData}/>
    </>
  );
}

export default App;
