import TodoItem from './TodoItem'

export default () => {
    return (
        <ul className="todo__list" data-js-todo-list>
            <TodoItem />
        </ul>
    )
}