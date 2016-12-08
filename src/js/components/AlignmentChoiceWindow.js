import React, { Component } from 'react';
import {alignmentChoiceTitles} from '../constants/AttributeChoiceTitles';
import AlignmentChoiceButton from './AlignmentChoiceButton';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

export default class AlignmentChoiceWindow extends Component {
    createAttrsWindow() {
        return alignmentChoiceTitles.map((i, index) => <div key={index}><AlignmentChoiceButton alignment={i} /></div>)
    }

    render() {
        return (
            <div class="col-sm-6"><div class="all-attrs-window">{this.createAttrsWindow()}</div></div>
        );
    }
}
