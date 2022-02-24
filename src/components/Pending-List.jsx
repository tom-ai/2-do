// import {addTodo} from "../App"

const PendingList = ({ addTodo, todos, flipOrder }) => {
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
				{todos.map((todo, index) => {
					return <li key={index}> {todo} </li>;
				})}
			</ul>
		</div>
	);
};

export default PendingList;
