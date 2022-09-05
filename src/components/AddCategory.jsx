import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim() ;
        if(newInputValue.length<=1) return;
        // setCategories( categories => [ inputValue , ...categories]);
        onNewCategory( newInputValue );
        setInputValue("");
    }


    return (
        <form onSubmit = { onSubmit } >
            <input 
            // props
                type = "text" 
                placeholder='Buscar GIFs'   
                value = { inputValue } 
                // no hace falta poner event
                onChange = { (event) => onInputChange(event) }
            />
        </form>
    )
}
