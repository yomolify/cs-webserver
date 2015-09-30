import React, { Component } from 'react'
import {Glyph, Card, Form, FormField, FormInput, FormIconField, FormRow, ModalHeader, Modal, ModalBody, ModalFooter, Button} from 'elemental';
import Sticky from "react-sticky";
// Dunno why this is here?
// import Kronos from '../dist/kronos.min'


export default class SearchBar extends Component {
	state = {
		date: Date()
	}

	// timeNow(var i) {
	// 	var d = new Date(),
	// 		h = (d.getHours()<10?'0':'') + d.getHours(),
	// 		m = (d.getMinutes()<10?'0':'') + d.getMinutes();
	// 	i.value = h + ':' + m;
	// }

	render() {

		return (
			<div style={{width:"40%"}}>
			<FormRow>
				<FormIconField width="one-third" iconPosition="left" iconKey="clock" iconFill="default">
					<FormInput type="time" placeholder="Default" />
				</FormIconField>
				<FormIconField width="one-third" iconPosition="left" iconKey="calendar" iconFill="default">
					<FormInput type="date" placeholder="Default" />
				</FormIconField>
				<FormIconField width="one-third" iconPosition="right" iconKey="location" iconFill="default">
					<FormInput type="place" placeholder="Vancouver" />
				</FormIconField>
			</FormRow>
			</div>
		);
   }
}

