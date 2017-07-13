import React from 'react';

import './result_header.css';
import googleSmall from '../../img/google_small.png';
import microphone from '../../img/google_microphone.png';
import cage from '../../img/nicolas_cage.jpg';

class ResultHeader extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			searchTerm: "Who should I hire?"
		}
	}

	whoaThere() {
		if(window.confirm("Yeahhhh.....that's not gonna work. " + 
			"But if you do actually want to leave the page to do a Google Search," + 
			"click OK below...otherwise click Cancel and continue checking out my page")) {
			window.location.href='https://www.google.com'
		}
	}

	render() {
		return (
			<header>
				<div className="header-top">				
					<div className="result-search-container">
						<div className="result-icon">
							<img src={googleSmall} alt=""/>
						</div>
						<div className="result-input-container">
							<input type="text" value={this.state.searchTerm} onChange={this.whoaThere}/>
							<div className="result-microphone">
								<img src={microphone} alt=""/>
							</div>
							<div className="result-search-icon">
								<i className="material-icons">search</i>
							</div>
						</div>
					</div>
					<div className="result-options-container">
						<div className="result-header-div"><i className="material-icons">apps</i></div>
						<div className="result-header-div"><i className="material-icons">notifications</i></div>
						<div className="result-header-div"><img className="result-header-pic" src={cage} alt=""/></div>
					</div>
				</div>

				<div className="header-bottom">
					<div className="header-links-left">
						<div>All</div>
						<div>Images</div>
						<div>News</div>
						<div>Videos</div>
						<div>Shopping</div>
						<div>More</div>
					</div>
					<div className="header-links-right">
						<div>Settings</div>
						<div>Tools</div>
					</div>
				</div>
			</header>
		)
	}
	
}

export default ResultHeader;