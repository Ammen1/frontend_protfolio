import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// import { ThemeContextProvider } from "./ThemeContextProvider"; // Import your context provider

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeContextProvider>
//       <App />
//     </ThemeContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
