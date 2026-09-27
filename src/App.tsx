import Todo from './components/Todo'
import Overlay from './components/Overlay'
import { TasksProvider } from './context/TasksContext'
import ErrorMessage from './components/ErrorMessage'

function App() {
    return (
        <>
            <TasksProvider>
                <Todo />
                <ErrorMessage />
                <Overlay />
            </TasksProvider>
        </>
    )
}

export default App
