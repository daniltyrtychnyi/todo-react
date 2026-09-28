import Field from '../Field/Field'
import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import styles from './SearchTaskForm.module.scss'

const SearchTaskForm = () => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('Tasks')
    }

    const {
        searchQuery,
        setSearchQuery,
    } = context

    return (
        <form className={styles.searchTaskForm}>
            <Field
                id="search-task"
                type="search"
                label="Search note..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}

export default SearchTaskForm