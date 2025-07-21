# Ecommerce_Platform
# ☕ BrewBite – Artisanal E-Commerce for Coffee & More
# Introduction
**BrewBite** is a curated e-commerce platform built to bridge the gap between coffee lovers and local sellers of premium brews, gourmet snacks, and handcrafted gear. Focused on highlighting India's rich coffee heritage, the platform empowers small businesses to reach broader audiences, while offering customers a personalized and seamless shopping experience.

The platform supports two key roles – **vendors** and **customers** – with tailored dashboards and workflows for each. Vendors can manage their product listings, track orders, launch exclusive offers, and view performance insights. Customers, on the other hand, can browse curated sections like *New Arrivals*, *Exclusive Sales*, and *Trending Products*, while managing their wishlist, cart, reviews, and orders.

A responsive, mobile-friendly interface ensures that BrewBite delivers a delightful experience across all devices. Integration with **Firebase** for authentication and database management, and **PayPal** for real-time checkout, allows the platform to scale with reliability and security.

---

## 🧩 Platform Structure

The application is built using plain HTML, Tailwind CSS, and JavaScript with Firebase as the backend. Pages include role-based login and registration, dynamic dashboards, shopping cart, wishlist, and product carousels for better UX.

- **Home Page:** Entry point to the platform with options to login or register.
- **Login/Register:** Firebase-powered user authentication supporting role selection (vendor/customer).
- **Customer Dashboard:** Displays all products with filters, wishlist, cart management, and product reviews.
- **Vendor Dashboard:** Enables vendors to add, edit, and manage inventory, orders, sales, and exclusive product offers.
- **Cart & Wishlist:** Persistent cart and wishlist systems powered by Realtime Database for seamless shopping continuity.
- **Checkout:** Integrated with PayPal for secure payment handling and order placement.
- **Order History & Tracking:** Allows customers to view past orders and current delivery statuses.

---

## Credentials
Provide user credentials for autheticated pages
Vendor Credentials:
[gmail:jagan@gmail.com]
[password:444444]

Customer Credentials:
[gmail:simran@gmail.com]
[password:111111]

## 🔐 Auth & Role Flow
Upon signing up, users select their role as either "Vendor" or "Customer". Firebase Authentication stores user sessions, and based on their role, users are redirected to their respective dashboards. Each dashboard is secured with role-based logic, ensuring isolation and access control.

---

## 🧑‍💼 Vendor Capabilities

- Add and manage products across categories: Coffee Beans, Snacks, Gear, Gift Boxes, Subscription Packs.
- Create flash sales or mark products as *New Arrivals*.
- View real-time orders and update delivery statuses (e.g., shipped, delivered).
- Visualize sales data with interactive charts for tracking revenue and product popularity.
- Apply discounts or promotions via coupon system (optional enhancement).

---

## 🛍️ Customer Experience

- Browse products across multiple curated sections with clean category breakdowns.
- Add products to cart or wishlist (persisted across sessions).
- Complete purchases through PayPal.
- Submit reviews and 1–5 star ratings post-purchase.
- Explore cultural and informative content in the Explore section.
- Toggle between light and dark mode for better accessibility.

---

## 🧠 Tech Stack & Tools

- **Frontend:** HTML, Tailwind CSS, Vanilla JS
- **Backend:** Firebase Realtime Database, Firebase Auth, Firebase Hosting
- **Visuals:** Chart.js, Owl Carousel, Emojis, Google Fonts
- **Responsive:** Mobile-first design, dynamic content

---

## 🧩 Frontend Technologies

### 🔹 HTML5
- Semantic markup structure for better accessibility and SEO.
- Uses meaningful tags like `<header>`, `<main>`, `<section>`, and `<table>`.

### 🔹 CSS3 (with Tailwind CSS)
- Utility-first styling with **Tailwind CSS**.
- Layouts built using **Flexbox** and **CSS Grid**.
- Clean and maintainable design patterns.

### 🔹 JavaScript (ES6+)
- Modern JavaScript syntax and features (arrow functions, modules, `let/const`).
- Dynamic DOM manipulation and chart rendering with **Chart.js**.

### 🔹 Responsive Design
- **Mobile-first** approach using Tailwind's responsive utilities.
- Optimized for all screen sizes and devices.

---

## 🛠️ Backend & Database (Firebase)

### 🔸 Firebase Authentication
- Secure user authentication via **email/password**.
- Manages user sessions and access control.

### 🔸 Firebase Realtime Database
- **NoSQL cloud database** for storing customer orders and vendor data.
- Efficient data retrieval and filtering per user/vendor.

### 🔸 Firebase Storage *(Planned/Optional)*
- Cloud storage for assets like product images and files.

### 🔸 Firebase Hosting
- Fast and secure static hosting with HTTPS.
- Global CDN support for performance and scalability.

---
# 📊 BrewBite – Vendor Analytics: Tech Stack Overview

This project leverages a modern web development stack with a focus on Firebase for backend services and Tailwind CSS for responsive UI design.

---

## 📦 Summary

This stack provides:
- Seamless **authentication & data storage** with Firebase.
- Fast, responsive **frontend UI** using Tailwind and modern JavaScript.
- Visual analytics with **Chart.js** for sales insights and customer metrics.


## 🎯 Highlights

- Complete role-based dashboard flow for vendors and customers
- Real-time Firebase-powered database sync and order tracking
- Integration of curated UI sections like "New Arrivals", "Sale Offers"
- Wishlist and cart systems built with user authentication
- Reviews and ratings system with live display
- Responsive design with support for dark mode
- Informative Explore page with visuals, coffee facts, and platform story
- Sales insights dashboard for vendors including popular product charts

---

## 🧾 Final Note

 ☕ **BrewBite** is more than just a coffee marketplace — it’s a thoughtfully designed experience that connects local creators with mindful consumers. Built with simplicity, scalability, and user delight at its core, the platform aims to showcase the richness of India's artisanal brews and snacks while empowering independent sellers with digital tools that are accessible and powerful.

## Git Bash

[Visit my GitHub Repository](https://github.com/Sowmya-Angajala/Ecommerce_Platform/tree/main/Brewbite)


## Netlify 

[Live Demo on Netlify](https://storied-gumption-dc9d67.netlify.app/)

## Youtube

[Youtube Presentation Video Link](https://youtu.be/lvhtxmQ1GxQ)

[Youtube Link for Questions link](https://youtu.be/Kht34F9SHaM)


