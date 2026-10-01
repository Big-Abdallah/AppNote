# 📝 AppNote

A simple note-taking web app built with **React 19** and **Vite**. Users can sign up, log in, and manage their personal notes (add, edit, delete) through a clean, responsive UI.

🔗 **Live demo:** [app-note-nu.vercel.app](https://app-note-nu.vercel.app)

---

## ✨ Features

- 🔐 **Authentication** — register and log in; the JWT is stored in `localStorage`
- 🛡️ **Protected routes** — guests are redirected to `/login`, logged-in users are redirected away from `/login` and `/register`
- 🗒️ **Notes CRUD** — create, edit (in a modal), and delete notes with a confirmation prompt
- 👤 **Personal notes only** — the feed shows only the notes created by the logged-in user
- 🔢 **Live notes counter** in the navbar, shared through React Context
- ✅ **Form validation** with React Hook Form + Zod
  - Register: name (3–20 chars), valid email, strong password, age ≥ 18, phone (10–15 digits)
  - Login: valid email + strong password (8+ chars, upper/lower case, number, special character)
- 📱 Responsive layout with Tailwind CSS and HeroUI components
- 🚪 Sign out and a custom 404 page

---

## 🛠️ Tech Stack

| Category           | Tools                                       |
| ------------------ | ------------------------------------------- |
| Framework          | React 19, Vite 7                            |
| Routing            | React Router DOM 7 (`createBrowserRouter`)  |
| State              | React Context API                           |
| Styling            | Tailwind CSS 4, HeroUI, CSS Modules         |
| Forms & Validation | React Hook Form, Zod, @hookform/resolvers   |
| HTTP Client        | Axios                                       |
| Auth               | JWT (decoded with jwt-decode)               |
| Icons              | Lucide React, Font Awesome                  |
| Linting            | ESLint 9                                    |
| Deployment         | Vercel                                      |

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Router setup (auth routes + protected routes)
├── main.jsx                 # App entry, wraps providers (HeroUI, Auth, Notes)
├── Component/
│   └── Navbar.jsx           # Logo, notes counter, sign out
├── Contexts/
│   ├── AuthContext.jsx      # isLoggedIn state (based on token in localStorage)
│   └── NotesContext.jsx     # noteCount state shown in the navbar
├── Layouts/
│   ├── AuthLayout.jsx       # Layout for login / register
│   └── MainLayout.jsx       # Layout for the main app
├── Page/
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── FeedPage.jsx         # Notes list + add/edit modal + delete
│   └── NoteFoundPage.jsx    # 404 page
├── Schemas/
│   ├── LoginSchema.js       # Zod schema for login
│   └── RegisterSchema.js    # Zod schema for register
└── services/
    ├── authServices.js      # signUp / signIn API calls
    ├── NotsServices.js      # get / create / update / delete notes API calls
    └── ProtectedRouts/      # Route guards (ProtectedRout, ProtectedAuth)
```

---

## 🔌 API

The app talks to a hosted REST API: `https://note-sigma-black.vercel.app/api/v1`

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| POST   | `/users/signUp`     | Create a new account         |
| POST   | `/users/signIn`     | Log in and receive a token   |
| GET    | `/notes/allNotes`   | Get notes                    |
| POST   | `/notes`            | Create a note                |
| PUT    | `/notes/:id`        | Update a note                |
| DELETE | `/notes/:id`        | Delete a note                |

Protected requests send the token in a `token` header with the `3b8ny__` prefix.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
git clone https://github.com/Big-Abdallah/AppNote.git
cd AppNote
npm install
```

### Run in development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

---

## 📜 Available Scripts

| Script            | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the development server          |
| `npm run build`   | Build the app for production          |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint                            |

---

## ☁️ Deployment

Deployed on **Vercel**. `vercel.json` rewrites all routes to `index.html` so direct links and page refreshes work with client-side routing.

---

## 🗺️ Roadmap

- [ ] Search and filter notes
- [ ] Better error and loading states (replace `alert()` with toasts)
- [ ] Dark mode

---

## 👤 Author

**Abdallah** — [@Big-Abdallah](https://github.com/Big-Abdallah)

---

## 📄 License

No license has been added yet. Add a `LICENSE` file (e.g., MIT) to specify the terms.
