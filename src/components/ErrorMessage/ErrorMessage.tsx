import {useEffect} from 'react'
import { useTasksContext } from '../../context/TasksContext'
import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
    const {
        errorRequest,
        clearError,
    } = useTasksContext()

    const title = 'Закрыть'

    const delayErrorMessage = 5000

    useEffect(() => {
        if (!errorRequest) {
            return
        }

        const timerErrorMessage = setTimeout(() => {
            clearError()
        }, delayErrorMessage)

        return () => {
            clearTimeout(timerErrorMessage)
        }
    }, [errorRequest, clearError])

    if (!errorRequest) {
        return null
    }

    return (
        <div
            className={styles.errorMessage}
            role="alert"
        >
            <button
                className={styles.closeButton}
                type="button"
                aria-label={title}
                title={title}
                onClick={clearError}
            >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>
            <span className={styles.text}>
                {errorRequest}
            </span>
        </div>
    )
}

export default ErrorMessage