import Button from '@/shared/ui/Button'
import ErrorMessage from '@/shared/ui/EmptyMessage'
import RouterLink from '@/shared/ui/RouterLink'
import buttonStyles from '@/shared/ui/Button/Button.module.scss'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
    return (
        <div className={styles.body}>
            <ErrorMessage/>
            <h1>404! Not Found Page</h1>
            <div className={styles.actions}>
                <Button variant="transparent" onClick={() => window.history.back()}>
                    Go back
                </Button>
                <RouterLink
                    className={buttonStyles.button}
                    to="/"
                >
                    Go to home
                </RouterLink>
            </div>
        </div>
    )
}

export default NotFoundPage