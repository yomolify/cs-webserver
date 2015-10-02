import React, {Component} from 'react';

export default class PracticeHeader extends Component {
	render() {
		const divStyle = {

			boxSizing:'border-box',
			display:'block',
			paddingBottom: '10px',
			paddingLeft: '5px',
			paddingRight: '5px',
			paddingTop: '5px',
			overflow: 'hidden'
		};

		const headerTitleStyle = {

			color: '#00ACC1',
			fontFamily: 'Roboto, Arial, sans-serif',
			fontSize: '27px',
			fontStyle: 'bold',
			fontWeight: '200',
			textAlign: 'left',
			lineHeight: '70%',
			display:'block'

		};

		const headerTextStyle = {

			color: 'rgb(51, 76, 76)',
			fontFamily: 'Roboto, Arial, sans-serif',
			fontSize: '14px',
			fontStyle: 'normal',
			fontWeight: '400',
			textAlign: 'left',
			lineHeight: 'normal',
			display: 'block'
		};
		var name = this.props.name;
		var address = this.props.address;
		return (
			<div className='practiceHeader' style={divStyle}>
				<h3 style={headerTitleStyle}>{name}</h3>
				<small style={headerTextStyle}>{address}</small>
			</div>
		);
	}
}

