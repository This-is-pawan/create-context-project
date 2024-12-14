import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <>
    <div className="searchbar">
     <div className="searchbarAlign">
      <h1>Cocktail Using Create Context</h1>
      <input type="text" placeholder='search cocktail' className='input'/>
      <article className='search_parent'>
      <FaSearch className='search_child'/>

      </article>
     </div>
    </div>
    </>
  )
}

export default SearchBar