import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';

// https://react-hooks-testing-library.com/
// custom hooks
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debería retornar el e3stado inicial', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Chanfle') );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    
    expect( data ).toEqual([]);
    expect( loading ).toBe(true);    
  });

  test('Debería retornar un arreglo de imgs y el loading en false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Chanfle'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toBe( 10 );
    expect( loading ).toBe( false );  
  });
  
  

});
