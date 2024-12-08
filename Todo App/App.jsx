import MainApp from "./components/mainapp";
import Inputs from "./components/inputs";
import Todoitems from "./components/Todoitems";
import React, { useState } from "react";  
import "./App.css";
import Message from "./components/Message";
function App() {
  

const [items, setItems] = useState([]);
const handlenewItem = (itemName, itemDate) => {
  const newItems = [...items,
     {name: itemName, dueDate: itemDate}
    ];
    setItems(newItems);
}
const handleDeleteItem = (itemName) => {
  const NewItems = items.filter((item) => item.name !== itemName);
  setItems(NewItems)
}


  return (
    <>
      <center className="todo_container">
        <MainApp />
        <Inputs onNewItem={handlenewItem} />
        {items.length === 0 && <Message />}
        <Todoitems todoItems={items} onDeleteClick = {handleDeleteItem} ></Todoitems>
      </center>
    </>
  );
}

export default App
