import clsx from 'clsx'
import type {ReactNode} from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
    className?: string,
    variant?: 'switcher' | 'circle' | 'transparent',
    type?: 'button' | 'submit',
    label?: string,
    children?: ReactNode,
    onClick?: () => void,
    hasIcon?: boolean,
    title?: string,
}

const Button = (props: ButtonProps) => {
    const {
        className,
        variant,
        type = 'button',
        label,
        children,
        onClick,
        hasIcon = false,
        title,
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
        >
            {hasIcon && (
                <span className={styles.icon}>
                    {children}
                </span>
            )}
            {title}
        </button>
    )
}

export default Button