import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGif()', () => {
    
    test('Debe retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('Marios Bros');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
        expect(gifs.includes('https'))
    });
});
