import React, {Component, PropTypes} from 'react';
import PractitionerAvatar from './PractitionerAvatar';
import PractitionerInfo from './PractitionerInfo';
import Availability from './Availability';
import FirstAvailableButton from './FirstAvailableButton';
import ShowAdditionalTimesButton from './ShowAdditionalTimesButton';
import {Card} from 'elemental';
export default class Practitioner extends Component {
	render() {
		var firstName = this.props.practitioner.FirstName;
		var lastName = this.props.practitioner.LastName;
		var name = firstName + ' ' + lastName;
		var availability = this.props.practitioner.Availability;
		//var specializations = this.props.practitioner.Specializations;

		//				<PractitionerAvatar/>
		var divStyle = {
			overflow:"hidden",
			WebkitFlex:"1",
			flex:"1",
		}

		var cardStyle = {
			display:"WebkitFlex",
			WebkitJustifyContent:"center",
			justifyContent:"center",
		}
		return (
			<Card style={cardStyle}>
				<div style={divStyle}>
					<PractitionerInfo name={name}/>
				</div>
				<div style={divStyle}>
					<Availability availability={availability} />
				</div>
			</Card>
		);
	}
}

