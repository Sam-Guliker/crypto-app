import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import {useState, useEffect} from "react";

import Header from './components/Header.js'
import WatchList from './views/WatchList.js'
import PersonalList from './views/PersonalList.js'

import { ReactComponent as Watchlist } from './assets/watchlist-nav.svg';
import { ReactComponent as Fav } from './assets/star-nav.svg';

import './styles/main.scss'

function App() {
  const [data, setData] = useState([]) 
  const [userInput, setUserInput] = useState('')
  const [personalList, setPersonalList] = useState([])
  const [header, setHeader] = useState('')


  useEffect(()=> {
    setHeader('Watchlist')
    const apiCall = () => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
          .then(response => response.json())
          .then(response => {
            setData(response) 

            setTimeout(() => {
              apiCall()
            }, 13000)
          })
    }

    apiCall()

  },[])

  return (
    <Router>
    <div className="container">
      <Header 
          setUserInput={setUserInput} 
          userInput={userInput} 
          header={header}
      />
      <Switch>
        <Route exact path="/">
          <WatchList 
            data={data} 
            userInput={userInput} 
            personalList={personalList}
            setPersonalList={setPersonalList}
          />
        </Route>
        <Route path="/personal-list">
          <PersonalList
            data={data} 
            userInput={userInput} 
            personalList={personalList}
            setPersonalList={setPersonalList} 
            />
        </Route>
      </Switch>
      <nav className="navigation">
          <NavLink exact to="/" onClick={() => setHeader('Watchlist')} >
            <Watchlist className="navigation-icons"/>
            <h2 className="heading-03">Watchlist</h2>
          </NavLink>
          <NavLink to="/personal-list" onClick={() => setHeader('Favorites')}>
            <Fav className="navigation-icons" />
            <h2 className="heading-03">Favorites</h2>
          </NavLink>
        </nav>
    </div>
</Router>
  )
}

export default App;