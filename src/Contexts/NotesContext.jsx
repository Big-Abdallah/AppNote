import React, { createContext, useState } from "react";

export const NotesContext = createContext();

export default function NotesContextProvider({ children }) {
  const [noteCount, setNoteCount] = useState(0);

  return (
    <NotesContext.Provider value={{ noteCount, setNoteCount }}>
      {children}
    </NotesContext.Provider>
  );
}
