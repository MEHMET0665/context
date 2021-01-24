import Navbar from "./Components/Navbar";
import Title from './Components/Title';
import TodoList from './Components/TodoList'
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
     <Title/>
     <Navbar/>
     <TodoList/>
     </ThemeContextProvider>
    </div>
  );
}

export default App;
