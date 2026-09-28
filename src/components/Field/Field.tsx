import type { ChangeEvent, RefObject } from 'react'
import styles from './Field.module.scss'

type FieldProps = {
    id: string,
    type?: 'search' | 'text',
    label: string,
    value: string,
    error?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    ref?: RefObject<HTMLInputElement | null>,
}

const Field = (props: FieldProps) => {
    const {
        id,
        type = 'text',
        label,
        value,
        error,
        onChange,
        ref,
    } = props

    return (
        <div className={styles.field}>
            <label
                htmlFor={id}
                className={styles.label}
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                className={styles.input}
                placeholder=" "
                autoComplete="off"
                value={value}
                onChange={onChange}
                ref={ref}
            />
            {error && (
                <span
                    className={styles.error}
                    title={error}
                >
                    {error}
                </span>
            )}
        </div>
    )
}

export default Field