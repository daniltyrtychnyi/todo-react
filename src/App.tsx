import './styles/components/todo.css'
import Todo from './components/Todo'
import Overlay from './components/Overlay'
import { TasksProvider } from './context/TasksContext'

function App() {


    return (
        <>
            <TasksProvider>
                <Todo />
                <Overlay />
            </TasksProvider>
        </>
    )
}

export default App
