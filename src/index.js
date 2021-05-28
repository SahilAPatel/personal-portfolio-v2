import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Title from "./components/title.jsx";
import About from "./components/about.jsx";

ReactDOM.render(
	<React.StrictMode>
		<Title />
		<About />
	</React.StrictMode>,
	document.getElementById("root")
);
