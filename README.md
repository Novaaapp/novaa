# Electron Vite React Tailwind Boilerplate

A robust boilerplate for building cross-platform desktop applications using Electron, Vite, React, and Tailwind CSS. This project provides a solid foundation with a modern development setup, allowing you to quickly start developing your application.

## ✨ Features

- **Electron:** Build cross-platform desktop apps with JavaScript, HTML, and CSS.
- **Vite:** Next-generation frontend tooling. It's fast!
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** Superset of JavaScript that adds optional static typing.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **ESLint & Prettier:** For consistent code style and quality.
- **Hot Module Replacement (HMR):** For a fast development workflow.
- **Preload Scripts:** Securely expose Node.js/Electron APIs to the renderer process.
- **Build Process:** Ready-to-use build configurations for Windows, macOS, and Linux using `electron-builder`.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <repository-name>
```

### 2. Install Dependencies

Navigate to the project directory and install the dependencies:

```bash
npm install
```

### 3. Development Mode

To start the application in development mode with Hot Module Replacement (HMR):

```bash
npm run dev
```

This command will launch the Electron application and open a development server for the React frontend. Changes to the code will be reflected in real-time.

### 4. Build for Production

To build the application for production:

```bash
npm run build
```

This command will compile the TypeScript code, bundle the assets, and package the application for the target platforms (Windows, macOS, Linux) as configured in `electron-builder.yml`.
The distributable files will be located in the `dist` directory.

## 📂 Project Structure

```
.
├── .editorconfig
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.yaml
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── LICENSE
├── README.md
├── electron-builder.yml
├── electron.vite.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── resources/
│   └── icon.png
├── src/
│   ├── main/                 # Electron Main Process
│   │   └── index.ts
│   ├── preload/              # Electron Preload Scripts
│   │   ├── index.d.ts
│   │   └── index.ts
│   ├── renderer/             # Electron Renderer Process (React App)
│   │   ├── index.html
│   │   └── src/
│   │       ├── App.tsx
│   │       ├── main.tsx
│   │       └── assets/
│   │           └── react.svg
│   └── shared/               # Shared code between main and renderer
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── tsconfig.web.json
```

- **`src/main`**: Contains the Electron main process code.
- **`src/preload`**: Contains preload scripts that bridge the main and renderer processes.
- **`src/renderer`**: Contains the React application code (renderer process).
- **`src/shared`**: Contains code that can be shared between the main and renderer processes.
- **`electron.vite.config.ts`**: Vite configuration for the Electron main and preload processes.
- **`electron-builder.yml`**: Configuration for `electron-builder` to package the application.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`postcss.config.js`**: Configuration file for PostCSS.

## ⚙️ Technologies Used

- [Electron](https://www.electronjs.org/)
- [Electron-vite-first](https://electron-vite.org/)
- [Electron-vite-second](https://electron-vite.github.io/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [electron-builder](https://www.electron.build/)

## 📜 Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`**: Starts the application in development mode with HMR.
- **`npm run build`**: Builds the application for production.
- **`npm run build:win`**: Builds the application specifically for Windows.
- **`npm run build:mac`**: Builds the application specifically for macOS.
- **`npm run build:linux`**: Builds the application specifically for Linux.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run format`**: Formats the codebase using Prettier.
- **`npm run typecheck`**: Performs type checking using TypeScript compiler.

## 🔧 Configuration

Key configuration files:

- **`electron.vite.config.ts`**: Configure Vite for the main and preload processes. This includes setting up plugins, build options, and server settings.
- **`electron-builder.yml`**: Configure `electron-builder` for packaging the application. This includes specifying app ID, product name, output directories, and platform-specific settings.
- **`tailwind.config.js`**: Customize Tailwind CSS, including theme, variants, and plugins.
- **`tsconfig.json` (and variants)**: Configure TypeScript compiler options for different parts of the project (node, web).

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

Please ensure your code adheres to the existing code style and all tests pass.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
