import {useState} from "react";

const Input = ({ addTodo }) => {
	const [todo, setNewTodo] = useState("")
	
	const handleSubmit = (event) => {
		event.preventDefault()

		const newItem = todo
		addTodo(newItem) // cb?
		
		setNewTodo("")
	}
	return (
    <div className="input-div">
      <form onSubmit={handleSubmit}>
        <input
          className="input-text-box"
          value={todo}
		  onChange={(e) => {
			  setNewTodo(e.target.value)
		  }}
          placeholder="What do you want 2-do today?"
        ></input>
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
