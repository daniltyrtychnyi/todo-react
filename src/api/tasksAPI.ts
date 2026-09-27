import type {Task, CreateTask} from '../types'

const URL = 'http://localhost:3000/tasks'

const headers = {
    'Content-Type': 'application/json',
}

const request = <T>(url: string, options?: RequestInit): Promise<T> => {
    return fetch(url, options).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`)
        }

        return response.json()
    })
}

const tasksAPI = {
    getAll: () => request<Task[]>(URL),

    add: (task: CreateTask) => {
        return request<Task>(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(task),
        })
    },

    edit: (id: string, title: string) => {
        return request<Task>(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({title})
        })
    },

    delete: (id: string) => {
        return request<void>(`${URL}/${id}`, {method: 'DELETE'})
    },

    toggle: (id: string, isDone: boolean) => {
        return request<Task>(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({isDone})
        })
    },
}

export default tasksAPI
