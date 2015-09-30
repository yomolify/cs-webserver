import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import {initialize} from 'redux-form';
import AppointmentForm from './AppointmentForm';
import {Modal} from 'elemental';

// <Modal>
//   <ModalHeader text="Modal Header" />
//   <ModalBody>
//     <form>[...]</form>
//   </ModalBody>
//   <ModalFooter>
//     <Button type="primary">Modal Footer</Button>
//     <Button type="link-cancel">Button</Button>
//   </ModalFooter>
// </Modal>

@connect(
  () => ({}),
  dispatch => bindActionCreators({initialize}, dispatch)
)

export default class Appointment extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit(data) {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('survey', {});
  }

  handleInitialize() {
    this.props.initialize('appointmentForm', {
      patientName: 'Full name',
      patientEmail: 'me@example.com',
      patientPhoneNumber: '(XXX) XXX-XXXX',
      patientPostalCode: 'X1X 1X1'
    });
  }

  render() {
    return (
        <div style={{textAlign: 'center', margin: 15}}>
          <button className="btn btn-primary" onClick={::this.handleInitialize}>
            <i className="fa fa-pencil"/> Initialize Form
          </button>
        <AppointmentForm onSubmit={::this.handleSubmit}/>
      </div>
    );
  }
}
