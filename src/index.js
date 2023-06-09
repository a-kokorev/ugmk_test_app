import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import HomePage from "./pages/home-page/home-page";
import DetailsPage from "./pages/details-page/details-page";
import NotFound from "./pages/not-found/not-found";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:factoryId/:monthNumber" element={<DetailsPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
