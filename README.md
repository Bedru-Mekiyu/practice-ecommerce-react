# 🛍️ React E-Commerce Store

A modern, responsive e-commerce web application built with **React 19**, **Tailwind CSS**, **Vite**, and **React Router v7**. The application provides a seamless online shopping experience with product browsing, real-time filtering and sorting, interactive cart drawer, wishlist management, dark mode support, and a checkout flow.

---

## ✨ Features

- 🔍 **Product Search & Filtering** — Instant search by keyword, category filtering, and sorting by price or name.
- 🛒 **Shopping Cart & Cart Drawer** — Real-time quantity adjustments, price calculation, slide-out drawer, and cart clear functionality.
- ❤️ **Wishlist Support** — Dedicated wishlist context allowing users to bookmark items across sessions.
- 💳 **Checkout Flow** — Interactive checkout form with shipping info validation and order summary.
- 🌗 **Dark Mode Toggle** — System-wide theme switcher with persistence via React Context API.
- 📦 **Product Details Page** — Detailed view of product specifications and category context.
- 🌐 **API Integration** — Live product fetching powered by [Fake Store API](https://fakestoreapi.com/).
- 📱 **Responsive UI/UX** — Clean layout styled with Tailwind CSS, animated with Framer Motion, and enhanced with Lucide Icons and Toast notifications.
- 💾 **State Persistence** — Cart and theme preferences preserved across navigation using `localStorage`.

---

## 🧰 Tech Stack

| Category | Technologies |
|---|---|
| **Frontend Framework** | React 19, React Router v7 |
| **Build Tool & Server** | Vite 7 |
| **Styling** | Tailwind CSS 4, PostCSS |
| **Animation & UI** | Framer Motion, Lucide React, React Toastify |
| **State Management** | React Context API (`CartContext`, `WishlistContext`, `ThemeContext`) |
| **Data Source** | FakeStoreAPI |
| **Linting & Quality** | ESLint 9 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bedru-Mekiyu/react-ecommerce-store.git
   cd react-ecommerce-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles and builds the production bundle into the `dist/` directory.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues.
- `npm run preview`: Bootstraps a local web server to preview the production build.

---

## 📁 Project Structure

```text
react-ecommerce-store/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI workflow
├── public/                    # Static public assets
├── src/
│   ├── assets/                # Images and SVGs
│   ├── components/            # Reusable UI components
│   │   ├── Cart.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/               # React Context Providers
│   │   ├── CartContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── WishlistContext.jsx
│   ├── pages/                 # Route pages
│   │   ├── CartPage.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Wishlist.jsx
│   ├── App.css
│   ├── App.jsx                # Application routes layout
│   ├── index.css              # Global styles & Tailwind imports
│   └── main.jsx               # React entry point & context providers
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
└── vite.config.js             # Vite configuration
```

---

## ⚙️ CI/CD

Automated integration is configured via **GitHub Actions** (`.github/workflows/ci.yml`). On every push and pull request, the CI pipeline automatically:

1. Sets up the Node.js runtime environment.
2. Performs a clean dependency installation (`npm ci`).
3. Executes code quality checks (`npm run lint`).
4. Builds the application (`npm run build`).

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
