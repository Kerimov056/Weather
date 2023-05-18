import React, { useState } from 'react'
import './searchh.scss'
import { AsyncPaginate } from 'react-select-async-paginate'
import { weatherApi, API_URl } from '../api'

const Search = () => {
    const [search, setSearch] = useState(null)

    const inputValue = async (inputValue) => {

        try {
            const response = await fetch(`${API_URl}/cities?minPopulation=1000000&namePrefix=${inputValue}`, weatherApi);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        

        // return fetch(
        //     `${API_URl}/cities?minPopulation=1000&namePrefix=${inputValue}`,
        //     weatherApi  
        // )
            
            
            // .then((response) => response.json())
            // .then((response) => {
            //     return {
            //         options: response.data.map((city) => {
            //             return {
            //                 // value: `${city.latitude} ${city.longitude}`,
            //                 // label: `${city.name}, ${city.countryCode}`,
            //             }
            //         })
            //     };
            // });
    };

    const searchCgange = (searchData) => {
        setSearch(searchData)
    }
    return (
        <>
            <div className='conteiner'>
                <AsyncPaginate
                    placeholder="Search"  //bu axtaris inputunun icindeki yazidir
                    debounceTimeout={600} //bu user axtaris etdikden sonra nece saniye gozdemesidir (0.6s)
                    value={search}
                    onChange={searchCgange}
                    loadOptions={inputValue} //bu axtaris matorudu deye bilerik
                />
            </div>
        </>
    )
}

export default Search