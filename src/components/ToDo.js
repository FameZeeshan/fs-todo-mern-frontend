import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

// Define a functional component named 'ToDo', which takes three props: 'text', 'updateMode', and 'deleteToDo'
const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    // Render a div with the class name 'todo', representing a ToDo item
    <div className="todo">
      {/* Render a div with the class name 'text', displaying the 'text' prop value */}
      <div className="text">{text}</div>

      {/* Render a div with the class name 'icons', containing edit and delete icons */}
      <div className="icons">
        {/* Render the edit icon from the 'react-icons/bi' package with class name 'icon' */}
        {/* Add an 'onClick' event handler to the edit icon, calling the 'updateMode' function */}
        <BiEdit className="icon" onClick={updateMode} />

        {/* Render the delete icon from the 'react-icons/ai' package with class name 'icon' */}
        {/* Add an 'onClick' event handler to the delete icon, calling the 'deleteToDo' function */}
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

// Export the 'ToDo' component to be used in other parts of the application
export default ToDo;
