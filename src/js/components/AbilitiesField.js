import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveAbilities } from '../actions/nextStepCharAction';
import ChangeAbilityLevel from './ChangeAbilityLevel';

require("../../styles/attributes.scss");

class AbilitiesField extends Component {
    constructor(props) {
        super(props);
    }

    saveAbilities(abilities) {
        return this.props.dispatch(saveAbilities(abilities));
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentWillMount() {
        this.props.abilities[this.props.abilityName.toLowerCase()] = this.getRandomInt(9, 19);
        this.saveAbilities(this.props.abilities);
    }

    getAbilityValue() {
        return this.props.abilities[this.props.abilityName.toLowerCase()];
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-7">
                        {this.props.abilityName}
                    </div>
                    <div class="col-sm-3">
                        {this.getAbilityValue()}
                    </div>
                    <div class="col-sm-1">
                        <ChangeAbilityLevel abilityName={this.props.abilityName} sign="+" />
                    </div>
                    <div class="col-sm-1">
                        <ChangeAbilityLevel abilityName={this.props.abilityName} sign="-" />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store, ownProps) => {
    
    return {
        abilities: {...store.nextStep.abilities}
    }
};

export default connect(mapStateToProps)(AbilitiesField)