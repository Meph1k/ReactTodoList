import React, { Component } from 'react';
import RaceChoiceButton from './RaceChoiceButton';
import {raceChoiceTitles} from '../constants/AttributeChoiceTitles';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        lastStep: store.nextStep,
        gender: store.gender
    };
})
export default class RaceChoiceWindow extends Component {
    createAttrsWindow() {
        return raceChoiceTitles.map((i, index) => <div key={index}><RaceChoiceButton race={i} /></div>)
    }

    render() {
        return (
            <div class="col-sm-6"><div class="all-attrs-window">{this.createAttrsWindow()}</div></div>
        );
    }
}
