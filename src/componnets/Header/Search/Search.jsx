import React from 'react'
import './Search.css'
import { useSelector } from 'react-redux'

const Search = () => {
    const {searchFilms} = useSelector((state) => state.searchData)
  return (
    <div className='searchBlock'>
        {
            searchFilms.map((el) => {
                return <div key={el.id}>
                    <p>{el.title}</p>
                    </div>
            })
        }
    </div>
  )
}

export default Search