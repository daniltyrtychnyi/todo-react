import type { Task } from '../../model/types'

const API_URL = 'http://localhost:3000/tasks'

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
    getAll: () => request<Task[]>(API_URL),

    add: (task: Omit<Task, 'id'>) => {
        return request<Task>(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(task),
        })
    },

    edit: (id: string, title: string) => {
        return request<Task>(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({title})
        })
    },

    delete: (id: string) => {
        return request<Task>(`${API_URL}/${id}`, {method: 'DELETE'})
    },

    toggle: (id: string, isDone: boolean) => {
        return request<Task>(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({isDone})
        })
    },
}

export default tasksAPI
