import React from "react";
import './Container.scss'

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    
    componentWillMount () {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
 
    render() {
        return (
            <div className="container">
               <h1>A crypto currency tracker</h1>
                <ul className="crypto-list">
                    {this.state.data.map(((item) => (
                        <li key={item.id} className="crypto-item">
                            <div className="crypto-group-1">
                                <img className="crypto-icon" src={item.image} />
                                <p className="crypto-name">{item.id}({item.symbol})</p>
                            </div>
                            <p className="crypto-price"> Price: €{item.current_price}</p>
                        </li>
                    )))}
                </ul>
            </div>
            )
    }
}
 
export default Container;