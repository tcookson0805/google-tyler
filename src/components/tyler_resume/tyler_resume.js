import React from 'react';
import ReactPDF from 'react-pdf';

import resume from '../../img/TylerCookson_Resume.pdf';

import './tyler_resume.css';

class TylerResume extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {

    const display = this.props.display

    if(display) {
      const displayStyle = {
        "display": "inline-block"
      }

      return (
        <div className="TylerResume" style={displayStyle}>
          <ReactPDF
              file={resume}
          />
        </div>
      );

    } else {
      const displayStyle = {
        "display": "none"
      }

      return (
        <div className="TylerResume" style={displayStyle}>
          <ReactPDF
              file={resume}
          />
        </div>
      );
    }
      
  }
}

export default TylerResume;