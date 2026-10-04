import { createContext, useContext } from 'react'
import type { Dispatch, SetStateAction, ReactNode } from 'react'
import useFormDialog from './useFormDialog'

type FormTaskContext = {
    isDialogOpen: boolean,
    newTaskTitle: string,
    setNewTaskTitle: Dispatch<SetStateAction<string>>
    editingTaskId: string | null,
    formError: string,
    setFormError: Dispatch<SetStateAction<string>>,
    openDialog: () => void,
    openEditDialog: (id: string, title: string) => void,
    closeDialog: () => void,
}

type FormTaskProviderProps = {
    children: ReactNode,
}

const FormTaskContext = createContext<FormTaskContext | undefined>(undefined)

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

export const useFormTaskContext = () => {
    const context = useContext(FormTaskContext)

    if (!context) {
        throw new Error('useFormTaskContext must be used within FormTaskProvider')
    }

    return context
}
