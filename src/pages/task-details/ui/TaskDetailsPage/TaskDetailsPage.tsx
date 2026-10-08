import {useState, useEffect} from 'react'
import {tasksAPI} from '@/entities/task'
import type {Task} from '@/entities/task'
import type {RouteParams} from '@/shared/types'
import Loader from '@/shared/ui/Loader'
import Button from '@/shared/ui/Button'
import EmptyMessage from '@/shared/ui/EmptyMessage'
import RouterLink from '@/shared/ui/RouterLink'
import buttonStyles from '@/shared/ui/Button/Button.module.scss'
import styles from './TaskDetailsPage.module.scss'

type TaskDetailsPageProps = {
    params: RouteParams
}

const TaskDetailsPage = (props: TaskDetailsPageProps) => {
    const {params} = props
    const taskId = params.id

    const [task, setTask] = useState<Task | null>(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        tasksAPI.getById(taskId)
            .then((taskData) => {
                setTask(taskData)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [taskId])

    if (isLoading) {
        return (
            <div className={styles.body}>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.body}>
                <EmptyMessage />
                <h1>Task not found</h1>
                <div className={styles.actions}>
                    <Button variant="transparent" onClick={() => window.history.back()}>
                        Go back
                    </Button>
                    <RouterLink
                        className={buttonStyles.button}
                        to="/"
                    >
                        Go to home
                    </RouterLink>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.body}>
            <h1>
                {task?.title}
            </h1>
            <p>
                {task?.isDone ? 'Task completed' : 'Task not completed'}
            </p>
            <div className={styles.actions}>
                <Button variant="transparent" onClick={() => window.history.back()}>
                    Go back
                </Button>
                <RouterLink
                    className={buttonStyles.button}
                    to="/"
                >
                    Go to home
                </RouterLink>
            </div>
        </div>
    )
}

export default TaskDetailsPage
