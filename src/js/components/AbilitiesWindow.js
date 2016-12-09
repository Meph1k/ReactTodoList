import React, { Component } from 'react';
import AbilitiesHeader from './AbilitiesHeader';
import AbilitiesMiddleWindow from './AbilitiesMiddleWindow';
import AbilitiesBottomPanel from './AbilitiesBottomPanel';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        abilities: store.nextStep.abilities
    };
})
export default class AbilitiesWindow extends Component {

    render() {
        return (
            <div class="col-sm-6">
                <AbilitiesHeader />
                <AbilitiesMiddleWindow />
                <AbilitiesBottomPanel />
            </div>
        );
    }
}
