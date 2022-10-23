import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    const newCategory = 'POKEMON';
  
    test('Debe agregar una nueva categoria', () => {

        const { container } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        expect(newCategory).toBe('POKEMON');
        expect(container.getElementsByClassName('card-grid').length ).toBe(2);
    });

    test('No debe agregar una nueva categoria si esta ya existe', () => {
      
        const { container } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        expect(container.getElementsByClassName('card-grid').length ).toBe(2);
    });
});
