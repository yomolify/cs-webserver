import React, {Component, PropTypes} from 'react';
import {Pill, Card, Modal, ModalFooter, ModalHeader, Button, ModalBody} from 'elemental';
import AppointmentForm from '../Modal/AppointmentForm';
import Appointment from '../Modal/Appointment';


export default class FirstAvailableButton extends Component {
	state = {
		modalIsOpen: false
	}

	toggleModal(visible) {
		this.setState({
			modalIsOpen: visible
		});
	}

	render() {
		// var Day = this.props.day;
		// var Time = this.props.time;

		var Time = this.props.firstAvailableDate;
		var Text = "Book Now";
		return (
			<div>
			<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
				<Appointment />
			</Modal>
			<Pill size="lg" label={Time} type="success-inverted" onClick={this.toggleModal.bind(this, true)} />
			</div>
		);
	}
}

// import React, {Component, PropTypes} from 'react';

// export default class ScheduleButton extends Component {
// 	render() {
// 		var Time = this.props.time;
// 		var Name = this.props.name;
// 		return(
// 			<Button primary style={{marginRight:"5px", marginLeft:"5px", borderRadius:"25"}}>{Time}</Button>
// 		);
// 	}
// }

