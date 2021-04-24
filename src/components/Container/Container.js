import React from "react";
import {useState, useEffect} from "react";

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
                <h1 className="headline-01" >Watch List</h1>
                
                <ul className="crypto-list">
                    { data.filter((val) => {
                            if (val.id.toLowerCase().includes(userInput.toLowerCase())) {
                                return val
                            }
                        }).map((val, key) => {
                            return (
                                <li key={key} className="crypto-item">
                                    <div className="crypto-group-1">
                                        <p className="crypto-name">{val.id}</p>
                                        <span>({val.symbol})</span>
                                    </div>
                                    <p className="crypto-price"> Price: €{val.current_price}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}