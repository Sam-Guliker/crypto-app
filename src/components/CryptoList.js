import React from "react";

import { ReactComponent as Star } from '../assets/star-outline.svg';

import capitalizeFirstLetter from '../modules/capitalizeFirstLetter.js';
import handleLocalStorage from '../modules/handleLocalStorage.js';

export default function CryptoList({data, userInput, personalList, setPersonalList}) {

    const checkIfIdentical = (val) => {
        if(personalList.some(item => item.id === val.id)) {
            return true
        }
    }

    return (    
        <div className="crypto-container">            
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
                                <div
                                    onClick={() => handleLocalStorage(val, personalList, setPersonalList)} 
                                    className="crypto-group-2">

                                    <button 
                                        className={`add-to-list-button ${checkIfIdentical(val) ? 'selected' : ''}`} >
                                        <Star />
                                    </button>
                                    <p className="crypto-price">€{val.current_price}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}