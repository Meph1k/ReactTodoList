import React from "react";
import EquipmentSquare from "./EquipmentSquare";

export default class EquipmentLowerPart extends React.Component {

    createEqLowerPart() {
        let numberArray = [];
        for (let i = 0; i < 120; i++) {numberArray.push(i);}
        return numberArray.map((i) => <div class="col-sm-1 custom-width" key={i}><EquipmentSquare /></div>)
    }
    
    render() {
        return (
            <div class="container">
                <div class="row eq-lower-part-container">
                    {this.createEqLowerPart()}
                </div>
            </div>
        );
    }
}
