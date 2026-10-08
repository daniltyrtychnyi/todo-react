import styles from './EmptyMessage.module.scss'

type EmptyMessageProps = {
    label?: string,
}

const EmptyMessage = (props: EmptyMessageProps) => {
    const {
        label,
    } = props

    return (
        <div className={styles.emptyWrapper}>
            {label}
        </div>
    )
}

export default EmptyMessage
