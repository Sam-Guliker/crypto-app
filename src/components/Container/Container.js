import React from "react";
import {useState, useEffect} from "react";

import { ReactComponent as Plus } from '../../assets/plus.svg';

export default function App() {
    const [data, setData] = useState([]) 
    const [userInput, searchInput] = useState('')

    useEffect(()=> {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => response.json())
            .then(response => setData(response))
    },[])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="container">
            <header className="header">
                <input 
                        className="searchbar" 
                        value={userInput} 
                        type="text" 
                        name="search" 
                        onChange={e => {searchInput(e.target.value )}} 
                        placeholder="Search a currency"
                    />
            </header>
            
            <div class="crypto-container">
                <h1 className="heading-01" >Watch List</h1>
                
                <ul className="crypto-list">
                    { data.filter((val) => {
                            if (val.id.toLowerCase().includes(userInput.toLowerCase())) {
                                return val
                            }
                        }).map((val, key) => {
                            return (
                                <li key={key} className="crypto-item">
                                    <div className="crypto-group-1">
                                        <h2 className="crypto-name heading-02">{capitalizeFirstLetter(val.id)}</h2>
                                        <span className="crypto-symbol">{val.symbol.toUpperCase()}</span>
                                    </div>
                                    <div className="crypto-group-2">
                                        <button class="add-to-list-button">
                                            <Plus />
                                        </button>
                                        <p className="crypto-price">€ {val.current_price}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}