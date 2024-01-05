
import "./App.css";
import menus from "./data";
import Parent from "./components/Parent";

function App({data}) {

  return (
      <div>
        <Parent data = {menus}/>
      </div>

  );
}

export default App;
