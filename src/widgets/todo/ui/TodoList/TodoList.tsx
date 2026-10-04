import clsx from 'clsx'
import { memo } from 'react'
import {useFormTaskContext} from '@/features/form-task'
import { useTasksContext, TodoItem } from '@/entities/task'
import styles from './TodoList.module.scss'

const TodoList = () => {
    const {
        tasks,
        filterTasksBySearch,
        toggleTask,
        deleteTask,
    } = useTasksContext()

    const {
        openEditDialog,
    } = useFormTaskContext()

    const isEmpty = filterTasksBySearch?.length === 0 || tasks.length === 0

    if (isEmpty) {
        return (
            <div className={clsx(styles.emptyWrapper, {
                [styles.isVisible]: isEmpty,
            })}
            >
                Empty...
            </div>
        )
    }

    return (
        <ul className={styles.list}>
            {(filterTasksBySearch ?? tasks).map((task) => (
                <TodoItem
                    {...task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                    onEdit={openEditDialog}
                    key={task.id}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList)