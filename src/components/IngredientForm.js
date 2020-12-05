import React from 'react'


const IngredientForm = (newIngredient) => {

    const handleSubmit = event => {
        event.preventDefault()
        newIngredient ({
            name: event.target[0].value,
            color: event.target[1].value,
        })
    }

    return(
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="ingredient"/>
          <input name="color" placeholder="color"/>
          <button onSubmit={handleSubmit}>Add Ingredient</button>
          
        </form>
    )
}


export default IngredientForm