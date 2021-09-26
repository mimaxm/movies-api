import React from 'react';
import { About } from './About';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

describe('About page testing', () => {
   const component = shallow(<About />);
   test('component should render', () => {
      expect(toJson(component)).toMatchSnapshot();
   });
   test('component should include 3 "p"', () => {
      expect(toJson(component.find('p'))).toHaveLength(3);
   });
})