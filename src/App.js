import Navbar from "./Components/Navbar";
import Title from './Components/Title';
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="App">
     <TodoList/>
     <Navbar/>
     <Title/>
    </div>
  );
}

export default App;
