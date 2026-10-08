import type { SubmitEvent } from 'react'
import { useTasksContext } from '@/entities/task'
import Field from '@/shared/ui/Field'
import styles from './SearchTaskForm.module.scss'

const SearchTaskForm = () => {
    const {
        searchQuery,
        setSearchQuery,
    } = useTasksContext()

    const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form className={styles.searchTaskForm} onSubmit={onSubmit}>
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