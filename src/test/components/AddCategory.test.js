import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en el componente <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);

  });

  test('Debe de mostrarse correctamente el componente', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('Debería cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';

    input.simulate('change', { target: {value: value} });
    expect( wrapper.find('p').text().trim() ).toBe( value );
  });

  test('No debe postear la información onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    
    expect( setCategories ).not.toHaveBeenCalled();
  });
  
  test('Debe llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Hola mundo';

    // 1. Simular el inputChange
    wrapper.find('input').simulate('change', { target: { value: value } });
    

    // 2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    // 3. setCategories se debe haber llamado
    expect( setCategories ).toHaveBeenCalled(); // Que se haya llamado al menos una vez
    expect( setCategories ).toHaveBeenCalledTimes( 1 ); // La misma que el anterior, que se haya llamado al menos una sola vez
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); // Se espera que se llame con... en este caso una función.

    // 4. El valor del input debe estar ''
    expect( wrapper.find('input').prop('value') ).toBe('');
  });
  
});
