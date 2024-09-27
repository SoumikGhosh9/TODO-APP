import MainApp from "./components/mainapp";
import Inputs from "./components/inputs";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo_container">
        <MainApp />
        <div className="itemcontainer">
          <Inputs />
          <Row1 />
          <Row2 />
        </div>
      </center>
    </>
  );
}

export default App
