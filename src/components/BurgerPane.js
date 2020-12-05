import React from "react";
import BurgerStack from './BurgerStack'

const BurgerPane = (props) => {
    return (
        <div style={{ border: '3px solid blue', float:"right", width:"300px", height:"200px", }}>
            <BurgerStack addIngredients ={props.addIngredients} clearList={props.clearList}/>
           
        </div>
         
    )
}

export default BurgerPane