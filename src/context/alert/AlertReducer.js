const alertReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload //this is the message and type in context
        case 'REMOVE_ALERT':
            return null //which is the initial state
        default:
            return state
    }
}

export default alertReducer