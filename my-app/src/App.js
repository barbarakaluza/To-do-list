import TaskList from './components/TaskList/TaskList';
import TaskItem from './components/TaskItem/TaskItem';

import './App.css';


function App() {
  return (
    <div className="App">
     <h1>Twoja lista zadań</h1>
     <TaskList>
          <TaskItem id="5" text="zrobić zakupy"/>
     </TaskList>
    </div>
  );
}

export default App;
