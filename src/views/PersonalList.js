import React from "react";

import CryptoPersonalList from '../components/CryptoPersonalList.js'

export default function PersonalList({data, userInput, personalList, setPersonalList}) {
    return (
        <CryptoPersonalList 
            data={data} 
            userInput={userInput} 
            personalList={personalList}
            setPersonalList={setPersonalList}
        />
    )
} 