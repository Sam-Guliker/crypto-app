const handleLocalStorage = (val, personalList, setPersonalList) => {
    if (personalList.some(item => item.id === val.id)) return
    else { setPersonalList(prevArray => [...prevArray, val])}
}

export default handleLocalStorage