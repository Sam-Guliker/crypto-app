import React from "react";

import { ReactComponent as Plus } from '../assets/plus.svg';

export default function CryptoList({data, userInput}) {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (    
        <div className="crypto-container">
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
                                    <button className="add-to-list-button">
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
    )
}