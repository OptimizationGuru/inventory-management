# Inventory Management Web App

## Overview

This is a simple **Inventory Management Web App** built using **React** and **TypeScript**. The app allows users to manage products in an inventory, with two distinct views: **Admin** and **User**. The app fetches product data via an API and allows the admin to perform actions such as editing, deleting, and disabling products, while users can only view the product list.

### Key Features:
- **Admin View**: Admins can edit the price and quantity of products, delete products, and disable them.
- **User View**: Users can only view the list of products, with action buttons (like edit, delete, and disable) disabled.
- **Switch Button**: The navigation bar allows users to switch between **Admin** and **User** views.
- **API Integration**: The app makes an API call to fetch the inventory data.
- **Top Widgets**: Displays the total number of products, total store value, out-of-stock products, and the number of categories.
- **Dynamic Updates**: As the admin edits or disables products, the top widgets update automatically.

---

## Technologies Used:
- **React** (with Custom Hooks)
- **TypeScript**
- **CSS/SCSS** (or Tailwind CSS for styling)
- **Axios** (for API calls)
- **State Management**: Redux
- **API**: [Inventory API](https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory)

---

## Screenshots

### Admin View:
- Admin can edit, delete, and disable products.
- Displays a table with action icons for each product.

### User View:
- User can only view products with action buttons disabled.

---

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn (for package management)

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone git@github.com:OptimizationGuru/inventory-management.git
   cd inventory-management

2. **Install the dependencies:**
   ```bash
   npm install

3. **Run the development server:**
   ```bash
   npm install   

   
Open your browser and go to http://localhost:3000 to view the application.


## Project Structure

The project is organized into several key directories:

### `/components`
- **AdminView.tsx**: Displays the Admin view with the ability to edit, delete, and disable products.
- **UserView.tsx**: Displays the User view where action buttons are disabled.
- **ProductTable.tsx**: Renders a table displaying all products with their details (price, quantity, etc.) and action buttons.
- **EditProductModal.tsx**: Modal component for editing product details (price, quantity).
- **TopWidgets.tsx**: Displays the top widgets showing total products, total store value, out-of-stock products, and the number of categories.

### `/services`
- **api.ts**: Contains the API call functions using Axios to fetch product data from the external inventory API.

### `/styles`
- **index.css**: Main stylesheet for global styles (or if you're using Tailwind CSS, this file contains customizations).

### `/types`
- **Product.ts**: Defines TypeScript types for the product data, including price, quantity, and category.

### `App.tsx`
- The main component that manages the global state, view switching between Admin and User views, and renders the app.

### `index.tsx`
- The entry point of the application that renders the root component (`App.tsx`) into the DOM.



---

This structure is designed to keep the application modular, maintainable, and scalable, with clearly separated concerns for components, API interactions, and styling.

## Architecture Design

## API Design

### Fetching Thumbnails
- **Endpoint**: [Inventory API](https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory)
- **Method**: `GET`
- **Response**: An array of thumbnail objects containing:
  - `title`: The title of the thumbnail.
  - `publicId`: The unique identifier for the thumbnail.
  - `url`: The URL for fetching the thumbnail image.

### Adding Thumbnails
- **Method**: Simulated locally by adding thumbnail objects to the Redux store and local state.
- **Action**: Triggered via a button click that initiates a throttled function for adding new thumbnails.

---

## Architectural Approach

### State Management
- The application uses `useState` for local component state and Redux for managing the global state of thumbnails.
- Redux handles actions like adding new thumbnails and updating their order.

### Responsive Layout
- **TailwindCSS** is utilized for responsive design. Utility classes define how many columns should be displayed based on the screen width, ensuring the layout adapts to mobile, tablet, and desktop screens.

### Modular Design
- The project uses a component-based approach in React. Components like `Widgets`, `ProdcutsTable`, and `Navbar` are isolated and reusable, allowing for easy maintenance and scalability.

### CSS Styling
- **TailwindCSS** is used for styling the components, which allows for rapid UI changes without the need for custom CSS.

## 🛠 Skills
- TypeScript: Implementing TypeScript for type safety and improved development experience in JavaScript applications.
- ReactJS: Experienced in building user interfaces and managing component lifecycles with React.
- Redux: Managing application state effectively with Redux for a predictable state container.

- TailwindCSS: Utilizing TailwindCSS for rapid UI development and responsive design.





## Authors

- [OptimizationGuru](https://github.com/OptimizationGuru)

-  Live Demo : [Inventory Management](https://ecom-inventory.netlify.app/)

## Screenshots

