// Information.component.js
import React from 'react';
import syles from './information.scss';



class Information extends React.Component {
	render() {
		return(
			<div className="information">
				<div className="information__profile">
					<h1 className="information__title">Created by</h1>
					<div className="information__info">
						<p class="information__name"> Luuk Gille</p>
						<a href="https://www.linkedin.com/in/luuk-gille-32a714140/" class="information__image"></a>
					</div>
				</div>
			</div>
		);
	}
}

export default Information;