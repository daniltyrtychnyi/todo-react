import SearchTaskForm from './SearchTaskForm'
import Select from './Select'
import Button from './Button'
import { memo } from 'react'

export default memo(() => {
    return (
        <div className="todo__controls">
            <SearchTaskForm />
            <Select />
            <Button
                mode="switcher"
                type="button"
                label="Switch theme"
            />
        </div>
    )
})