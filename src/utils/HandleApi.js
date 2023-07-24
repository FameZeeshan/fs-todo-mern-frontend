// Import the axios library to make HTTP requests
import axios from "axios";

// Define the base URL for the backend API

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://fs-todo-mern-backend.onrender.com";

// Function to fetch all existing ToDo items from the backend API
const getAllToDo = (setToDo) => {
  // Make a GET request to the backend API to fetch all ToDo items
  axios.get(baseUrl).then(({ data }) => {
    // When the response is received, set the state 'toDo' with the fetched data
    console.log("data ---> ", data); // Log the fetched data to the console
    setToDo(data); // Update the state 'toDo' with the fetched data
  });
};

// Function to add a new ToDo item to the backend API
const addToDo = (text, setText, setToDo) => {
  // Make a POST request to the backend API to add a new ToDo item
  axios
    .post(`${baseUrl}/save`, { text }) // Send the 'text' data in the request body
    .then((data) => {
      // When the response is received, perform the following actions:
      console.log(data); // Log the response data to the console
      setText(""); // Clear the 'text' state to reset the input field
      getAllToDo(setToDo); // Fetch all ToDo items again to update the state 'toDo' with the latest data
    })
    .catch((err) => console.log(err)); // Log any error that occurs during the POST request
};

// Function to update an existing ToDo item in the backend API
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  // Make a POST request to the backend API to update a ToDo item
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text }) // Send the 'toDoId' and 'text' data in the request body
    .then((data) => {
      // When the response is received, perform the following actions:
      setText(""); // Clear the 'text' state to reset the input field
      setIsUpdating(false); // Set the 'isUpdating' state to false to exit update mode
      getAllToDo(setToDo); // Fetch all ToDo items again to update the state 'toDo' with the latest data
    })
    .catch((err) => console.log(err)); // Log any error that occurs during the POST request
};

// Function to delete an existing ToDo item from the backend API
const deleteToDo = (_id, setToDo) => {
  // Make a POST request to the backend API to delete a ToDo item
  axios
    .post(`${baseUrl}/delete`, { _id }) // Send the '_id' data in the request body
    .then((data) => {
      // When the response is received, perform the following actions:
      console.log(data); // Log the response data to the console
      getAllToDo(setToDo); // Fetch all ToDo items again to update the state 'toDo' with the latest data
    })
    .catch((err) => console.log(err)); // Log any error that occurs during the POST request
};

// Export all the functions to be used in other parts of the application
export { getAllToDo, addToDo, updateToDo, deleteToDo };
