import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/ProductSlice';
import './SearchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };
    

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for products..."
                onChange={handleChange}
            />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;