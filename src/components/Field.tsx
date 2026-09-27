import type { ChangeEvent, RefObject } from 'react'

type FieldProps = {
    id: string,
    type?: 'search' | 'text',
    label: string,
    value: string,
    error?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    ref?: RefObject<HTMLInputElement | null>,
}

export default (props: FieldProps) => {
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
            {error && (
                <span
                    className="field__error"
                    title={error}
                >
                    {error}
                </span>
            )}
        </div>
    )
}