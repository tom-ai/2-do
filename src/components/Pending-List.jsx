// import {addTodo} from "../App"

const PendingList = ({ todos, flipOrder, deleteItem, completeItem }) => {
	return (
		<div className="list-div">
			<h2>2-Do's</h2>
			<button
				onClick={() => {
					flipOrder();
				}}
			>
				Flip Order
			</button>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo}>
							<button className="list-button" onClick={() => deleteItem(todo)}>
								🗑️
							</button>
							{` ${todo} `}
							<button
								className="list-button"
								onClick={() => completeItem(todo)}
								// onClick={() => deleteItem(todo)}
							>
								✅
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PendingList;
