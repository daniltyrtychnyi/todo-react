import '../styles/components/select.css'

export default () => {
    return (
        <div className="select">
            <label
                htmlFor="taskFilter"
                className="select__label visually-hidden"
                id="task-filter-select-label"
            >
                Task filter
            </label>
            <select
                id="taskFilter"
                className="select__original-control button"
                tabIndex={-1}
                defaultValue="All"
            >
                <option value="All">All</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
            </select>
            <div className="select__body">
                <div
                    className="select__button button"
                    tabIndex={0}
                    role="combobox"
                    aria-labelledby="task-filter-select-label"
                    aria-haspopup="listbox"
                    aria-controls="task-filter-select-dropdown"
                    aria-expanded={false}
                >
                    All
                </div>
                <div
                    className="select__dropdown"
                    id="task-filter-select-dropdown"
                    role="listbox"
                    aria-labelledby="task-filter-select-label"
                >
                    <div
                        className="select__option is-selected"
                        role="option"
                        aria-selected={true}
                        id="task-filter-select-option-all"
                    >
                        All
                    </div>
                    <div
                        className="select__option"
                        role="option"
                        aria-selected={false}
                        id="task-filter-select-option-complete"
                    >
                        Complete
                    </div>
                    <div
                        className="select__option"
                        role=" option"
                        aria-selected={false}
                        id=" task-filter-select-option-incomplete"
                    >
                        Incomplete
                    </div>
                </div>
            </div>
        </div>
    )
}