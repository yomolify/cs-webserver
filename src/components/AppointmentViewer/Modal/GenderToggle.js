import React, {Component, PropTypes} from 'react';

export default class GenderToggle extends Component {


	render() {
		const styles = require('./GenderToggle.scss');
		return(
			<div class={this.onoffswitch}>
    			<input type={this.checkbox} name={this.onoffswitch} class={this.onoffswitchCheckbox} id={this.myonoffswitch} checked />
    			<label class={this.onoffswitchLabel} for={this.myonoffswitch}>
			        <span class={this.onoffswitchInner}></span>
			        <span class={this.onoffswitchSwitch}></span>
			    </label>
			</div>
		);
	}

}


