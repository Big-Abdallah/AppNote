import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { NotesContext } from "../Contexts/NotesContext.jsx";
import imgNote from "../assets/Logo.png";

export default function Navbar() {
  const { noteCount } = useContext(NotesContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <nav className="bg-green-400 max-w-full my-navbar">
      <div className="flex flex-row items-center px-3 container-80 h-14">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 px-0">
          <img
            className="w-9 h-9 bg-white rounded-3xl"
            src={imgNote}
            alt="logo"
          />
          <h1 className="font-bold text-inherit">NoteApp</h1>
        </div>
        <div className="flex-1" /> {/* Spacer */}
        {isLoggedIn && (
          <Button onPress={logout} color="danger">
            Sign Out
          </Button>
        )}
        <h2 className="ml-4 font-semibold text-black">Notes: {noteCount}</h2>
      </div>
      
    </nav>
  );
}
