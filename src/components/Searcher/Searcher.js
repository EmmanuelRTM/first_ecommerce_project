import React, { useState} from 'react';
import PropTypes from 'prop-types';
//import axios from 'axios';


function Searcher({addSearch}){
    const [search, setSearch]=useState('');
    const onSubmitSearch = (e) => {
        e.preventDefault();
        console.log('Le dieron on submit');
        addSearch(search);
    }
    
    return (

        <div className="search-bar">
            <input 
                placeholder="Search" 
                name="search"
                className="search-input"
                value={search}
                onChange={(e) => { setSearch(e.target.value);}}
            ></input>
            <button
                className="search-button"
                onClick={onSubmitSearch}
                //this.sendSearch() asi lo ejecutaria el padre
            >Search</button>
        </div>
    )
    
}
Searcher.propTypes={
    addSearch: PropTypes.func
}
export default Searcher;