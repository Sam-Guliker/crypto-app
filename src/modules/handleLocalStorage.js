const handleLocalStorage = (val, personalList, setPersonalList) => {

    const found = personalList.some((item) => item.id === val.id)

    if(!found) setPersonalList(prevArray => [...prevArray, val])
    else {
        const newList = personalList.filter((item) => item.id !== val.id);
 
        setPersonalList(newList);
    }

    // const index = personalList.indexOf(val);


    // if (index > -1) {
    //   const firstPart = personalList.slice(0, index)
    //   const lastPart = personalList.slice(index +1, personalList.length)

    //   const newArray = firstPart.concat(lastPart)
    //   console.log(newArray)
    //   setPersonalList(newArray)
    // }

    // personalList.filter(e => console.log(e))

    // else { setPersonalList(prevArray => [...prevArray, val])}
}

export default handleLocalStorage