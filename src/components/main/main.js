import React from 'react';
import _ from 'lodash';

import { Redirect, Route } from 'react-router-dom';

import './main.css';

import google from '../../img/google.png';
import microphone from '../../img/google_microphone.png';
import {Button} from 'muicss/react';
import cage from '../../img/nicolas_cage.jpg';

import Result from '../result/result.js';


const redirect = () => {
	setTimeout( () => {
		let newLocation = window.location + 'result';
		window.location.replace(newLocation)		
	}, 1000)
}

class Main extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			searchTerm: ''
		}

		this.handleClick = this.handleClick.bind(this);
	}

	fillInput() {
		let counter = 0;
		let phrase = "Who should I hire?";

		let start = setInterval(() => {
		    
		    let term = this.state.searchTerm + phrase[counter]

		    this.setState({
		    	searchTerm: term
		    })

		    counter++;
		    if(counter === phrase.length) {
		      clearInterval(start);
		    }
		}, 200);
	}

	handleClick() {
		console.log(this.state.searchTerm)
		return <Redirect to="/result" />
	}

	componentDidMount() {
		setTimeout(() => {this.fillInput()}, 1000)
	}

	render() {

		if(this.state.searchTerm === 'Who should I hire?') {
			redirect();
		}		

		return (
			<div className="Main">
				<header className="main-header">

						<div className="header-div">Gmail</div>
						<div className="header-div">Images</div>
						<div className="header-div"><i className="material-icons">apps</i></div>
						<div className="header-div"><i className="material-icons">notifications</i></div>
						<div className="header-div"><img className="profile-pic" src={cage} alt=""/></div>

				</header>
				<div className="hero">
					<div className="hero-image">
						<img src={google} alt=""/>
					</div>
					<div className="search-container">
						<div className="search-box">
							<input type="text" value={this.state.searchTerm}/>
						</div>
						<div className="microphone">
							<img src={microphone} alt=""/>
						</div>
					</div>
					<div>
						<Button onClick={this.handleClick} className="search-button" variant="raised">Google Search</Button>
						<Button className="search-button" variant="raised">I'm Feeling Lucky</Button>
					</div>
				</div>
				<footer className="main-footer">
					<div className="main-footer-left">Advertising</div>
					<div className="main-footer-left">Business</div>
					<div className="main-footer-left">About</div>
					<div className="main-footer-right">Privacy</div>
					<div className="main-footer-right">Terms</div>
					<div className="main-footer-right">Settings</div>
				</footer>
			</div>
		)
	}
}

export default Main;