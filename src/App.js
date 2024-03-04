import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer detalle="Todavia no tenemos nada cargado"></ItemListContainer>
    </div>
  );
}

export default App;
