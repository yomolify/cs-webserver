import React, {Component, PropTypes} from 'react';
import {Button, Card, ComboBox, Select, Option, Placeholder, Separator, Rating, TextInput, Toggle, Choice} from 'belle';
import ScheduleButton from './ScheduleButton'

export default class DoctorCard extends Component {
	render() {
		var FirstName = this.props.doctor.FirstName;
		var LastName = this.props.doctor.LastName;
		var Name = this.props.doctor.FirstName + " " + this.props.doctor.LastName;
		var buttonCol = [];
		var time = '';
		for (var i = 0; i < 1; i++) {
			if (this.props.doctor.AvailableTimes[i] != null) {
				time = this.props.doctor.AvailableTimes[i];
				buttonCol.push(<ScheduleButton time={time} name={Name}/>);
			} else continue;
		}
		return (
				<Card style={{width:"100%"}}>
						<div style={{width:"20%", float:"left", minWidth:"100px"}}>
						</div>
						<div style={{width:"30%", float:"left", minWidth:"100px"}}>
							<div style={{position:"relative", top:"10%", transform:"translateY(-50%)",width:"50%", wordWrap:"break-word"}}>
								<b><p>{Name}</p></b>
							</div>
						</div>
						<div style={{width:"50%", float:"right"}}>
							<div style={{position:"relative", top:"50%", transform:"translateY(-50%)", float:"right"}}>
								{buttonCol}
							</div>
						</div>
				</Card>
		);
	}
}

