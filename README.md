# 🛍️ React E-Commerce Store

A modern, responsive **E-Commerce Web App** built with **React**, **Tailwind CSS**, and **React Router**.  
It allows users to browse products, view details, add items to a shopping cart, and complete checkout — all with a smooth and dynamic UI.

---

## ✨ Features

- 🔍 **Product Search & Filtering** — Search products by name, category, and price.
- 🛒 **Shopping Cart** — Add, remove, and adjust product quantities in real time.
- 💳 **Checkout Process** — Simple checkout form with validation and progress bar.
- 📦 **Product Details Page** — View detailed information about each product.
- 🌐 **API Integration** — Fetched products from [Fake Store API](https://fakestoreapi.com/).
- 🎨 **Responsive Design** — Fully optimized for desktop, tablet, and mobile.
- ⚡ **Modern UI/UX** — Built using TailwindCSS and React Hooks.
- 💾 **Cart Persistence** — Cart state preserved during navigation.

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, Vite, React Router |
| **Styling** | Tailwind CSS |
| **State Management** | React Context API |
| **API** | FakeStoreAPI |
| **Build Tool** | Vite |
| **Icons** | Lucide Icons |

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Bedru-Mekiyu/react-ecommerce-store.git
cd react-ecommerce-store
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start the Development Server
bash
Copy code
npm run dev
Your app will be available at http://localhost:5173/

📁 Project Structure
css
Copy code
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   └── Modal.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   ├── CartPage.jsx
│   └── Checkout.jsx
├── App.jsx
├── main.jsx
└── index.css
🧠 Code Highlights
Global Cart Context using React.createContext()

Reusable Components for product cards, modals, and forms

Dynamic Routing for /, /product/:id, /cart, /checkout

Validation + Smooth Transitions on checkout form

📸 Preview
Home Page	Product Details	Cart	Checkout

(You can replace these placeholder links with actual screenshots of your app)

💡 Future Improvements
🧾 Add user authentication (JWT or Firebase)

💬 Add product reviews and ratings

🖼️ Add product image zoom or gallery

🕶️ Add dark/light mode

📊 Add admin dashboard for managing products

🧑‍💻 Author
Bedru Mekiyu
💼GitHub:https://github.com/Bedru-Mekiyu/
💬 LinkedIn

📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute this project with attribution.

⭐ If you like this project, don’t forget to give it a star on GitHub!
"Code is like humor. When you have to explain it, it’s bad." — Cory House
