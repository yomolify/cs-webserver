import React, {Component, PropTypes} from 'react';

export default class PractitionerInfo extends Component {

	render() {
		var divStyle = {
			boxSizing: "borderbox",
			color:"rgb(68, 68, 68)",
			display: "block",
			float: "left",
			fontFamily: "Helvetica, Roboto, Arial, sansserif",
			fontSize: "26px",
			fontStyle: "normal",
			fontWeight: "200",
			height: "63.9931px",
			lineHeight: "normal",
			listStyleImage: "none",
			listStylePosition: "outside",
			listStyleType: "none",
			marginBottom: "0px",
			marginLeft: "0px",
			marginRight: "0px",
			marginTop: "0px",
			paddingBottom: "0px",
			paddingLeft: "0px",
			paddingRight: "0px",
			paddingTop: "8px",
			textAlign: "left",
		}

		var specializationStyle = {
			color: "rgb(170, 170, 170)",
			fontSize:" 14px",
			fontStyle: "normal",
			fontWeight: "200",
			height: "25.9896px",
			marginBottom: "0px",
			marginLeft: "0px",
			marginRight: "0px",
			marginTop: "0px",
			overflowX: "hidden",
			overflowY: "hidden",
			paddingBottom: "0px",
			paddingLeft: "0px",
			paddingRight: "0px",
			paddingTop: "0px",
			textAlign: "left",
			textTransform: "capitalize",
			verticalAlign: "bottom",
			whitespace: "nowrap"
		}
		var name = this.props.name;
		var specialization = this.props.specialization;
		return (
			<div style={divStyle}>
				<h4>{name}</h4>
				<p style={specializationStyle}>{specialization}</p>
			</div>
		);
	}
}