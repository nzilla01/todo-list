import { useState } from "react";
import  "./styles.css";

export default function App() {
const [newItem, setNewItem] = useState(""); // State to hold the new item input
const [items, setItems] = useState([]);  // State to hold the list of items
function handleSubmit (e){
    e.preventDefault(); 
  
    const todo = {id: crypto.randomUUID(), title:newItem, completed: false};
    setItems (prevItems => [...prevItems, todo]); // Add new item to the list
    setNewItem(""); // Clear the input field after adding the item
}

function handleDelete(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }
return (
  <>
  <form className="form-row" onSubmit={handleSubmit}>
  <h3>New Item</h3>
  <input
    className="form-input"
    type="text"
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    placeholder="Enter item name"
  />
  <input
    className="form-submit"
    type="submit"
    value="Add"
    />
  </form>

  <h1>To do list</h1>

  <ul className="todo-list">
    {items.map((item) =>(
    <li className="todo-item" key ={item.id}>
      <input type="checkbox" />
      <span className="item1">{item.title}</span>
      <button className="delete-button" onClick={()=> handleDelete(item.id)}>Delete</button>
    </li>
    ))}
    </ul>
  </>
 )
}