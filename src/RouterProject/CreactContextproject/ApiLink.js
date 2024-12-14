import React from 'react'
import { createContext } from 'react'
const Api ="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
// console.log(Api);
const Context =createContext()

const ApiLink = (props) => {
 const value =Api
  return <Context.Provider value={value} >{props.children}</Context.Provider>
   
}

export {ApiLink,Context} 