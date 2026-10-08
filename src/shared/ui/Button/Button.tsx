import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
    className?: string,
    href?: string,
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
        href,
        variant,
        type = 'button',
        label,
        onClick,
        children,
        isDisabled,
    } = props

    const isLink = href === undefined
    const Component = isLink ? 'button' : 'a'

    return (
        <Component
            className={clsx(
                className,
                styles.button,
                variant && styles[variant],
            )}
            href={href}
            type={type}
            aria-label={label}
            title={label}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </Component>
    )
}

export default Button