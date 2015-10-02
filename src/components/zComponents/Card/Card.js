import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default class Card extends Component {


  render() {
    const cardStyles = {
      card: {
        background: '#FFFFFF',
        borderRadius: '2px',
        float: 'left',
        height: '300px',
        margin: '1rem',
        position: 'relative',
        width: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',

        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          },
        },
    };
    return (
      <div style={{height: '500px', length:'500px', position:'relative'}}>
        <div key='one' style={cardStyles.card}>
          <p>text</p>
        </div>
      </div>
    );
  }
}


@Radium
class CardBody extends Component {
    render() {
      return (
        <div style={{fontStyle:'Roboto'}}>
          I am a card Body.
        </div>
      );

    }
}