import React, { Component } from 'react';
import { saveAlignment } from '../actions/nextStepCharAction';

require("../../styles/attributes.scss");

export default class AlignmentChoiceButton extends Component {
    saveAlignment() {
        return this.props.dispatch(saveAlignment(this.props.alignment));
    }

    render() {
        return (
            <button class="attribute-choice-button" onClick={this.saveAlignment.bind(this)}>
                <span class="attribute-choice-button__text">{this.props.alignment}</span>
            </button>
        );
    }
}
