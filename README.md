# 🚀 React 19.2 + Vite (JavaScript + React Compiler Version) + React Router v7 (Data Mode) Template V2.0

Welcome to the ultimate starter template for modern React development. This repository is specifically designed to provide a production-ready architecture using the latest advancements in the React ecosystem. 

By using this template, you will learn how to integrate modern routing, optimize performance automatically, manage complex state, and handle rigorous form validation—all while preparing your app for immediate deployment.

---

## 🛠 Prerequisites

Before you begin, ensure you have the following installed on your machine:
* **Node.js:** Version **v24** or higher is recommended for optimal compatibility.
* **Terminal:** **Git Bash** (Windows) or your native OS terminal.
* **Git:** Version control to manage your repository.

---

## 📚 Technology Stack Dictionary

Before interacting with the code, review these core technologies so you understand exactly what is powering your application:

* **Vite v8:** A lightning-fast build tool and development server. It serves your code via native ES modules during development and bundles it highly efficiently for production.
* **React v19.2:** The core UI library. This version includes modern concurrent features and improved hooks handling.
* **React Compiler:** An automatic optimization tool built into the build pipeline. It analyzes your JavaScript and automatically memoizes values and functions, meaning you rarely need to use `useMemo` or `useCallback` manually.
* **React Router v7 (Data Router):** The routing engine. "Data Mode" means routing is decoupled from component rendering. It uses `loaders` to fetch data before a page renders and `actions` to handle form submissions, preventing UI jumps and loading spinners.
* **State Management (Three Approaches):**
    * **Context API:** Built into React. Best for simple, low-frequency updates (e.g., Theme (Light/Dark mode), User Auth status).
    * **Zustand:** A small, fast, and scalable bearbones state-management solution. Best for medium-complexity global state without the boilerplate.
    * **Redux Toolkit (RTK):** The industry standard for complex state. Best for large-scale enterprise applications where state changes must be strictly traceable and modularized into "slices".
* **React Hook Form (RHF):** A library for managing form state. It minimizes re-renders by using uncontrolled components, making forms highly performant.
* **Zod:** A schema declaration and validation library. It pairs with RHF to ensure the data users submit exactly matches the required format (e.g., validating an email is actually an email).
* **GitHub Pages:** A static site hosting service that takes your HTML, CSS, and JavaScript files straight from a repository on GitHub and publishes them as a live website.

---

## 🚀 Quick Start Guide

Follow these precise steps to create your own project from this template:

### Step 1: Initialize Your Project
1. Clone the Template Repository
Download the boilerplate codebase to your local machine and navigate into the newly created directory:
   ```bash
   git clone https://github.com/hassaneldash/react-vite-rr7-ghp-deploy.git
   cd react-vite-rr7-ghp-deploy
   ```
2. Erase the Original Version History
Remove the existing tracking data so you do not accidentally push commits to the template repository:
   ```bash
   rm -rf .git
   ```
4. Initialize a Fresh Repository
Start your own version control tracking from scratch:
   ```bash
   git init
    ```
6. Create Your Remote GitHub Repository
Open your web browser, navigate to your GitHub account, and create a new repository.
⚠️ Important: Do not check the boxes to add a README, .gitignore, or license during this step. You need a completely empty repository.
7. Stage, Commit, and Push Your Code
Link your local codebase to your newly created GitHub repository and push your initial commit.
Be sure to replace the bracketed placeholders with your actual GitHub username and repository name:
   ```bash
   git add .
   git commit -m "Initial commit from template"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<new-repo-name>.git
   git push -u origin main
   ```
### Step 2: Install Dependencies
Install all required packages defined in the `package.json`.
```bash
npm install
```

### Step 3: Start the Development Server
Launch Vite's local server.
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. You are now ready to code!

---

## 📂 Project Structure

Understanding where code lives is critical for maintaining a clean architecture. Here is the visible structure of this template:

```text       
Project structure:
└── react-vite-rr7-ghp-deploy/
    ├── README.md                      # You are here!
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── jsconfig.json
    ├── package.json                   # Project metadata, scripts, and dependencies
    ├── setupTests.js
    ├── vite.config.js                 # Vite bundler configuration
    ├── vitest.config.js               # Vitest testing framework configuration
    ├── public/                        # Static assets that don't need processing (favicon, etc.)
    │   └── 404.html
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx                   # Entry point where React attaches to the DOM
        ├── StoreManagement.jsx
        ├── components/                # Reusable, standalone UI components (Buttons, Cards)
        │   ├── app-sidebar.jsx
        │   ├── FirstComponent.jsx
        │   ├── Greetings.jsx
        │   ├── Greetings.test.jsx
        │   ├── login-form.jsx
        │   ├── search-form.jsx
        │   ├── SecondComponent.jsx
        │   ├── signup-form.jsx
        │   ├── theme-provider.jsx
        │   ├── version-switcher.jsx
        │   └── ui/
        │       ├── accordion.jsx
        │       ├── alert-dialog.jsx
        │       ├── alert.jsx
        │       ├── aspect-ratio.jsx
        │       ├── avatar.jsx
        │       ├── badge.jsx
        │       ├── breadcrumb.jsx
        │       ├── button-group.jsx
        │       ├── button.jsx
        │       ├── calendar.jsx
        │       ├── card.jsx
        │       ├── carousel.jsx
        │       ├── chart.jsx
        │       ├── checkbox.jsx
        │       ├── collapsible.jsx
        │       ├── combobox.jsx
        │       ├── command.jsx
        │       ├── context-menu.jsx
        │       ├── dialog.jsx
        │       ├── direction.jsx
        │       ├── drawer.jsx
        │       ├── dropdown-menu.jsx
        │       ├── empty.jsx
        │       ├── field.jsx
        │       ├── hover-card.jsx
        │       ├── input-group.jsx
        │       ├── input-otp.jsx
        │       ├── input.jsx
        │       ├── item.jsx
        │       ├── kbd.jsx
        │       ├── label.jsx
        │       ├── menubar.jsx
        │       ├── native-select.jsx
        │       ├── navigation-menu.jsx
        │       ├── pagination.jsx
        │       ├── popover.jsx
        │       ├── progress.jsx
        │       ├── radio-group.jsx
        │       ├── resizable.jsx
        │       ├── scroll-area.jsx
        │       ├── select.jsx
        │       ├── separator.jsx
        │       ├── sheet.jsx
        │       ├── sidebar.jsx
        │       ├── skeleton.jsx
        │       ├── slider.jsx
        │       ├── sonner.jsx
        │       ├── spinner.jsx
        │       ├── switch.jsx
        │       ├── table.jsx
        │       ├── tabs.jsx
        │       ├── textarea.jsx
        │       ├── toggle-group.jsx
        │       ├── toggle.jsx
        │       └── tooltip.jsx
        ├── hooks/
        │   └── use-mobile.js
        ├── layouts/
        │   └── MainLayout.jsx
        ├── lib/
        │   └── utils.js
        ├── mocks/
        │   └── server.js
        ├── pages/                      # Top-level route components (Home, Dashboard)
        │   ├── LoginPage.jsx
        │   ├── NotFound404.jsx
        │   ├── RegisterPage.jsx
        │   ├── UserPage.jsx
        │   └── UsersPage.jsx
        ├── redux/                      # Redux Toolkit store configuration and slices
        │   ├── counterSlice.jsx
        │   └── store.jsx
        └── zustand/                    # Zustand store definitions
            └── useCounterStore.jsx
```

---

## 🌐 Deployment to GitHub Pages

Deploying your completed application requires specific configuration to ensure your router and assets load correctly on GitHub's servers. 

### 1. Configure the Base Paths
Before deploying, you must tell Vite and React Router that your app will not be hosted at the root domain (`/`), but rather in a subdirectory matching your repository name.

* **In `vite.config.js`:** Update the `base` property.
    ```javascript
    export default defineConfig({
      plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
      base: '/YOUR_REPO_NAME/', // MUST match your GitHub repository name exactly
    })
    ```
* **In your Router Config (e.g., `src/router/index.jsx`):** Update the `basename`.
    ```javascript
    const router = createBrowserRouter([/* routes */], {
      basename: "/YOUR_REPO_NAME", // No trailing slash here
    });
    ```

### 2. Deploy
This template utilizes the `gh-pages` package for seamless deployment.

1.  Open your terminal.
2.  Run the deployment script:
    ```bash
    npm run deploy
    ```
    *(Note: This command runs `npm run build` implicitly, bundles your code into a `dist/` folder, and pushes that folder to a special `gh-pages` branch on your repository).*
3.  Go to your GitHub Repository -> **Settings** -> **Pages**.
4.  Ensure the **Source** is set to "Deploy from a branch" and the branch selected is `gh-pages`.
5.  Wait a few minutes, and your site will be live at your `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` URL!
