import Todo from '../widgets/Todo/Todo'
import Overlay from '@/widgets/Overlay/Overlay'
import { TasksProvider } from '@/entities/task/model/TasksContext'
import './styles'

const App = () => {
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
