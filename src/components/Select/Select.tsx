import clsx from 'clsx'
import styles from './Select.module.scss'

const Select = () => {
    return (
        <div>
            <label
                htmlFor="taskFilter"
                className="visually-hidden"
                id="task-filter-select-label"
            >
                Task filter
            </label>
            <select
                id="taskFilter"
                className={styles.originalControl}
                tabIndex={-1}
                defaultValue="All"
            >
                <option value="All">All</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
            </select>
            <div className={styles.body}>
                <div
                    className={styles.button}
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
                    className={styles.dropdown}
                    id="task-filter-select-dropdown"
                    role="listbox"
                    aria-labelledby="task-filter-select-label"
                >
                    <div
                        className={clsx(styles.option, styles.isSelected)}
                        role="option"
                        aria-selected={true}
                        id="task-filter-select-option-all"
                    >
                        All
                    </div>
                    <div
                        className={styles.option}
                        role="option"
                        aria-selected={false}
                        id="task-filter-select-option-complete"
                    >
                        Complete
                    </div>
                    <div
                        className={styles.option}
                        role="option"
                        aria-selected={false}
                        id="task-filter-select-option-incomplete"
                    >
                        Incomplete
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select