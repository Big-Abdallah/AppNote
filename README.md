# 📝 AppNote

A clean, fast note-taking web app built with **React 19** and **Vite**, styled with **Tailwind CSS** and **HeroUI**.

🔗 **Live demo:** [app-note-nu.vercel.app](https://app-note-nu.vercel.app)

---

## ✨ Features

- 🔐 User authentication (JWT-based)
- 🗒️ Create, view, edit, and delete notes
- ✅ Form validation with React Hook Form + Zod
- 📱 Responsive UI built with HeroUI and Tailwind CSS
- 🎞️ Smooth animations with Framer Motion
- ⚡ Fast dev experience with Vite and HMR

---

## 🛠️ Tech Stack

| Category        | Tools                                      |
| --------------- | ------------------------------------------ |
| Framework       | React 19, Vite 7                           |
| Routing         | React Router DOM 7                         |
| Styling         | Tailwind CSS 4, HeroUI                     |
| Forms & Validation | React Hook Form, Zod, @hookform/resolvers |
| HTTP Client     | Axios                                      |
| Auth            | JWT (jwt-decode)                           |
| Animation       | Framer Motion                              |
| Icons           | Lucide React, Font Awesome                 |
| Linting         | ESLint 9                                   |
| Deployment      | Vercel                                     |

---

## 📁 Project Structure

```
AppNote/
├── src/              # Application source code
├── index.html        # App entry HTML
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint configuration
├── vercel.json       # Vercel deployment config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Big-Abdallah/AppNote.git

# Go to the project folder
cd AppNote

# Install dependencies
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

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the app for production         |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

---

## ☁️ Deployment

The app is deployed on **Vercel**. `vercel.json` handles client-side routing so direct links to any route work correctly.

To deploy your own copy:

1. Fork this repository
2. Import it into [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — click **Deploy**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👤 Author

**Abdallah** — Backend Developer & Content Creator ("Big Abdallah")

- GitHub: [@Big-Abdallah](https://github.com/Big-Abdallah)

---

## 📄 License

This project is open source. Add a license file (e.g., MIT) to specify the terms.
