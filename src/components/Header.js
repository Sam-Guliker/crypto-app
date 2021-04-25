import React from "react";

export default function Header({setUserInput, userInput}) {
    return (
        <header className="header">
            <input 
                    className="searchbar" 
                    value={userInput} 
                    type="text" 
                    name="search" 
                    onChange={e => {setUserInput(e.target.value )}} 
                    placeholder="Search a currency"
                
            />
        </header>
    )
}