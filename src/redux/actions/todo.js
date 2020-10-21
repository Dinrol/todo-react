export const setTodo = () => ({
    type: 'SET_TODO',
})

export const addTodo = (task) => ({
    type: 'ADD_TODO',
    payload: task
})

export const removeTodo = (index) => ({
    type: 'REMOVE_TODO',
    payload: index
})

export const clearTodo = () => ({
    type: 'CLEAR_TODO',
})
