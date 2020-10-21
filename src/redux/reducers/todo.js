const initialState = {
    todos: [],
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                todos: action.payload,
            }
        default:
            return state
    }
}

export default pizzas;