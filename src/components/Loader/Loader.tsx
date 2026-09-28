import clsx from 'clsx'
import styles from './Loader.module.scss'
import {useTasksContext} from '../../context/TasksContext'

const Loader = () => {
    const {
        isLoading,
    } = useTasksContext()

    return (
        <span className={clsx(styles.loader, {
            [styles.isLoading]: isLoading,
        })}
        />
    )
}

export default Loader