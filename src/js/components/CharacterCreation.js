import React, { Component } from 'react';
import AllAttributesWindow from './AllAttributesWindow';
import CharacterSpecificationWindow from './CharacterSpecificationWindow';

export default class CharacterCreation extends Component {

    render() {
        return (
            <div class="container additional-margin-top--less">
                <div class="row">
                    <AllAttributesWindow />
                    <CharacterSpecificationWindow />
                </div>
            </div>
        );
    }
}
