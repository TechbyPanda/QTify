import React from 'react'

const Search = () => {
  return (
    <form className='search-form'>
      <input type="text" placeholder='Search an album of your choice' className='search-form__input' />
      <button type='submit' className='search-form__button'>
        <i className="fa-solid fa-magnifying-glass search-form__icon"></i>
      </button>
    </form>
  )
}

export default Search
