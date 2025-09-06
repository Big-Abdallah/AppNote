import axios from "axios";

const API_URL = "https://note-sigma-black.vercel.app/api/v1/notes";

// Get All Notes (all users)
export const getAllNotes = async (token) => {
  try {
    const tokenWithPrefix = `3b8ny__${token}`;

    const res = await axios.get(`${API_URL}/allNotes`, {
      headers: {
        token: tokenWithPrefix,
      },
    });

    // هنا نرجع كل النوتس زي ما هي
    return { notes: res.data.notes };
  } catch (err) {
    console.error(
      "❌ Error in getAllNotes:",
      err.response?.data || err.message
    );
    throw err;
  }
};

// Create Note
export const createNote = async (note, token) => {
  try {
    const tokenWithPrefix = `3b8ny__${token}`;

    const res = await axios.post(API_URL, note, {
      headers: {
        token: tokenWithPrefix,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (err) {
    console.error("❌ Error in createNote:", err.response?.data || err);
    throw err;
  }
};
// Update Note
export const updateNote = async (id, note, token) => {
  try {
    const tokenWithPrefix = `3b8ny__${token}`;
    const res = await axios.put(`${API_URL}/${id}`, note, {
      headers: {
        token: tokenWithPrefix,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    console.error("❌ Error in updateNote:", err.response?.data || err);
    throw err;
  }
};

// Delete Note
export const deleteNote = async (id, token) => {
  try {
    const tokenWithPrefix = `3b8ny__${token}`;
    const res = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        token: tokenWithPrefix,
      },
    });
    return res.data;
  } catch (err) {
    console.error("❌ Error in deleteNote:", err.response?.data || err);
    throw err;
  }
};


