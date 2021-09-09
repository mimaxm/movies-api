import React from 'react';
import { About } from './About';
import { shallow } from 'enzyme';

describe('About page testing', () => {
   const component = shallow(<About />);
   test('component should render', () => {
      expect(component).toMatchSnapshot();
   });
   test('component should include 3 "p"', () => {
      expect(component.find('p')).toHaveLength(3);
   });
})