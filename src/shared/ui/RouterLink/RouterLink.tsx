import type { ReactNode, MouseEvent } from 'react'
import { BASE_URL } from '@/shared/constants'

type RouterLinkProps = {
    className?: string,
    to: string,
    children: ReactNode,
}

const RouterLink = (props: RouterLinkProps) => {
    const {
        className,
        to,
        children,
        ...rest
    } = props

    const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        window.history.pushState({}, '', to)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
        <a
            className={className}
            href={`${BASE_URL}${to}`}
            {...rest}
            onClick={onClick}
        >
            {children}
        </a>
    )
}

export default RouterLink
