import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp.js';

describe('Se crea correctamente el componente <GifExpertApp />', () => {
  test('Debería generar correctamente el componente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect( wrapper ).toMatchSnapshot();
  });

  
});
