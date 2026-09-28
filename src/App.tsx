import Todo from './components/Todo/Todo'
import Overlay from './components/Overlay/Overlay'
import { TasksProvider } from './context/TasksContext'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

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
