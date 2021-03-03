import React from 'react';
import './search.styles.css'

const Search = ({handleChange}) => (
    <input
        className='search'
          type="search"
          placeholder="search"
          onChange={handleChange}
        />
)

export default Search