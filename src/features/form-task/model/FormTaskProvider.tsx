import type { ReactNode } from 'react'
import useFormDialog from './useFormDialog'
import FormTaskContext from './FormTaskContext'

type FormTaskProviderProps = {
    children: ReactNode,
}
export const FormTaskProvider = (props: FormTaskProviderProps) => {
    const { children } = props

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

    return (
        <FormTaskContext.Provider
            value={{
                isDialogOpen,
                newTaskTitle,
                setNewTaskTitle,
                editingTaskId,
                formError,
                setFormError,
                openDialog,
                openEditDialog,
                closeDialog,
            }}
        >
            {children}
        </FormTaskContext.Provider>
    )
}

export default FormTaskProvider
