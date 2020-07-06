import { getGifs } from '../../../helpers/getGifs';

describe('Pruebas con helper getGifs Fetch', () => {

  test('Debe traer 10 elementos', async() => {
    const gifs = await getGifs('gato');
    expect( gifs.length ).toBe( 10 );
  });

  test('Debe traer 0 elementos', async() => {
    const gifs = await getGifs('');
    expect( gifs.length ).toBe( 0 );
  });
  
  
})
