import HomePage from '@/pages/home'
import TaskDetailsPage from '@/pages/task-details'
import NotFoundPage from '@/pages/not-found'
import Router from './routing'
import './styles'

const App = () => {
    const routes = {
        '/': HomePage,
        '/tasks/:id': TaskDetailsPage,
        '*': NotFoundPage,
    }

    return (
        <Router routes={routes} />
    )
}

export default App
