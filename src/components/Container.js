import React from "react";
import {useState, useEffect} from "react";

import Header from './Header.js'
import CryptoList from './CryptoList.js'

export default function App() {
    const [data, setData] = useState([]) 
    const [userInput, setUserInput] = useState('')
    const [listItem, setListItems] = useState('')

    useEffect(()=> {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => response.json())
            .then(response => setData(response))
    },[])

    return (
        <div className="container">
            <Header 
                setUserInput={setUserInput} 
                userInput={userInput} 
            />
            <CryptoList 
                data={data} 
                userInput={userInput} 
                setListItems={setListItems}
            />
        </div>
    )
}