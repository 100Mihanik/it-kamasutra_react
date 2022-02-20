import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import My_page from "./components/My_page/My_page";
import Messages from "./components/Messages/Messages";
import Articles from "./components/Articles/Articles";
import Articles_random from "./components/Articles_random/Artickes_random"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container">
        <Leftbar />
        <main className="main">
          <Routes>
            <Route path="/My_page" element={<My_page />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Article" element={<Articles />} />
						<Route path="/Article/Random" element={<Articles_random />} />
          </Routes>
        </main>
        <Rightbar />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
