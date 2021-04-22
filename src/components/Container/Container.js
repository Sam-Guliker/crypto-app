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
            .then(console.log(data))
        },[])


    const handleUserInput = (e) => {
        searchInput(e.target.value)
    }
        return (
            <div className="container">
               <h1>A crypto currency tracker</h1>
                <input 
                        className="searchbar" 
                        value={userInput} 
                        type="text" 
                        name="search" 
                        onChange={handleUserInput} 
                        placeholder="Search a currency"
                 />

                {
                <ul className="crypto-list">
                    {data.map((coin, key) => {
                        return (
                            <li className="crypto-item" key={key}>
                                <div className="crypto-group-1">
                                    <img className="crypto-icon" src={coin.image} />
                                    <p className="crypto-name">{coin.id}({coin.symbol})</p>
                                </div>
                                <p className="crypto-price"> Price: €{coin.current_price}</p>
                            </li>
                        )
                    })}
                </ul>
                }
                
                {/* <ul className="crypto-list">
                    { this.state.data.filter((val) => {
                            if (this.state.filterData = '') {
                                return val
                            } else if (val.id.toLowerCase().includes(this.state.userInput.toLowerCase())) {
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

                    {console.log(this.state.userInput)}
                </ul> */}
            </div>
        )
}
