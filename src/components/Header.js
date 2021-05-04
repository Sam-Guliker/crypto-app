import React from "react";
import {ReactComponent as Search} from '../assets/search.svg';

export default function Header({setUserInput, userInput, header}) {
    return (
        <header className="header">
            <h1 className="heading-01">{header}</h1>
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