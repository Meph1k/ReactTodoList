import React, { Component } from 'react';
import {classChoiceTitles} from '../constants/AttributeChoiceTitles';
import ClassChoiceButton from './ClassChoiceButton';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

export default class ClassChoiceWindow extends Component {
    createAttrsWindow() {
        return classChoiceTitles.map((i, index) => <div key={index}><ClassChoiceButton classOfACharacter={i} /></div>)
    }

    render() {
        return (
            <div class="col-sm-6"><div class="all-attrs-window">{this.createAttrsWindow()}</div></div>
        );
    }
}
