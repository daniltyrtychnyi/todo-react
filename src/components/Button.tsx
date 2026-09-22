import '../styles/components/button.css'
import clsx from 'clsx'
import type {ReactNode} from 'react'

type ButtonProps = {
    className?: string,
    type?: 'button' | 'submit',
    mode?: 'switcher' | 'circle' | 'transparent',
    label?: string,
    children?: ReactNode,
    onClick?: () => void,
}

export default (props: ButtonProps) => {
    const {
        className,
        type = 'button',
        mode,
        label,
        children,
        onClick,
    } = props

    return (
        <button
            className={clsx('button', className, {
                [`button--${mode}`]: mode,
            })}
            type={type}
            aria-label={label}
            title={label}
            onClick={onClick}
        >
            <span className="button__icon">
                {children}
            </span>
        </button>
    )
}