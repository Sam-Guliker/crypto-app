import React from "react";

import CryptoList from '../components/CryptoList.js'

export default function PersonalList({data, userInput, personalList, setPersonalList}) {
    return (
        <CryptoList 
            data={data} 
            userInput={userInput} 
            personalList={personalList}
            setPersonalList={setPersonalList}
        />
    )
}