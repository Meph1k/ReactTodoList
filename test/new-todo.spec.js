import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import store from "../src/js/store";

import NewTodo from '../src/js/components/NewTodo';

describe('<NewTodo/>', () => {
    it('should have a button to add a new todo item', () => {
        const wrapper = mount(<NewTodo store={store} />);
        expect(wrapper.find('button')).to.have.length(1);
    });
    it('should add an item after clicking the button', () => {
        const wrapper = mount(<NewTodo store={store} />);
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(store.getState().todo.todoItems).to.have.length(4);
    });
});
