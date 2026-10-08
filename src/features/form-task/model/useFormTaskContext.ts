import { useContext } from 'react'
import FormTaskContext from './FormTaskContext'

const useFormTaskContext = () => {
    const context = useContext(FormTaskContext)

    if (!context) {
        throw new Error('useFormTaskContext must be used within FormTaskProvider')
    }

    return context
}

export default useFormTaskContext
