import React from 'react'


const Ingredient = (props) => {

    return(
        <div>
            <ul>
                {props.items.map((newItem, index) => (
                    <li key={index}>
                        {newItem.name}
                        <button onClick= {(event)=>
                        {
                            props.addItem(event, newItem)
                        }}>Add</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Ingredient