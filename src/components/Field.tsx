import '../styles/components/field.css'

type FieldProps = {
    id: string,
    type?: 'search',
    label: string,
    extraAttrs: Record<string, string>,
}

export default (props: FieldProps) => {
    const {
        id,
        type = 'text',
        label,
        extraAttrs,
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
                {...extraAttrs}
            />
        </div>
    )
}