import { Todo } from '@/widgets/todo'
import { Overlay } from '@/widgets/overlay'
import { TasksProvider } from '@/entities/task'
import { FormTaskProvider } from '@/features/form-task'
import './styles'

const App = () => {
    return (
        <TasksProvider>
            <FormTaskProvider>
                <Todo/>
                <Overlay/>
            </FormTaskProvider>
        </TasksProvider>
    )
}

export default App
