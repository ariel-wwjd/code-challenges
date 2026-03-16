import { useState } from "react";
import "./ItemList.css";

function ItemList({ onNext }) {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };
  const handleDeleteLastItem = () => {
    setItems(prevItems => prevItems.slice(0, -1));
    };


  return (
    <div className="input-group">
      <h8k-navbar header="Item List Manager"></h8k-navbar>
      <div className="App">
        <h1>Item List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} className="add-button" data-testid="add-button">
          Add Item
        </button>
        <button  onClick={handleDeleteLastItem} className="delete-button">
            ✕
        </button>

        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">{item}</li>
          ))}
        </ul>

        <button onClick={onNext} className="next-button">
          Next Assignment
        </button>

      </div>
    </div>
  );
}

export default ItemList;
