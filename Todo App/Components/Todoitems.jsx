import Todo from "./Todo";  
const Todoitems =({todoItems}) => {
    return (
      <div className="itemcontainer">
        {todoItems.map((item) => (
          <Todo todoDate={item.dueDate} todoName={item.name}></Todo>
        ))}
      </div>
    );
}
export default Todoitems;