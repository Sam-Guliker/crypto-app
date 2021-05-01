import React from "react";

import { ReactComponent as Plus } from '../assets/plus.svg';

export default function CryptoPersonalList({ personalList, setPersonalList}) {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleLocalStorage = (val) => {
        if(personalList.indexOf(val.id) === -1) setPersonalList(prevArray => [...prevArray, val])
        else return
    }

    return (    
        <div className="crypto-container">            
            <ul className="crypto-list">
                { personalList.length > 0
                    ? personalList.map((val, key) => {
                        return (
                                <li key={key} className="crypto-item">
                                    <div className="crypto-group-1">
                                        <h2 className="crypto-name heading-02">{capitalizeFirstLetter(val.id)}</h2>
                                        <span className="crypto-symbol">{val.symbol.toUpperCase()}</span>
                                    </div>
                                    <div className="crypto-group-2">
                                        <a className="add-to-list-button" onClick={(e) => handleLocalStorage(val)}>
                                            <Plus />
                                        </a>
                                        <p className="crypto-price">€{val.current_price}</p>
                                    </div>
                                </li>
                        )
                    })

                    :<li><p>This is empty</p></li>
                }
            </ul>
        </div>
    )
}