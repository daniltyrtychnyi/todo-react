import SearchTaskForm from './SearchTaskForm'
import Select from './Select'
import Button from './Button'
import { memo } from 'react'

type TodoControlsProps = {
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void,
}

export default memo((props: TodoControlsProps) => {
    const {
        searchQuery,
        setSearchQuery,
    } = props

    return (
        <div className="todo__controls">
            <SearchTaskForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Select />
            <Button
                mode="switcher"
                type="button"
                label="Switch theme"
            />
        </div>
    )
})