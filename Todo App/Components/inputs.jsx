function inputs() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-4">
            <input type="search" placeholder="Enter task" />
          </div>
          <div className="col-3">
            <input type="date" />
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-success sbtn">
              Add
            </button>
          </div>
        </div>
      </div>
  );
}
export default inputs;