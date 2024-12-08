import Todo from "./Todo";  
const Todoitems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="itemcontainer">
      {todoItems.map((item) => (
        <Todo  key={todoItems} todoDate={item.dueDate} todoName={item.name}
        onDeleteClick={onDeleteClick} 
        ></Todo>
      ))}
    </div>
  );
};
export default Todoitems;