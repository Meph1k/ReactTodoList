import React from 'react';

require("../../styles/equipment.scss");

export default class Item extends React.Component {
    render() {
        return (
            <div class={this.props.className}>ItemPlaceholder</div>
        );
    }
}

