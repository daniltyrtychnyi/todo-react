import {useMemo} from 'react'
import type {ReactNode} from 'react'
import useFormDialog from './useFormDialog'
import FormTaskContext from './FormTaskContext'

type FormTaskProviderProps = {
    children: ReactNode,
}
export const FormTaskProvider = (props: FormTaskProviderProps) => {
    const {children} = props

    const {
        isDialogOpen,
        newTaskTitle,
        setNewTaskTitle,
        editingTaskId,
        formError,
        setFormError,
        openDialog,
        openEditDialog,
        closeDialog,
    } = useFormDialog()

    const value = useMemo(() => ({
        isDialogOpen,
        newTaskTitle,
        setNewTaskTitle,
        editingTaskId,
        formError,
        setFormError,
        openDialog,
        openEditDialog,
        closeDialog,
    }), [
        isDialogOpen,
        newTaskTitle,
        setNewTaskTitle,
        editingTaskId,
        formError,
        setFormError,
        openDialog,
        openEditDialog,
        closeDialog,
    ])
    return (
        <FormTaskContext.Provider value={value}>
            {children}
        </FormTaskContext.Provider>
    )
}

export default FormTaskProvider
