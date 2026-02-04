import React from "react";
import ReactDOM from "react-dom/client"; // React 18 createRoot
import './index.css';
import { App } from "./App";
import { ThemeProvider } from "./components/ThemeContext";

// Get root element
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
