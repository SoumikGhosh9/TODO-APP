
const Todo =({todoName, todoDate}) => {
    return (
      <div className="container">
          <div className="row">
            <div className="col-4">{todoName}</div>
            <div className="col-3">{todoDate}</div>
            <div className="col-1">
              <button type="button" className="btn btn-danger sbtn">
                Delete
              </button>
            </div>
          </div>
        </div>
    );
}
export default Todo;