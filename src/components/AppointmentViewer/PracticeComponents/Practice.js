import React, {Component, PropTypes} from 'react';
//import Practitioners from '../PractitionerComponents/Practitioner';
import PracticeHeader from './PracticeHeader';
import Practitioner from '../PractitionerComponents/Practitioner';
import { Card } from 'elemental';


export default class Practice extends Component {
	render() {
		var practitioners = [];
		var practiceName = this.props.practice.Name;
		var practiceAddress = this.props.practice.Address;
		this.props.practice.Practitioners.forEach(function(practitioner) {
			practitioners.push(<Practitioner practitioner={practitioner} />);
		});
		return (
			<Card>
				<PracticeHeader name={practiceName} address={practiceAddress}/>
				{practitioners}
			</Card>
		);
	}
}

