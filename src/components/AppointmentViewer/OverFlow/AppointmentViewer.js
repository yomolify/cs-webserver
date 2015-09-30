import React, {Component, PropTypes} from 'react';
import {Button, Card, ComboBox, Select, Option, Placeholder, Separator, Rating, TextInput, Toggle, Choice} from 'belle';
import SimpleMapPage from "../Map/SimpleMapPage";
import PracticeCard from "./PracticeComponents/PracticeCard/PracticeCard";
console.log("got to the import statement");
//import AppointmentModal from "./AppointmentModal";
console.log("got past the import statement");

// Somewhere we have to deal with the data inflows.
// This should probably appear here for now.

// TODO: Data handling
// TODO: Form submission in dialog (should probably happen at the component level :)

export default class AppointmentViewer extends Component {
	render() {
		var practiceList = [];
		this.props.practices.practice.forEach(function(practice) {
			practiceList.push(<PracticeCard practice={practice}/>);
		});
		return (
			<div style={{ width:"40%", float:"left" }}>
				<h1><p>Available appointments</p></h1>
				{practiceList}
				<div style={{height:"5000px"}}>
					<SimpleMapPage />
					<p>well, at least we could make some tarts</p>
				</div>
			</div>

		);
	}
}
