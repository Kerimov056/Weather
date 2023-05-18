import React, { useState } from 'react'
import './searchh.scss'
import { AsyncPaginate } from 'react-select-async-paginate'
import { weatherApi, API_URl } from '../api'

const Search = ({searchCountry}) => {
    const [search, setSearch] = useState(null)

    const inputValue = (inputValue) => {

        return fetch(
            `${API_URl}/cities?minPopulation=100000&namePrefix=${inputValue}`,
            weatherApi
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return{
                            value: `${city.latitude} ${city.longitude}`,
                            label:`${city.name}, ${city.countryCode}`,
                        }
                    })
                }
             })
            .catch((error) => console.error(error))
    };

    const searchCgange = (searchData) => {
        setSearch(searchData)
        searchCountry(searchData)
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