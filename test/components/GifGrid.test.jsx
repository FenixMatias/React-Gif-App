import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'MARIOS BROS';
    
    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({

            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se carga las imágenes useFetchGifs', () => {

        const gifs = [
            {
            id: '12345',
            title: 'Pokemon',
            url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes'
            },
            {
                id: '123890',
                title: 'F-zero',
                url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects'
            }
        ]

        useFetchGifs.mockReturnValue({

            images: gifs,
            isLoading: true
        });
        
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
