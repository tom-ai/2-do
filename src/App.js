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

	const addTodo = (item) => {
		setTodos((currentTodos) => {
			return [item, ...currentTodos];
		});
	};

	const deleteItem = (itemToDelete) => {
		setTodos((currentTodos) => {
			const filteredTodos = [...currentTodos];
			return filteredTodos.filter((todo) => todo !== itemToDelete);
		});
	};

	const completeItem = (itemToComplete) => {
		setTodos((currentTodos) => {
			const filteredTodos = [...currentTodos];
			return filteredTodos.filter((todo) => todo !== itemToComplete);
		});
	};

	return (
		<div className="body">
			<Header />
			<div className="list-container">
				<PendingList
					todos={todos}
					flipOrder={flipOrder}
					deleteItem={deleteItem}
					completeItem={completeItem}
				/>
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
