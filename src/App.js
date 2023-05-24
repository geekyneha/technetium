
import './App.css';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList'
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {
  return (
    <div className="App">
      <h1>Add to do</h1>
      <AddTodo />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
