function Row2() {
    let Todo = "BUY BOOKS";
    let Date = "26/09/2024";
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{Todo}</div>
        <div className="col-3">{Date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sbtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Row2;