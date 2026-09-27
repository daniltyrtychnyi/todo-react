import {useContext, useEffect} from 'react'
import {TasksContext} from '../context/TasksContext'

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
            className="error-message"
            role="alert"
        >
            <button
                className="error-message__close-button"
                type="button"
                aria-label={title}
                title={title}
                onClick={clearError}
            >
                <span className="error-message__close-button-line"></span>
                <span className="error-message__close-button-line"></span>
            </button>
            <span className="error-message__text">
                        {errorRequest}
                    </span>
        </div>
    )
}

export default ErrorMessage