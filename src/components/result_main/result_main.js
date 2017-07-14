import React from 'react';

import './result_main.css';

import MoreImages from '../more_images/more_images.js';

import pic1 from '../../img/ty_profile_pic2.jpg';
import pic2 from '../../img/ty_molly_beach.jpg';
import pic3 from '../../img/crash_layla.jpg';
import pic4 from '../../img/ty_molly_wedding.jpg';
import pic5 from '../../img/crash_cart.jpg';

import googleMoreResults from '../../img/google_more_results.png';

const ResultMain = () => {

	return (
		
		<div className="ResultMain">

			<div className="result-stats">
				About 362,000 results (0.43 seconds) 
			</div>

			<div className="images-container">
				<h3><a href="">Images for Tyler Cookson</a></h3>
				<ul className="images-box">
					<li>
						<img src={pic1} alt=""/>
					</li>
					<li>
						<img src={pic2} alt=""/>
					</li>
					<li>
						<img src={pic3} alt=""/>
					</li>
					<li>
						<img src={pic4} alt=""/>
					</li>
					<li>
						<img src={pic5} alt=""/>
					</li>
				</ul>
				<div className="images-sub">
					<MoreImages />
					<div className="reportImages">
						Report Images
					</div>
				</div>
			</div>

			<div className="results-container">

				<div className="result-item">
					<h3 className="result-item-header"><a href="http://www.tylercookson.com">Tyler Cookson</a></h3>
					<p className="result-item-url">www.tylercookson.com/</p>
					<p className="result-item-description">
						I am a software engineer who strives to write clean, maintainable 
						code with a focus user experience and responsive design. I live in
						San Francisco with my ...
					</p>
				</div>

				<div className="result-item">
					<h3 className="result-item-header"><a href="https://www.linkedin.com/in/tylercookson">Tyler Cookson | LinkedIn</a></h3>
					<p className="result-item-url">https://www.linkedin.com/in/tylercookson</p>
					<p className="result-item-location">San Francisco, California - ‎Software Engineer</p>
					<p className="result-item-description">
						View Tyler Cookson's professional profile on LinkedIn. 
						LinkedIn is the world's largest business network, helping professionals 
						like Tyler Cookson discover inside ...
					</p>
				</div>

				<div className="result-item">
					<h3 className="result-item-header"><a href="https://github.com/tcookson0805">tcookson0805 (Tyler Cookson) Github</a></h3>
					<p className="result-item-url">https://github.com/tcookson0805</p>
					<p className="result-item-description">
						tcookson0805 has 42 repositories available. Follow their code on GitHub.
					</p>
				</div>

				<div className="result-item">
					<h3 className="result-item-header"><a href="https://gigplay.herokuapp.com/">GigPlay</a></h3>
					<p className="result-item-url">https://gigplay.herokuapp.com/</p>
					<p className="result-item-description">
						Find concerts in your area based on the songs you listen to most. 
						And support artists you love. If you want to demo this app, login
						with the ...
					</p>
				</div>

				<div className="result-item">
					<h3 className="result-item-header"><a href="https://attorney-gap.herokuapp.com/">Attorney Gap</a></h3>
					<p className="result-item-url">https://attorney-gap.herokuapp.com/</p>
					<p className="result-item-description">
						Connecting attorney's to open appearance requests in their area ...
						with open hours to fill or a small firm with an overbooked case
						load, Attorney Gap can help.
					</p>
				</div>

				<div className="result-item">
					<h3 className="result-item-header"><a href="https://campaign-donors.herokuapp.com/">Campaign Donor Data</a></h3>
					<p className="result-item-url">https://campaign-donors.herokuapp.com/</p>
					<p className="result-item-description">
						Discover who supports candidates and causes in your area. Type a 
						name or select a city to get started
					</p>
				</div>

				<div className="result-item">
					<h3 className="result-item-header"><a href="https://www.instagram.com/tcookson0805/">Tyler Cookson (@tcookson0805) • Instagram photos and videos</a></h3>
					<p className="result-item-url">https://www.instagram.com/tcookson0805/</p>
					<p className="result-item-description">
						93 Followers, 164 Following, 108 Posts - See Instagram photos and videos 
						from Tyler Cookson (@tcookson0805)
					</p>
				</div>

				<div className="more-results-container">
					<img className="more-results-image" src={googleMoreResults} alt=""/>
					<div className="more-results-links">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
						<div className="more-results-next">
							Next
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResultMain;