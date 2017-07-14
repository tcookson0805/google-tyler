import React from 'react';

import ResultHeader from '../result_header/result_header.js';
import ResultMain from '../result_main/result_main.js';
import ResultFooter from '../result_footer/result_footer.js';

import './result.css';



const Result = () => {
	return (
		<div className="Result">
			<ResultHeader />

			<ResultMain />

			<ResultFooter />

		</div>
	)
}

export default Result;