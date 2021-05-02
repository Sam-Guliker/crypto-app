const handleLocalStorage = (val, personalList, setPersonalList) => {
    const found = personalList.some((item) => item.id === val.id)
    if(!found) setPersonalList(prevArray => [...prevArray, val])
    else {
        const newList = personalList.filter((item) => item.id !== val.id);
        setPersonalList(newList);
    }
}

export default handleLocalStorage