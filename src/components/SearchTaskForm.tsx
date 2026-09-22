import Field from './Field'

type SearchTaskFormProps = {
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void,
}

export default (props: SearchTaskFormProps) => {
    const {
        searchQuery,
        setSearchQuery,
    } = props

    return (
        <form className="todo__search-task-form" data-js-todo-search-task-form>
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