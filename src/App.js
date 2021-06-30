import React from 'react';
import RecipeList from './RecipeList'


function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: '3',
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken"
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: '5',
    cookTime: '0:45',
    instructions: "1. Put Paprika on Pork\n2. Put Pork in oven\n3. Eat Pork"
  }
]

export default App;
