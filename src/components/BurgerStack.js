import React from 'react'


const BurgerStack = (props) => {
    return (
        <div> 
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

            </div>
           <h2 style={{ border: '3px solid black'}}>Burger Stacking Area</h2>
           <button onClick= {(event)=>{{props.clearList(event)}}}>Clear</button>
           
        </div>
        
    )
}

export default BurgerStack