import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function List() {
    // let foodItems = ["Bread", "Milk", "Cheese", "Butter", "Eggs"];
    let foodItems = [];
    // let emptyMessage = foodItems.length === 0 ? <p>No items to display</p> : null;
  return (
    <div>
      <h1>My To-Do List</h1>
      {/* {emptyMessage} */}
      {foodItems.length === 0 && <p>No items to display</p>}     
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default List;