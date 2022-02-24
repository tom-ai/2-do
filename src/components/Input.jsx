const Input = ({addTodo}) => {
	return (
		<div className="input-div">
			<button onClick={() => {addTodo()}} className="input-text-box">
					Add
			</button>
			{/* <form action="#" method="" id="form">
				<input
					className="input-text-box"
					id="input-text-box"
					name="input-text-box"
					type="text"
					placeholder="What do you want 2-do today?"
				></input>
			</form> */}
		</div>
	);
};

export default Input;
