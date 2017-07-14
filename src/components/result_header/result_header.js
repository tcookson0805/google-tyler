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
			"If you actually want to leave the page to do a Google Search," + 
			"click OK below...otherwise click Cancel")) {
			window.location.href='https://www.google.com'
		}
	}

	selected() {
		console.log(this)
		console.log('selected');
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
						<div className="header-link-selected">All</div>
						<div onClick={this.selected}>Images</div>
						<div onClick={this.selected}>News</div>
						<div onClick={this.selected}>Videos</div>
						<div onClick={this.selected}>Shopping</div>
						<div onClick={this.selected}>More</div>
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