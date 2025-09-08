# React Products

This project is a full-stack web application with a React front-end and a JSON server back-end.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/RiyadOsama/react-products.git
   ```
2. **Install NPM packages for the client**
   ```sh
   cd client
   npm install
   ```
3. **Install NPM packages for the server**
   ```sh
   cd ../server
   npm install
   ```

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - Axios
  - Bootstrap
  - React-Bootstrap
  - React-Router-DOM
  - Styled-Components
- **Backend:**
  - JSON-Server

## Project Structure

```
React-3/
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └── productAPI.js
│   │   ├── assets/
│   │   │   └── imgs/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   └── Button.style.jsx
│   │   │   ├── molecules/
│   │   │   └── organisms/
│   │   │       ├── Footer.jsx
│   │   │       └── Header.jsx
│   │   ├── layouts/
│   │   │   ├── MainLayout.jsx
│   │   │   └── SharedLayout.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   └── ProductList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── ...
└── server/
    ├── data.json
    └── ...
```

## Available Scripts

In the project directory, you can run:

### `npm run dev` (in the `client` directory)

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build` (in the `client` directory)

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm start` (in the `server` directory)

Runs the JSON server.<br>
The server will run on [http://localhost:3000](http://localhost:3000).

## Running the app

1. **Start the server**
   In the `server` directory, run:
   ```sh
   npm start
   ```
2. **Start the client**
   In the `client` directory, run:
   ```sh
   npm run dev
   ```
