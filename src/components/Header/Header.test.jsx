import React from 'react';
import { Header } from './Header';
import { render } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

test('component should render', () => {
   const component = render(
      <BrowserRouter>
         <Header />
      </BrowserRouter>
   );
   expect(component).toMatchSnapshot();
});
