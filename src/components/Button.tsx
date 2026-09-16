import '../styles/components/button.css'
import clsx from 'clsx'
import type {ReactNode} from 'react'

type ButtonProps = {
    className?: string,
    type?: 'button' | 'submit',
    mode?: 'switcher' | 'circle' | 'transparent',
    label?: string,
    children?: ReactNode,
    extraAttrs: Record<string, string>,
}

export default (props: ButtonProps) => {
    const {
        className,
        type = 'button',
        mode,
        label,
        children,
        extraAttrs,
    } = props

    return (
        <button
            className={clsx('button', className, {
                [`button--${mode}`]: mode,
            })}
            type={type}
            aria-label={label}
            title={label}
            {...extraAttrs}
        >
            <span className="button__icon">
                {children}
            </span>
        </button>
    )
}