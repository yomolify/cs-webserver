import React, { Component, Proptypes } from 'react';
import Kronos from 'react-kronos';
import Moment from 'moment'


export default class AppointmentDateTimePicker extends Component {
	state = {
		datetime: Moment().toISOString()
	}

	onChange(datetime) {
    	console.log('datetime:', datetime)
    	this.setState({ datetime: datetime });
  	}

	render() {
	 	let minDate = Moment().subtract(2, 'weeks').toDate();
	    let maxDate = Moment().add(2, 'weeks').toDate();
	    let style = {
	    	main: {
	    		backgroundColor: 'hsl(0, 0%, 97%)',
		        padding: '48px 0',
	    	}
	    }
	    
		return(
		 <main style={style.main}>
			 <Kronos
                time={this.state.datetime}
                onChange={::this.onChange}
                min={minDate}
                max={maxDate} />
        </main>
		);
	}
}