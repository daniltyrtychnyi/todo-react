import { memo } from 'react'
import {useFormTaskContext} from '@/features/form-task'
import { useTasksContext, TodoItem } from '@/entities/task'
import EmptyMessage from '@/shared/ui/EmptyMessage'
import styles from './TodoList.module.scss'

const TodoList = () => {
    const {
        tasks,
        filteredTasks,
        toggleTask,
        deleteTask,
        disappearingTaskId,
    } = useTasksContext()

    const {
        openEditDialog,
    } = useFormTaskContext()

    if (filteredTasks.length === 0) {
        const isFilterTasksEmpty = tasks.length > 0

        return <EmptyMessage label={isFilterTasksEmpty ? 'No tasks found' : 'No tasks yet'} />
    }

    return (
        <ul className={styles.list}>
            {filteredTasks.map((task) => (
                <TodoItem
                    {...task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                    onEdit={openEditDialog}
                    isDisappearing={disappearingTaskId}
                    key={task.id}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList)