import "./App.css";
import Leftbar from "./components/Leftbar";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className=" main d-flex">
      <div className="w-75">
        <Main />
      </div>
      <div className="w-25">
        <Leftbar />
      </div>
    </div>
  );
}

export default App;
