import React, {Component, PropTypes} from 'react';
import {Button, Card, ComboBox, Select, Option, Placeholder, Separator, Rating, TextInput, Toggle, Choice} from 'belle';
import DoctorCard from "../../DoctorComponents/DoctorCard/DoctorCard";

export default class PracticeCard extends Component {
	render() {
		var PracticeName = this.props.practice.Name;
		var Address = this.props.practice.Address;
		var practiceList = [];

		this.props.practice.Doctors.forEach(function(Doctor) {
			practiceList.push(<DoctorCard doctor={Doctor}/>);
		});
		return (
			<div>
				<Card style={{paddingBottom:"1px", paddingTop:"1px"}}>
				  <h3><p>{PracticeName}</p></h3>
				  <p>{Address}</p>
				  <div>{practiceList}</div>
				</Card>
			</div>
		);
	}
}