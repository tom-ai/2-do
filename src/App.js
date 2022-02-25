import "./App.css";
import Header from "./components/Header";
import PendingList from "./components/Pending-List";
import CompletedList from "./components/Completed-List";
import Input from "./components/Input";
import { useState } from "react";
const form = document.querySelector("form");

function App() {
	const [todos, setTodos] = useState(["write a list", "brush teeth"]);

	const flipOrder = () => {
		setTodos((currentTodos) => {
			return [...currentTodos].reverse();
		});
	};

	const addTodo = () => {
		setTodos((currentTodos) => {
			return ["set an alarm", ...currentTodos];
		});
	};

	return (
		<div className="body">
			<Header />
			<div className="list-container">
				<PendingList todos={todos} flipOrder={flipOrder} />
				<CompletedList />
			</div>
			<div className="input-container">
				<Input addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;

// form.addEventListener("submit", (event) => {
// 	console.log(event);
// });
