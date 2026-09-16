import Field from './Field'

export default () => {
    return (
        <form className="todo__search-task-form" data-js-todo-search-task-form>
            <Field
                id="search-task"
                type="search"
                label="Search note..."
                extraAttrs={{
                    'data-js-todo-search-task-input': '',
                }}
            />
        </form>
    )
}