import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./components/App";

import {addPost} from "./Redux/State"

export let renderEntireTree = (state) => {

	ReactDOM.render(
		<App appState={state} addPost={addPost}/>,
		document.getElementById("root")
	);

}



// reportWebVitals();