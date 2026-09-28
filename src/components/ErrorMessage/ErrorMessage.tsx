import {useContext, useEffect} from 'react'
import {TasksContext} from '../../context/TasksContext'
import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('TasksContext must be used in TasksProvider')
    }

    const {
        errorRequest,
        clearError,
    } = context

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