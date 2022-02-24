const Input = () => {
	return (
		<div className="input-div">
			<form action="#" method="POST" id="form">
				<input
					className="input-text-box"
					id="input-text-box"
					name="input-text-box"
					type="text"
					placeholder="What do you want 2-do today?"
				></input>
				<button id="button" type="submit" className="input-text-box">
					Add
				</button>
			</form>
		</div>
	);
};

export default Input;
