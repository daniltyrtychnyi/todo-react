import { TasksProvider } from '@/entities/task'
import { FormTaskProvider } from '@/features/form-task'
import { Todo } from '@/widgets/todo'
import { Overlay } from '@/widgets/overlay'

const HomePage = () => {
    return (
        <TasksProvider>
            <FormTaskProvider>
                <Todo/>
                <Overlay/>
            </FormTaskProvider>
        </TasksProvider>
    )
}

export default HomePage