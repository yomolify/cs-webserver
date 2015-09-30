import React, {Component, PropTypes} from 'react';
import {Button, Card, ComboBox, Select, Option, Placeholder, Separator, Rating, TextInput, Toggle, Choice} from 'belle';
import DoctorCard from '../../DoctorComponents/DoctorCard/DoctorCard';

export default class PracticeList extends Component {
	render() {
		var PracticeName = this.props.practice.Name;
		var Address = this.props.practice.Address;
		var practiceList = [];

		this.props.practice.Doctors.forEach(function(Doctor) {
			practiceList.push(<DoctorCard doctor={Doctor}/>);
		});
		return (
			<div>
				<Card style={{ borderTop: '1px solid #f2f2f2' }}>
				  <p>I'm a patient card!</p>
				  <div>{practiceList}</div>
				</Card>
			</div>
		);
	}
}