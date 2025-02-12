import React, {useState} from 'react'
import './search.css'

const Search = () =>  
    {
        const movies = ["True Detective", "Squid Game", "DeadPool & Wolverine"];
        const [showDropdown, setShowDropdown] = useState(false);

        const handleSearchClick = () => {
            setShowDropdown(!showDropdown);
        }
    
        const handleSelect = (movie) => {
        alert(`You selected: ${movie}`);
        setShowDropdown(false); 
        }
  return (
    <div className='search-body'>
        <p className='search-message'>
        Looking for more thrill? <br></br>Search now—just make sure <br></br>its not your last game!
        </p>
        <div className="search-container">
            <button onClick={handleSearchClick} className="search-button">Search</button>
            {showDropdown && (
                <ul className="dropdown">
                    {movies.map((movie, index) => (
                        <li key={index} onClick={() => handleSelect(movie)}>
                        {movie}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default Search