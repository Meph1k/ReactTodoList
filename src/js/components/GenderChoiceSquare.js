import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveGender } from '../actions/nextStepCharAction';

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
        lastStep: store.nextStep
    };
})
export default class GenderChoiceSquare extends Component {
    getProperSymbol() {
        if ('female' === this.props.sex) {
            return '♀';
        }
        return '♂';
    }
    
    chooseSex() {
        return this.props.dispatch(saveGender(this.props.sex));
    }

    render() {
        return (
            <div class="col-sm-5 col-sm-offset-1 gender-choice-square"
                 onClick={this.chooseSex.bind(this)}>{this.getProperSymbol()}</div>
        );
    }
}
