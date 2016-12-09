import React, { Component } from 'react';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        abilitiesPoints: store.abilitiesPoints
    };
})
export default class AbilitiesHeader extends Component {

    render() {
        return (
            <div class="abilities-header"></div>
        );
    }
}
