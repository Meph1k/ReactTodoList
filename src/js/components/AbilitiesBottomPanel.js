import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveAbilities } from '../actions/nextStepCharAction'

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        abilities: store.nextStep.abilities
    };
})
export default class AbilitiesBottomPanel extends Component {
    saveAbilities() {
        return this.props.dispatch(saveAbilities(this.props.abilities));
    }
    
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    reRollAbilities() {
        for(var key in this.props.abilities) {
            if(this.props.abilities.hasOwnProperty(key)) {
                this.props.abilities[key] = this.getRandomInt(9, 19);
            }
        }
        this.saveAbilities();
    }

    render() {
        return (
            <div>
                <button onClick={this.reRollAbilities.bind(this)}>REROLL</button>
            </div>
        );
    }
}
