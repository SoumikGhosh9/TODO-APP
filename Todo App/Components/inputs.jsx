import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
function inputs({onNewItem}) {
  const [itemName, setItemName] = useState("");
  const [Duedate, setDuedate] = useState("");

  const handleItemName = (e) => {
    setItemName(e.target.value);
  }
  const handleItemDate = (e) => {
    setDuedate(e.target.value);
  }

  const handleOnclick = () => {
    onNewItem(itemName, Duedate);
    setItemName("");
    setDuedate("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input
            type="search"
            placeholder="Enter task"
            onChange={handleItemName}
            value={itemName}
          />
        </div>
        <div className="col-3">
          <input type="date" onChange={handleItemDate} value={Duedate} />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success sbtn"
            onClick={() => handleOnclick()}
          >
            <MdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default inputs;