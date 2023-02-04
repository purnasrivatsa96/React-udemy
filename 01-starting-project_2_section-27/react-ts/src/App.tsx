import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodosContextProvider } from "./store/todos-context";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <NewTodo></NewTodo>
      <Todos></Todos>
    </TodosContextProvider>
  );
};

export default App;
