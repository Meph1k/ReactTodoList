import React, { Component } from 'react';
import { saveRace } from '../actions/nextStepCharAction';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
        lastStep: store.nextStep.lastStep
    };
})
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
