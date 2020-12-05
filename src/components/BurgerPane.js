import React from "react";
import BurgerStack from './BurgerStack'

const BurgerPane = (props) => {
    return (
        <div style={{float:"right", width:"300px", height:"400px", }}>
            <BurgerStack addIngredients ={props.addIngredients} clearList={props.clearList}/>
           
        </div>
         
    )
}

export default BurgerPane