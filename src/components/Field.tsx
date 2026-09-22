import '../styles/components/field.css'
import type { ChangeEvent, RefObject } from 'react'

type FieldProps = {
    id: string,
    type?: 'search',
    label: string,
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    ref?: RefObject<HTMLInputElement | null>,
}

export default (props: FieldProps) => {
    const {
        id,
        type = 'text',
        label,
        value,
        onChange,
        ref,
    } = props

    return (
        <div className="field">
            <label
                htmlFor={id}
                className="field__label"
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                className="field__input"
                placeholder=" "
                autoComplete="off"
                value={value}
                onChange={onChange}
                ref={ref}
            />
        </div>
    )
}