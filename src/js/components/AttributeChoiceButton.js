import React, { Component } from 'react';
import { saveLastStep } from '../actions/nextStepCharAction';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        lastStep: store.nextStep.lastStep
    };
})
export default class AttributeChoiceButton extends Component {

    saveLastStep() {
        return this.props.dispatch(saveLastStep(this.props.step + 1));
    }

    render() {
        if (this.props.lastStep !== this.props.step) {
            return (
                <button class="attribute-choice-button" disabled>
                    <span class="attribute-choice-button__text">{this.props.buttonTitle}</span>
                </button>
            );
        }
        return (
            <button class="attribute-choice-button" onClick={this.saveLastStep.bind(this)}>
                <span class="attribute-choice-button__text">{this.props.buttonTitle}</span>
            </button>
        );
    }
}
