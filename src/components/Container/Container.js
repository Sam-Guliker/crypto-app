import React from "react";
import {useState, useEffect} from "react";

import './Container.scss'

export default function App() {
    const [data, setData] = useState([]) 
    const [userInput, searchInput] = useState('')

    useEffect(()=> {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => response.json())
            .then(response => setData(response))
    },[])

    return (
        <div className="container">
            <h1>A crypto currency tracker</h1>
            <input 
                    className="searchbar" 
                    value={userInput} 
                    type="text" 
                    name="search" 
                    onChange={e => {searchInput(e.target.value )}} 
                    placeholder="Search a currency"
                />
            
            <ul className="crypto-list">
                { data.filter((val) => {
                        if (val.id.toLowerCase().includes(userInput.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return (
                            <li key={key} className="crypto-item">
                                <div className="crypto-group-1">
                                    <img className="crypto-icon" src={val.image} />
                                    <p className="crypto-name">{val.id}({val.symbol})</p>
                                </div>
                                <p className="crypto-price"> Price: €{val.current_price}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
