import { useContext } from 'react'
import TasksContext from './TasksContext'

const useTasksContext = () => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('useFormTaskContext must be used within FormTaskProvider')
    }

    return context
}

export default useTasksContext
