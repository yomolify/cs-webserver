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



		return (
			<Card>
				<PractitionerAvatar/>
				<PractitionerInfo name={name}/>
				<Availability availability={availability} />
			</Card>
		);
	}
}

