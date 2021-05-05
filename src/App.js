import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import {useState, useEffect} from "react";

import Header from './components/Header.js'

import { ReactComponent as Watchlist } from './assets/watchlist-nav.svg';
import { ReactComponent as Fav } from './assets/star-nav.svg';


import './styles/main.scss'

function App() {
  return (
    <div className="container"></div>
  );
}

export default App;
