import "./App.css";
import Header from "./components/Header";
import PendingList from "./components/Pending-List";
import CompletedList from "./components/Completed-List";
import Input from "./components/Input";
import { useState } from "react";
const form = document.querySelector("form");

function App() {
	const [todos, setTodos] = useState(["write a list", "brush teeth"]);
	const [completed, setCompleted] = useState([])

	const flipOrder = () => {
		setTodos((currentTodos) => {
			return [...currentTodos].reverse();
		});
	};

	const addTodo = (item) => {
		console.log(item)
		setTodos((currentTodos) => {
			return [item, ...currentTodos];
		});
	};

	const deleteItem = (itemToDelete) => {
		console.log('IN DELETE ITEM!')
		setTodos((currentTodos) => {
			const filteredTodos = [...currentTodos];
			return filteredTodos.filter((todo) => todo !== itemToDelete);
		});
	};

	const completeItem = (itemToComplete) => {
		setCompleted((currentCompleted) => {
			const updatedCompleted = [...currentCompleted]
			updatedCompleted.push(itemToComplete)
			deleteItem(itemToComplete)
			return updatedCompleted
		})
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
				<CompletedList
				completed={completed}
				addTodo={addTodo}
				/>
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
