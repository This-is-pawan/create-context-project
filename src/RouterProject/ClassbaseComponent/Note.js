
import React, { createContext } from "react";


const Note = createContext();


const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const NoteProvider = ({children}) => {
  const value =url
 
  return <Note.Provider value={value}>{children}</Note.Provider>;
};

export { Note, NoteProvider };
