import { useTasksContext } from '@/entities/task'
import Field from '@/shared/ui/Field'
import styles from './SearchTaskForm.module.scss'

const SearchTaskForm = () => {
    const {
        searchQuery,
        setSearchQuery,
    } = useTasksContext()

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