import React from "react";
import './Searchbar.scss'

class Searchbar extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'value'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onHandleUserInput() {

    }
 
    render() {
        return (
            <div className="container">
                
            </div>
            )
    }
}
 
export default Searchbar;