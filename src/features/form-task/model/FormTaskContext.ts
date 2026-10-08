import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

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

const FormTaskContext = createContext<FormTaskContext | undefined>(undefined)

export default FormTaskContext


