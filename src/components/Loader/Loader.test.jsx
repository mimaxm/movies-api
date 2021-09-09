import React from 'react';
import { DataLoader } from './Loader';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

describe('DataLoader testing', () => {
   const component = shallow(<DataLoader />);
   test('shoud have Loader', () => {
      expect(component.find('Loader')).toHaveLength(1)
   });
   test('shoud render without errors', () => {
      expect(toJson(component)).toMatchSnapshot();
   })
})