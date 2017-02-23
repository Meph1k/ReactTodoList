import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import store from "../src/js/store";

import TodoBlock from '../src/js/components/TodoBlock';

describe('<TodoBlock/>', () => {
    const element = {
        id: 1,
        description: 'sample description'
    };
    
    it('should have a button to add a new todo item', () => {
        const wrapper = mount(<TodoBlock store={store} element={element}/>);
        expect(wrapper.find('button')).to.have.length(1);
    });
    it('should remove an item after clicking the button', () => {
        const wrapper = mount(<TodoBlock store={store} element={element}/>);
        wrapper.find('button').simulate('click');
        expect(store.getState().todo.todoItems).to.have.length(3);
    });
});
