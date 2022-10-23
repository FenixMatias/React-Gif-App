import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log('Hola desde onSubmit')
        event.preventDefault();
        const newValue = inputValue.trim().toUpperCase();
        if (newValue.length <= 1) return;

        // setCategories(cat => [inputValue, ...cat]);
        setInputValue('');
        onNewCategory(newValue);
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}