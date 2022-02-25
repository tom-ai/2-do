const CompletedList = ({completed, addTodo}) => {
	return (
		<div className="list-div">
			<h2>Completed 2-Do's</h2>
			<ul>
				{ completed.map(todo => {
					return (<>
					<li key={todo}>
						{todo}
						<button className="list-button">
						↩︎
						</button>
					</li>
					</>
					)
				})}
			</ul>
		</div>
	);
};

export default CompletedList;
