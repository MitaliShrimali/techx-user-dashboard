# TechX User Management Dashboard

A production‑ready ReactJS dashboard for managing users, built with Redux Toolkit, styled‑components, and resilient fallback logic.

---

## 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MitaliShrimali/techx-user-dashboard.git
   cd techx-user-dashboard

2. Install dependencies:
    bash
    npm install
    
3. Run the development server:
    bash
    npm start
    App runs at http://localhost:3000.

4. Build for production:
    bash
    npm run build
    Output goes to the build/ folder.

## 🧩 Approach

- **Clean scaffold**: Removed the default CRA boilerplate and set up a modular folder structure (`components/`, `store/`, `themes/`, `utils/`) for clarity.
- **State management**: Used Redux Toolkit slices to handle user data in a predictable and scalable way.
- **UI polish**: Built reusable components (Button, Card, Modal) alongside user‑specific components (UserList, UserCard, AddUserForm) to keep the interface consistent.
- **Fallback logic**: Added a static dataset of Indian names, emails, and companies so the dashboard remains functional even if the API fails. This ensures user always see meaningful data.
- **Deployment**: Verified the build command (`npm run build`) and output directory (`build`) to ensure smooth deployment on Vercel.

---

## ⚡ Challenges & Solutions

- **API reliability**  
  *Challenge*: The API occasionally failed or returned empty data.  
  *Solution*: Integrated a static fallback dataset with Indian user details so the dashboard always displays realistic information.

- **Repo clutter**  
  *Challenge*: CRA’s default files (logo.svg, App.test.js, etc.) cluttered the repo.  
  *Solution*: Removed unused files and reorganized code into clear directories.

- **UI consistency**  
  *Challenge*: Maintaining a professional look across multiple components.  
  *Solution*: Applied styled‑components with a theme provider to enforce consistent colors, spacing, and typography.

- **Deployment errors**  
  *Challenge*: Ensuring the app built correctly on Vercel without path or config issues.  
  *Solution*: Double‑checked the build command (`npm run build`) and confirmed the output directory (`build`) matched CRA defaults.

## 🌐 Live Demo
👉 [View the dashboard](https://techx-user-dashboard.vercel.app)

## 📂 Repository
👉 [GitHub Repo](https://github.com/MitaliShrimali/techx-user-dashboard)

