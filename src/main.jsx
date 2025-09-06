// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { HeroUIProvider } from "@heroui/react";
// import CounterContextProvider from "./Contexts/CounterContext.jsx"
// import AuthContextProvider from "./Contexts/AuthContext.jsx"
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <HeroUIProvider>
//       <CounterContextProvider>
//         <AuthContextProvider>
//           <App />
//         </AuthContextProvider>
//       </CounterContextProvider>
//     </HeroUIProvider>
//   </StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import NotesContextProvider from "./Contexts/NotesContext.jsx";
import AuthContextProvider from "./Contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <AuthContextProvider>
        <NotesContextProvider>
          <App />
        </NotesContextProvider>
      </AuthContextProvider>
    </HeroUIProvider>
  </StrictMode>
);

