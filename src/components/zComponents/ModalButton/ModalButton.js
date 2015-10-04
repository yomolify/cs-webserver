import React, {Component, PropTypes} from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};
export default class ModalButton extends Component {
  state = {
    modalIsOpen: false
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  static propTypes = {
    modalIsOpen: PropTypes.bool
  }
  render() {
    const {modalIsOpen} = this.state;
    console.log('modalIsOpen', modalIsOpen);
    const style = require('./ModalButton.scss');
    return (
      <div>
        <button onClick={::this.openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={::this.closeModal}
          style={customStyles} >

          <h2>Book Appointment</h2>
          <button onClick={::this.closeModal}>close</button>
          <form>
          </form>
        </Modal>
      </div>
    );
  }
}
