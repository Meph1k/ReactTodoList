import React from "react";
import ItemField from "./ItemField";

export default class EquipmentUpperPart extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="row additional-margin-top--less">
                    <div class="col-sm-offset-1 col-sm-2">
                        <ItemField class="additional-margin-top weapon"/>
                    </div>
                    <div class="col-sm-offset-1 col-sm-2">
                        <ItemField class="helmet-field"/>
                    </div>
                    <div class="col-sm-offset-1 col-sm-2">
                        <ItemField class="additional-margin-top shield-field"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-offset-4 col-sm-2">
                        <ItemField class="armor-field"/>
                    </div>
                </div>
            </div>
        );
    }
}
