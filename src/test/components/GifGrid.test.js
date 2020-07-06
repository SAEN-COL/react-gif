import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Validación componente <GrifGrid />', () => {
  const category = 'love';
  
  test('Debería renderizar correctamente el componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });    
    const wrapper  = shallow(<GifGrid category={ category } />);
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imágenes useFetchGifs (hook)', () => {    
    const gifs = [{
      id: 'ABC',
      url: 'https://example.com/img.jpg',
      title: 'Title image'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper  = shallow(<GifGrid category={ category } />);
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe( false );
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    
  });
  
  
});
