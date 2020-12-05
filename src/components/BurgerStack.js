import React from 'react'


const BurgerStack = (props) => {
    return (
        <div>
           <ul>
               {props.addIngredients.map((item, index) =>
               {
                   console.log(item)
                    return (
                        <li key={index} style={{ backgroundColor: `${item.color}`}}>
                            {item.name}
                        </li>
                        
                    )
               })}     
           </ul>
           <button>Clear</button>
        </div>
        
    )
}

export default BurgerStack