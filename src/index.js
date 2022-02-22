import reportWebVitals from "./reportWebVitals";
import state, {subscribe} from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";

import { addPost, updateNewPostText } from "./Redux/State";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <App
      appState={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById("root")
  );
};


renderEntireTree(state);

subscribe(renderEntireTree);

reportWebVitals();
