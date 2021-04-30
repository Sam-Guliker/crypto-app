import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {useState, useEffect} from "react";

import WatchList from './views/WatchList.js'
import PersonalList from './views/PersonalList.js'

import Header from './components/Header.js'

import './styles/main.scss'

function App() {
  const [data, setData] = useState([]) 
  const [userInput, setUserInput] = useState('')
  const [personalList, setPersonalList] = useState([])

  useEffect(()=> {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
          .then(response => response.json())
          .then(response => setData(response))
  },[])

  return (
      <Router>
        <div className="container">
          <Header 
              setUserInput={setUserInput} 
              userInput={userInput} 
          />
            <nav>
              <Link to="/"><h2 className="heading-01">Watch List</h2></Link>
              <Link to="/personal-list"><h2 className="heading-01">My List</h2></Link>
            </nav>

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
        </div>
    </Router>
  );
}

export default App;
