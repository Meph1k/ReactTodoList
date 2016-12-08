import React, { Component } from 'react';
import { saveClass } from '../actions/nextStepCharAction';

require("../../styles/attributes.scss");

export default class ClassChoiceButton extends Component {
    saveClass() {
        return this.props.dispatch(saveClass(this.props.classOfACharacter));
    }

    render() {
        return (
            <button class="attribute-choice-button" onClick={this.saveClass.bind(this)}>
                <span class="attribute-choice-button__text">{this.props.classOfACharacter}</span>
            </button>
        );
    }
}
