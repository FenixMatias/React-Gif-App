import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Prueba en <AddCategory />', () => {
  
    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'MARIO BROS'}});
        expect(input.value).toBe('MARIO BROS');
        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'MARIOS BROS';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        //Que el value sea igual
        expect(input.value).toBe('');
        //Que la función que sea llamada
        expect(onNewCategory).toHaveBeenCalled();
        //Que la función que sea llamada una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //Que la función venga con el valor de la caja de texto
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input está vació', () => {
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        //Que la función no sea llamada
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});
