import React, { Component } from 'react';
import AbilitiesField from './AbilitiesField';
import {abilitiesChoiceTitles} from '../constants/AttributeChoiceTitles';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        abilities: store.nextStep.abilities
    };
})
export default class AbilitiesMiddleWindow extends Component {
    createAttrsWindow() {
        return abilitiesChoiceTitles.map((i, index) => <div key={i}><AbilitiesField abilityName={i} /></div>)
    }

    render() {
        return (
            <div class="all-attrs-window">{this.createAttrsWindow()}</div>
        );
    }
}
