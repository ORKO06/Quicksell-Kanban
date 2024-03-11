import "./App.css";
import Header from "./component/Header/Header";
import Kanban from "./component/Screen/Kanban";
import DataContextProvider from "./utils/DataContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Header />
        <Kanban />
      </DataContextProvider>
    </div>
  );
}

export default App;
