import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Super Smash Bros'.toUpperCase()]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // categories.push(newCategory); Evitar usarlo por las mutaciones
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [newCategory, ...cat]); Otra forma de insertar
    }

    return (

        <>
            {/* Titulo */}
            <h1>GifExpertApp FenixMatias</h1>
            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {/* Listado de Gif */}
            {categories.map((cat) => 
                (
                    <GifGrid 
                        key={cat}
                        category={cat}
                    />
                )
            )}
            {/* Gif Item */}
        </>
    )
}