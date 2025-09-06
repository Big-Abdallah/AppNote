

// import { useEffect, useState } from "react";
// import Navbar from "../Component/Navbar";
// import {
//   getAllNotes,
//   createNote,
//   updateNote,
//   deleteNote,
// } from "../services/NotsServices";
// // import { jwtDecode } from "jwt-decode";
// import jwtDecode from "jwt-decode";
// import {
//   Button,
//   Input,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from "@heroui/react";
// import { useContext } from "react";
// import { CounterContext } from "../Contexts/NotesContext";
// export default function FeedPage() {
//   const { setNoteCount } = useContext(CounterContext);
//   const [notes, setNotes] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [editNoteId, setEditNoteId] = useState(null);

//   const token = localStorage.getItem("token");
//   let currentUserId = null;

//   if (token) {
//     const decoded = jwtDecode(token);
//     currentUserId = decoded.id;
//   }

// useEffect(() => {
//   async function fetchNotes() {
//     if (!token) return;
//     try {
//       const data = await getAllNotes(token);
//       const userNotes = data.notes.filter(
//         (note) => note.createdBy === currentUserId
//       );
//       setNotes(userNotes);
//       setNoteCount(userNotes.length); // 🔥 تحديث الـ context
//     } catch {""}
//   }
//   fetchNotes();
// }, [token]);

//   // فتح المودال للتعديل
//   const openEditModal = (note) => {
//     setEditNoteId(note._id);
//     setTitle(note.title);
//     setContent(note.content);
//     setIsOpen(true);
//   };

//   // إضافة نوتة جديدة
//   const handleAddNote = async () => {
//     if (!title || !content) return alert("Please enter title and content");
//     try {
//       const data = await createNote({ title, content }, token);
//       if (data.note.createdBy === currentUserId) {
//         setNotes((prev) => [data.note, ...prev]);
//       }
//       setIsOpen(false);
//       setTitle("");
//       setContent("");
//     } catch {
//       alert("Failed to save note. Check console.");
//     }
//   };

//   // تعديل النوتة
//   const handleEditNote = async () => {
//     if (!title || !content) return alert("Please enter title and content");
//     try {
//       const data = await updateNote(editNoteId, { title, content }, token);
//       setNotes((prev) =>
//         prev.map((note) => (note._id === editNoteId ? data.note : note))
//       );
//       setIsOpen(false);
//       setTitle("");
//       setContent("");
//       setEditNoteId(null);
//     } catch {
//       alert("Failed to update note. Check console.");
//     }
//   };

//   // مسح النوتة
//   const handleDeleteNote = async (id) => {
//     if (!confirm("Are you sure you want to delete this note?")) return;
//     try {
//       await deleteNote(id, token);
//       setNotes((prev) => prev.filter((note) => note._id !== id));
//     } catch {
//       alert("Failed to delete note. Check console.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="p-6">
//         <h1 className="py-2 px-4 text-3xl font-bold border-4 border-[var(--brand-border)] text-center rounded-2xl shadow-md">
//           My<span className="text-green-400"> Notes</span>
//         </h1>

//         <div className="p-6 mt-2 border-4 border-[var(--brand-border)] rounded-2xl shadow-md">
//           {/* زرار الإضافة */}
//           <div className="flex justify-center pt-4">
//             <Button
//               className="bg-[var(--brand-yellow)] text-black font-semibold"
//               onPress={() => {
//                 setIsOpen(true);
//                 setEditNoteId(null); // فتح مودال جديد => إضافة نوتة جديدة
//                 setTitle("");
//                 setContent("");
//               }}
//             >
//               + Add Note
//             </Button>
//           </div>

//           {/* المودال */}
//           <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
//             <ModalContent>
//               <ModalHeader className="text-xl font-bold">
//                 {editNoteId ? "Edit Note" : "Add New Note"}
//               </ModalHeader>
//               <ModalBody>
//                 <Input
//                   label="Title"
//                   placeholder="Enter note title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <Input
//                   label="Content"
//                   placeholder="Enter note content"
//                   value={content}
//                   onChange={(e) => setContent(e.target.value)}
//                 />
//               </ModalBody>
//               <ModalFooter>
//                 <Button variant="light" onPress={() => setIsOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button
//                   className="bg-[var(--brand-yellow)] text-black font-semibold"
//                   onPress={editNoteId ? handleEditNote : handleAddNote}
//                 >
//                   {editNoteId ? "Update" : "Save"}
//                 </Button>
//               </ModalFooter>
//             </ModalContent>
//           </Modal>

//           {/* عرض النوتس */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-3 py-6">
//             {notes.length > 0 ? (
//               notes.map((note) => (
//                 <div
//                   key={note._id}
//                   className="flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 break-words"
//                 >
//                   <div>
//                     <h5 className="mb-3 text-2xl font-bold text-gray-900 break-words">
//                       {note.title}
//                     </h5>
//                     <p className="mb-4 text-gray-700 whitespace-pre-wrap break-words">
//                       {note.content}
//                     </p>
//                   </div>

//                   {/* أزرار التعديل والمسح */}
//                   <div className="flex justify-end gap-2 mt-2">
//                     <Button
//                       className="bg-green-400 hover:bg-green-500 text-white rounded-lg px-3 py-1 text-sm transition-colors"
//                       onPress={() => openEditModal(note)}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       color="danger"
//                       className="  text-white rounded-lg px-3 py-1 text-sm transition-colors"
//                       onPress={() => handleDeleteNote(note._id)}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-600 w-full">
//                 No notes found. Start by adding one!
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useEffect, useState, useContext } from "react";
import Navbar from "../Component/Navbar";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../services/NotsServices";
import jwtDecode from "jwt-decode";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { NotesContext } from "../Contexts/NotesContext.jsx";

export default function FeedPage() {
  const { noteCount, setNoteCount } = useContext(NotesContext);
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editNoteId, setEditNoteId] = useState(null);

  const token = localStorage.getItem("token");
  let currentUserId = null;

  if (token) {
    const decoded = jwtDecode(token);
    currentUserId = decoded.id;
  }

  useEffect(() => {
    async function fetchNotes() {
      if (!token) return;
      try {
        const data = await getAllNotes(token);
        const userNotes = data.notes.filter(
          (note) => note.createdBy === currentUserId
        );
        setNotes(userNotes);
        setNoteCount(userNotes.length); // 🔥 تحديث العدد
      } catch (error) {
        console.error(error);
      }
    }
    fetchNotes();
  }, [token, currentUserId]);

  const openEditModal = (note) => {
    setEditNoteId(note._id);
    setTitle(note.title);
    setContent(note.content);
    setIsOpen(true);
  };

  const handleAddNote = async () => {
    if (!title || !content) return alert("Please enter title and content");
    try {
      const data = await createNote({ title, content }, token);
      if (data.note.createdBy === currentUserId) {
        setNotes((prev) => [data.note, ...prev]);
        setNoteCount((prev) => prev + 1); // 🔥 زيادة العدد
      }
      setIsOpen(false);
      setTitle("");
      setContent("");
    } catch {
      alert("Failed to save note. Check console.");
    }
  };

  const handleEditNote = async () => {
    if (!title || !content) return alert("Please enter title and content");
    try {
      const data = await updateNote(editNoteId, { title, content }, token);
      setNotes((prev) =>
        prev.map((note) => (note._id === editNoteId ? data.note : note))
      );
      setIsOpen(false);
      setTitle("");
      setContent("");
      setEditNoteId(null);
    } catch {
      alert("Failed to update note. Check console.");
    }
  };

  const handleDeleteNote = async (id) => {
    if (!confirm("Are you sure you want to delete this note?")) return;
    try {
      await deleteNote(id, token);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      setNoteCount((prev) => prev - 1); // 🔥 تقليل العدد
    } catch {
      alert("Failed to delete note. Check console.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="py-2 px-4 text-3xl font-bold border-4 border-[var(--brand-border)] text-center rounded-2xl shadow-md">
          My<span className="text-green-400"> Notes</span>
        </h1>

        <div className="p-6 mt-2 border-4 border-[var(--brand-border)] rounded-2xl shadow-md">
          {/* Add Button */}
          <div className="flex justify-center pt-4">
            <Button
              className="bg-[var(--brand-yellow)] text-black font-semibold"
              onPress={() => {
                setIsOpen(true);
                setEditNoteId(null);
                setTitle("");
                setContent("");
              }}
            >
              + Add Note
            </Button>
          </div>

          {/* Modal */}
          <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalContent>
              <ModalHeader className="text-xl font-bold">
                {editNoteId ? "Edit Note" : "Add New Note"}
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Title"
                  placeholder="Enter note title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  label="Content"
                  placeholder="Enter note content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-[var(--brand-yellow)] text-black font-semibold"
                  onPress={editNoteId ? handleEditNote : handleAddNote}
                >
                  {editNoteId ? "Update" : "Save"}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-3 py-6">
            {notes.length > 0 ? (
              notes.map((note) => (
                <div
                  key={note._id}
                  className="flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow break-words"
                >
                  <div>
                    <h5 className="mb-3 text-2xl font-bold text-gray-900 break-words">
                      {note.title}
                    </h5>
                    <p className="mb-4 text-gray-700 whitespace-pre-wrap break-words">
                      {note.content}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-2 mt-2">
                    <Button
                      className="bg-green-400 hover:bg-green-500 text-white rounded-lg px-3 py-1 text-sm transition-colors"
                      onPress={() => openEditModal(note)}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      className="text-white rounded-lg px-3 py-1 text-sm transition-colors"
                      onPress={() => handleDeleteNote(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 w-full">
                No notes found. Start by adding one!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
