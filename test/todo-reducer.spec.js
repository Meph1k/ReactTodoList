import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import reducer from '../src/js/reducers/todoReducer';

describe('Reducer testing', () => {
    const initialState = {todoItems: [{id: 0, description: 'sample'}], idCount: 1};

    it('should add an item to the list', () => {
        const action = {
            type: "ADD_ITEM",
            payload: {description: 'other sample'}
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.deep.equal({todoItems: [{id: 0, description: 'sample'}, {id: 1, description: 'other sample'}], idCount: 2});
    });
    it('should remove an item from the list', () => {
        const action = {
            type: "REMOVE_ITEM",
            payload: 0
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.deep.equal({todoItems: [], idCount: 1});
    });
});
