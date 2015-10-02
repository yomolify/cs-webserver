import React, {Component, PropTypes} from 'react';
import PractitionerAvatar from './PractitionerAvatar/PractitionerAvatar';
import PractitionerInfo from './PractitionerInfo/PractitionerInfo';
import Availability from './Availability/Availability';
import FirstAvailableButton from './Availability/FirstAvailableButton/FirstAvailableButton';
import ShowAdditionalTimesButton from './Availability/ShowAdditionalTimesButton/ShowAdditionalTimesButton';
import {Card} from 'elemental';
export default class Practitioner extends Component {
	render() {
		var firstName = this.props.practitioner.FirstName;
		var lastName = this.props.practitioner.LastName;
		var name = firstName + ' ' + lastName;
		var availability = this.props.practitioner.Availability;
		//var specializations = this.props.practitioner.Specializations;

		var divStyle = {
			    display:'inlineBlock',
    			width: '25%',
    			overflow:'hidden'

		}

		var cardStyle = {
			width: '100%',
			overflow:'hidden'
		}
		return (
			<Card>
				<div style={cardStyle}>
					<div style={{width:'30%', float:'left'}}>
						<PractitionerInfo name={name}/>
					</div>
					<div style={{width:'70%', float:'right'}}>
						<Availability availability={availability} />
					</div>
				</div>
			</Card>
		);
	}
}

