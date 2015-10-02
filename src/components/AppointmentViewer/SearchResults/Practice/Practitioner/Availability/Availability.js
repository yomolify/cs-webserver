import React, {Component, PropTypes} from 'react';
import FirstAvailableButton from './FirstAvailableButton/FirstAvailableButton';
import ShowAdditionalTimesButton from './ShowAdditionalTimesButton/ShowAdditionalTimesButton';

export default class  extends Component {

	// 0

	//TODO: we need a componentWillRecieveProps() function that is responsible for updating props when the map moves.:

	render() {
		var divStyle = {
			boxSizing:'border-box',
			color:'rgb(68, 68, 68)',
			cursor:'auto',
			display:'block',
			float:'left',
			fontFamily:'Roboto, Arial, sans-serif',
			fontSize:'16px',
			fontStyle:'normal',
			fontWeight:'200',
			listStyleImage:'none',
			listStylePosition:'outside',
			listStyleType:'none',
			textAlign:'left',
			whiteSpace:'normal',
		}
			var firstAvailableDate = '';
			var date = new Date();
			var nextDate = date + 1;
			var today = date.toString();
			var tomorrow = nextDate.toString();
			if (this.props.availability[0] == today) {
				firstAvailableDate = 'Today'
			} else if (this.props.availability.slice(1,1) == tomorrow) {
				firstAvailableDate = 'Tomorrow';
			} else
				firstAvailableDate = this.props.availability;
		return (
			<div style={{width:'100%'}}>
				<div style={{float:'left', width:'50%', marginTop:'20px'}}>
					<FirstAvailableButton firstAvailableDate={firstAvailableDate}/>
				</div>
				<div style={{float:'right', width:'50%', marginTop:'20px'}}>
					<ShowAdditionalTimesButton />
				</div>
			</div>
		);
	}
}
