import React from "react";
import {ReactComponent as Search} from '../assets/search.svg';


export default function Header({setUserInput, userInput}) {
    return (
        <header className="header">
            <input 
                    className="searchbar" 
                    value={userInput} 
                    type="text" 
                    name="search" 
                    onChange={e => {setUserInput(e.target.value)}} 
                    placeholder="Search a currency"
            />
            <Search className="search-icon" />
        </header>
    )
}