import React, {Component, PropTypes} from 'react';
import {Button} from 'belle';

export default class ScheduleButton extends Component {
	render() {
		var Time = this.props.time;
		var Name = this.props.name;
		return(
			<Button primary style={{marginRight:"5px", marginLeft:"5px", borderRadius:"25"}}>{Time}</Button>
		);
	}
}

