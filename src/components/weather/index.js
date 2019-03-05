// weather.component.js
import React from 'react';
import styles from './Weather.scss';

class Weather extends React.Component {
    render() {
        return(
            <div>
                <h1>What kind of weaher is it today?</h1> 
                <p>Let's find out!</p>
                <form>
                    <input placeholder="checkPlace"></input>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default Weather;