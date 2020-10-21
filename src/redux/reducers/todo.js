const initialState = {
    items: [
        'ЗАДАЧКА РАЗ ',
        'ЗАДАЧКА  ДВА ',
        'ЗАДАЧКА ТРИ',
        'ЗАДАЧКА РАЗ ДВА ТРИ',
    ],
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state
            }
        case 'ADD_TODO':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                items: state.items.filter((item, index) => index !== action.payload)
            }
        case 'CLEAR_TODO':
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}

export default todo;