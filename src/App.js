import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  // State variables to manage the ToDo list
  const [toDo, setToDo] = useState([]); // State for storing the list of ToDo items
  const [text, setText] = useState(""); // State for managing the input text for adding/updating ToDo items
  const [isUpdating, setIsUpdating] = useState(false); // State to track whether the app is in update mode or add mode
  const [toDoId, setToDoId] = useState(""); // State to store the ID of the ToDo item being updated

  // useEffect to fetch all existing ToDo items from the backend when the component mounts
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  // Function to enter the update mode and set the text and ID of the item being updated
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>

        <div className="top">
          {/* Input field for adding/updating ToDo items */}
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* "Add" or "Update" button based on the update mode */}
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating) // Call the updateToDo function with relevant parameters
                : () => addToDo(text, setText, setToDo) // Call the addToDo function with relevant parameters
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {/* Display each ToDo item using the ToDo component */}
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)} // Pass updateMode function as a prop to the ToDo component
              deleteToDo={() => deleteToDo(item._id, setToDo)} // Pass deleteToDo function as a prop to the ToDo component
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
