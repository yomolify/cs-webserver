import React, {Component} from 'react';
import Modal, {closeStyle} from 'simple-react-modal'

export default class AppointmentModal extends Component {

  state = {
  }

  show(){
    this.setState({show: true})
  }

  close(){
    this.setState({show: false})
  }

  render(){
    return (
      <div>
      <a onClick={this.show.bind(this)}>Book an appointment</a>
      <Modal
      style={{background: 'white'}} //overwrites the default background
      containerStyle={{background: 'grey'}} //changes styling on the inner content area
      containerClassName="test"
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>

      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <div>Book an appointment</div>

      </Modal>
      </div>
    );
  }
}

