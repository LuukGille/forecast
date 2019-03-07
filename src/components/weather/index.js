// Weather.component.js
import React from 'react';
import styles from './weather.scss';


//create a const to get the data from the API
let API = 'http://api.apixu.com/v1/forecast.json?key=3c22566e45084cd6ba482635190703&days=7&q=rotterdam';

class Weather extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			weather: [],
			forecast: [],
		};
	}

	showWeather (e) {
		e.preventDefault();
		const weatherInput = document.querySelector(".weather__location");
		let location = weatherInput.value;
		API = `http://api.apixu.com/v1/forecast.json?key=3c22566e45084cd6ba482635190703&days=7&q=${location}`
		fetch(API)
		.then(response => response.json())
		
		.then(data => {
			this.setState({ weather: data.location, forecast: data.forecast.forecastday });
			document.querySelector('.error').innerHTML = "";
		})
		.catch(error=> document.querySelector('.error').innerHTML = `We couldn't find any results for ${location}`);
	}

	weekDay (day) {
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		let date = new Date(day);
		let index = date.getDay();
		return days[index];
	}

	//Fetch the API and create JSON code
	componentDidMount() {
		fetch(API)
		.then(response => response.json())
		.then(data => {
			this.setState({ weather: data.location, forecast: data.forecast.forecastday });
			console.log(data);
		});

	}
	render() {
		const { weather } = this.state;
		const { forecast} = this.state;

		return(
			<div className="section">
				<div className="weather">
					<div className="weather__section"> 
						<div className="weather__header">
							<div className="weather__intro">
								<h1 className="weather__title">What is the weather this week?</h1> 
								<p className="weather__text">Let's find out!</p>
							</div>
							<div className="weather__overview">
								<p className="weather__city">{weather.name}</p>
								<div className="weather__weekly">
									{forecast.map((forecast, i) =>
										<div className="weather__display" key={i}>
											<img src={forecast.day.condition.icon}></img>
											<p className="weather__days">{forecast.day.avgtemp_c}°c</p>
											<p className="weather__days">{this.weekDay(forecast.date)}</p>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="weather__input">
							<form onSubmit={(e) => this.showWeather(e)} className="weather__submit">
								<div className="weather__form">
									<input className="weather__location" placeholder="Rotterdam"></input>
									<button className="weather__button">submit</button>
								</div>
								<p className="error"></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Weather;