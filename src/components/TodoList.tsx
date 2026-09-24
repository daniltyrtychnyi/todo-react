import TodoItem from './TodoItem'
import type { Task } from '../types'
import { memo } from 'react'

type TodoListProps = {
    tasks: Task[],
    onChange: (id: string) => void,
    deleteTask: (id: string) => void,
    setIsDialogOpen: (open: boolean) => void,
    setNewTaskTitle: (title: string) => void,
    setEditingTaskId: (editingTaskId: string) => void,
    filterTasksBySearch: Task[] | null,
}

export default memo((props: TodoListProps) => {
    const {
        tasks,
        onChange,
        deleteTask,
        setIsDialogOpen,
        setNewTaskTitle,
        setEditingTaskId,
        filterTasksBySearch,
    } = props

    return (
        <ul className="todo__list">
            {(filterTasksBySearch ?? tasks).map((task) => (
                <TodoItem
                    task={task}
                    key={task.id}
                    onChange={onChange}
                    deleteTask={deleteTask}
                    setIsDialogOpen={setIsDialogOpen}
                    setNewTaskTitle={setNewTaskTitle}
                    setEditingTaskId={setEditingTaskId}
                />
            ))}
        </ul>
    )
})