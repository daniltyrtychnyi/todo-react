import clsx from 'clsx'
import {useState, useRef, useEffect} from 'react'
import type {Dispatch, SetStateAction, KeyboardEvent} from 'react'
import styles from './Select.module.scss'

type SelectProps = {
    selectedFilter: string,
    setSelectedFilter: Dispatch<SetStateAction<string>>,
}

const Select = (props: SelectProps) => {
    const {
        selectedFilter,
        setSelectedFilter,
    } = props

    const options = [
        {
            value: 'all',
            label: 'All'
        },
        {
            value: 'complete',
            label: 'Complete'
        },
        {
            value: 'incomplete',
            label: 'Incomplete'
        },
    ]

    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const selectBodyRef = useRef<HTMLDivElement | null>(null)

    const close = () => {
        setIsOpenDropdown(false)
    }

    const open = () => {
        setIsOpenDropdown(true)

        const selectedIndex = options.findIndex(({value}) => value === selectedFilter)

        setActiveIndex(selectedIndex === -1 ? 0 : selectedIndex)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (!isOpenDropdown) {
            return
        }

        const onArrowUpKeyDown = () => {
            event.preventDefault()
            setActiveIndex((index) =>
                index === 0 ? options.length - 1 : index - 1
            )
        }

        const onArrowDownKeyDown = () => {
            event.preventDefault()
            setActiveIndex((index) =>
                index === options.length - 1 ? 0 : index + 1
            )
        }

        const onSelectActiveOption = () => {
            event.preventDefault()

            const value = options[activeIndex].value

            setSelectedFilter(value)
            close()
        }

        const onEscapeKeyDown = () => {
            close()
        }

        const action = {
            ArrowUp: onArrowUpKeyDown,
            ArrowDown: onArrowDownKeyDown,
            Enter: onSelectActiveOption,
            ' ': onSelectActiveOption,
            Escape: onEscapeKeyDown,
        }[event.key]

        action?.()
    }

    useEffect(() => {
        if (!isOpenDropdown) {
            return
        }

        const onOutsideClick = (event: MouseEvent) => {
            if (!selectBodyRef.current) {
                return
            }

            if (!selectBodyRef.current.contains(event.target as Node)) {
                close()
            }
        }

        document.addEventListener('click', onOutsideClick)

        return () => {
            document.removeEventListener('click', onOutsideClick)
        }
    }, [isOpenDropdown])

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
                value={selectedFilter}
                onChange={(event) => setSelectedFilter(event.target.value)}
            >
                {options.map(({value, label}) => (
                    <option
                        value={value}
                        key={value}
                    >
                        {label}
                    </option>
                ))}
            </select>
            <div className={styles.body} ref={selectBodyRef}>
                <button
                    className={clsx(styles.button, {
                        [styles.isExpanded]: isOpenDropdown,
                    })}
                    type="button"
                    role="combobox"
                    aria-labelledby="task-filter-select-label"
                    aria-haspopup="listbox"
                    aria-controls="task-filter-select-dropdown"
                    aria-expanded={isOpenDropdown}
                    aria-activedescendant={isOpenDropdown ? `task-filter-select-option-${options[activeIndex].value}` : undefined}
                    onClick={isOpenDropdown ? close : open}
                    onKeyDown={onKeyDown}
                >
                    {selectedFilter}
                </button>
                <div
                    className={clsx(styles.dropdown, {
                        [styles.isExpanded]: isOpenDropdown,
                    })}
                    id="task-filter-select-dropdown"
                    role="listbox"
                    aria-labelledby="task-filter-select-label"
                >
                    {options.map(({value, label}, index) => (
                        <div
                            className={clsx(styles.option, {
                                [styles.isSelected]: selectedFilter === value,
                                [styles.isCurrent]: index === activeIndex,
                            })}
                            role="option"
                            aria-selected={selectedFilter === value}
                            id={`task-filter-select-option-${value}`}
                            key={value}
                            onClick={() => {
                                close()
                                setSelectedFilter(value)
                                setActiveIndex(index)
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Select