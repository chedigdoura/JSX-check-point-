import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Table from "./JsFiles/Table";
import Sidebar from './JsFiles/Sidebar';
import Customtitle from './JsFiles/Customtitle';

function App() {
  return (
    <>
    <div className="backgroundColorExtreme">
    <div className="backgroundColor">
      <div className="backOne">
        <Sidebar />
        <Customtitle/>
        <Table />
        <Table />
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
