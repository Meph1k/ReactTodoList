import React, { Component } from 'react';
import { saveRace } from '../actions/nextStepCharAction';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

export default class RaceChoiceButton extends Component {
    saveRace() {
        return this.props.dispatch(saveRace(this.props.race));
    }

    render() {
        return (
            <button class="attribute-choice-button" onClick={this.saveRace.bind(this)}>
                <span class="attribute-choice-button__text">{this.props.race}</span>
            </button>
        );
    }
}
