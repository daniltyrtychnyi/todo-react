import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
    className?: string,
    variant?: 'switcher' | 'circle' | 'transparent',
    type?: 'button' | 'submit',
    label?: string,
    children?: ReactNode,
    onClick?: () => void,
    isDisabled?: boolean,
}

const Button = (props: ButtonProps) => {
    const {
        className,
        variant,
        type = 'button',
        label,
        onClick,
        children,
        isDisabled,
    } = props

    return (
        <button
            className={clsx(
                className,
                styles.button,
                variant && styles[variant],
            )}
            type={type}
            aria-label={label}
            title={label}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button