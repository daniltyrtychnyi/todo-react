import SearchTaskForm from '../SearchTaskForm'
import Select from '../Select'
import Button from '../Button'
import {memo} from 'react'
import styles from './TodoControls.module.scss'

const TodoControls = () => {
    return (
        <div className={styles.todoControls}>
            <SearchTaskForm/>
            <Select/>
            <Button
                variant='switcher'
                label="Switch theme"
            />
        </div>
    )
}

export default memo(TodoControls)