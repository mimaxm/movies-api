import React from 'react';
import { DataLoader } from './Loader';
import { shallow } from 'enzyme';

describe('DataLoader testing', () => {
   const component = shallow(<DataLoader />);
   test('DataLoader shoud have Loader', () => {
      expect(component.find('Loader')).toHaveLength(1)
   });
   test('DataLoader shoud render without errors', () => {
      expect(component).toMatchSnapshot();
   })
})