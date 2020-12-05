import React, { useState } from "react";
// Components imports
import BurgerPane from "./components/BurgerPane";
import IngredientsList from "./components/IngredientsList";
import IngredientForm from "./components/IngredientForm";

// CSS imports
import "./css/App.css";

const App = () => {
// state to render the list when the page loads
  const [items, setItems] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ])
 
  const [addIngredients, setaddIngredients] = useState([])

  // Function to add a item to the burgerStack
  const addItem = (event, items) => {
    event.preventDefault()
    setaddIngredients([items, ...addIngredients])
  }

  // Function to create a new Ingredient
  const newIngredient = (newItem) => {
    setItems([newItem, ...items])
  }

  // Function to clear the BurgerStack List
  const clearList = () =>{
    setaddIngredients([])

  }

  return (
    <div>
      <h1> 𝐵𝓊𝓇𝑔𝑒𝓇 𝐼𝓃𝑔𝓇𝑒𝒹𝒾𝑒𝓃𝓉𝓈</h1>
      <div>
        {/* renders the IngredientsList */}
        <IngredientsList addItem={addItem} items={items}/>
      </div>
      <div>
        <BurgerPane addIngredients={addIngredients} clearList={clearList}/>
        <IngredientForm newIngredient={newIngredient}/>
      </div>
    </div>
  );
};

export default App;
