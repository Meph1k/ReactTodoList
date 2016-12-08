import React, { Component } from 'react';
import AttributeChoiceButton from './AttributeChoiceButton';
import {attributeChoiceTitles} from '../constants/AttributeChoiceTitles';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        lastStep: store.nextStep,
        gender: store.gender
    };
})
export default class AllAttributesWindow extends Component {
    createAttrsWindow() {
        return attributeChoiceTitles.map((i, index) => <div key={index}><AttributeChoiceButton step={index} buttonTitle={i} /></div>)
    }

    render() {
        return (
            <div class="col-sm-6"><div class="all-attrs-window">{this.createAttrsWindow()}</div></div>
        );
    }
}
