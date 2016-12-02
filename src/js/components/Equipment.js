import React, { Component } from 'react';
import EquipmentUpperPart from './EquipmentUpperPart';
import EquipmentLowerPart from './EquipmentLowerPart';

export default class Equipment extends Component {

    render() {
        return (
            <div class="equipment-layout">
                <EquipmentUpperPart />
                <EquipmentLowerPart />
            </div>
        );
    }
}
