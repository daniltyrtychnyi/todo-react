import SearchTaskForm from './SearchTaskForm'
import Select from './Select'
import Button from './Button'

export default () => {
    return (
        <div className="todo__controls">
            <SearchTaskForm/>
            <Select />
            <Button
                mode="switcher"
                type="button"
                label="Switch theme"
                extraAttrs={{
                    'data-js-theme-switcher': '',
                }}
            />
        </div>
    )
}