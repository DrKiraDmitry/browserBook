import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BookPage } from "./pages/Book/BookPage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BookPage />
    </React.StrictMode>
);
