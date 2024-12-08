import { RiDeleteBin6Line } from "react-icons/ri";
const Todo = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-danger sbtn"
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
