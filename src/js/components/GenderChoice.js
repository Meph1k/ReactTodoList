import React, { Component } from 'react';
import { connect } from "react-redux"
import GenderChoiceSquare from './GenderChoiceSquare';

require("../../styles/attributes.scss");

export default class GenderChoice extends Component {

    render() {
        return (
            <div class="col-sm-6 gender-choice-container">
                <div class="row">
                    <GenderChoiceSquare sex="male" />
                    <GenderChoiceSquare sex="female"/>
                </div>
            </div>
        );
    }
}
