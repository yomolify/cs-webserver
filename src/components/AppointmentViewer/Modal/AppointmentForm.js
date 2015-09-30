import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connectReduxForm} from 'redux-form';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
// import * as bookActions from 'redux/modules/book';
import {isLoaded as isAuthLoaded, load as loadAuth} from 'redux/modules/auth';
import { Link } from 'react-router';
import moment from 'moment';

@connectReduxForm({
  form: 'appointmentForm',
  fields: ['patientName', 'patientEmail', 'patientPhoneNumber', 'patientPostalCode']
  // state => ({user: state.auth.user, token: state.auth.token}),
  // dispatch => bindActionCreators(bookActions, dispatch)
})
export default
class AppointmentForm extends Component {
  static propTypes = {
    // No sure if required.
    book: PropTypes.func,
  }

  render() {
    console.log("let's try and make an appointment form");
    const{
      fields: {patientName, patientEmail, patientPhoneNumber, patientPostalCode},
      handleSubmit,
      handleChange
      } = this.props;
    const styles = require('./AppointmentForm.scss');

    const renderInput = (field, label) =>
         <div>
            <input type="text" className="form-control" id={field.name} {...field}/>
        </div>;

    return (
      
      <form className="form-horizontal" onSubmit={handleSubmit}>
        {renderInput(patientName, 'Full Name')}
        {renderInput(patientEmail, 'Email')}
        {renderInput(patientPhoneNumber, 'Phone number')}
        {renderInput(patientPostalCode, 'Postal code')}
         <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
            </div>
          </div>
        </form>
    );
  }
}
