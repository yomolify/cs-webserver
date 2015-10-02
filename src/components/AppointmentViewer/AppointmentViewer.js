import React, {Component, PropTypes} from 'react';
//import {Button, Card, ComboBox, Select, Option, Placeholder, Separator, Rating, TextInput, Toggle, Choice} from 'belle';
console.log('got to the import statement');
import SearchResults from './SearchResults/SearchResults';
import Card from '../zComponents/Card/Card';
// import AppointmentDateTimePicker from '../SearchBar/AppointmentDateTimePicker';
// Somewhere we have to deal with the data inflows.
// This should probably appear here for now.

// TODO: Data handling
// TODO: Form submission in dialog (should probably happen at the component level :)

export default class AppointmentViewer extends Component {
	render() {
		// var practiceList = [];
		// this.props.practices.practice.forEach(function(practice) {
		// 	practiceList.push(<PracticeCard practice={practice}/>);
		// });
		return (
			<div>
				<SearchResults />
			</div>
		);
	}
}
