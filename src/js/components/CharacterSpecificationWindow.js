import React, { Component } from 'react';
import GenderChoice from './GenderChoice';
import RaceChoiceWindow from './RaceChoiceWindow';
import ClassChoiceWindow from './ClassChoiceWindow';
import AlignmentChoiceWindow from './AlignmentChoiceWindow';
import AbilitiesWindow from './AbilitiesWindow';
import { connect } from "react-redux"

@connect((store) => {
    return {
        lastStep: store.nextStep.lastStep
    };
})
export default class CharacterSpecificationWindow extends Component {
    componentWillMount() {
        this.lastStep = this.lastStep || 0;
    }

    getProperWindow() {
        let tempStep = this.props.lastStep - 1;
        if (0 === tempStep) {
            return (<GenderChoice />);
        } else if (1 === tempStep) {
            return (<RaceChoiceWindow />);
        } else if (2 === tempStep) {
            return (<ClassChoiceWindow />);
        } else if (3 === tempStep) {
            return (<AlignmentChoiceWindow />);
        } else if (4 === tempStep) {
            return (<AbilitiesWindow />);
        }
    }

    render() {
        return (
            <div class="container additional-margin-top--less">
                <div class="row">
                    {this.getProperWindow()}
                </div>
            </div>
        );
    }
}
