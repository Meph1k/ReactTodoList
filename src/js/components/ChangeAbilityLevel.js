import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveAbilitiesPoints, saveAbilities } from '../actions/nextStepCharAction';

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        abilities: store.nextStep.abilities,
        abilitiesPoints: store.nextStep.abilitiesPoints
    };
})
export default class ChangeAbilityLevel extends Component {
    saveAbilities(abilities) {
        return this.props.dispatch(saveAbilities(abilities));
    }

    changeAbilityLevel() {
        if ('+' === this.props.sign && this.props.abilitiesPoints > 0) {
            this.props.abilities[this.props.abilityName.toLowerCase()]++;
            this.props.dispatch(saveAbilities(this.props.abilities));
            return this.props.dispatch(saveAbilitiesPoints(this.props.abilitiesPoints - 1));
        }
        if ('-' === this.props.sign) {
            this.props.abilities[this.props.abilityName.toLowerCase()]--;
            this.props.dispatch(saveAbilities(this.props.abilities));
            return this.props.dispatch(saveAbilitiesPoints(this.props.abilitiesPoints + 1));
        }
    }

    render() {
        return (
            <div>
                <div class="change-ability-level" onClick={this.changeAbilityLevel.bind(this)}>{this.props.sign}</div>
            </div>
        );
    }
}
