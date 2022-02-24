import "./App.css";
import Header from "./components/Header";
import PendingList from "./components/Pending-List";
import CompletedList from "./components/Completed-List";
import Input from "./components/Input";
import { useState } from "react";
const form = document.querySelector("form");

function App() {
	return (
		<div className="body">
			<Header />
			<div className="list-container">
				<PendingList />
				<CompletedList />
			</div>
			<div className="input-container">
				<Input />
			</div>
		</div>
	);
}

export default App;

// form.addEventListener("submit", (event) => {
// 	console.log(event);
// });
