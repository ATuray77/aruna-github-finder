import { createContext, useReducer } from "react"
import alertReducer from './AlertReducer'

const AlertContext = createContext() //creates context

export const AlertProvider = ({ children }) => {//provider taking in children as prop
    const initialState = null

    //using reducer hook. takes in state and dispatch function
    const [state, dispatch] = useReducer(alertReducer, 
        initialState) //useReducer is taking the reducer and the initial state
    
    //set an alert: information to send to the reducer
    const setAlert = (msg, type) => {
       dispatch({
        type: 'SET_ALERT',
        payload: {msg, type},
       })
       setTimeout(() => dispatch({ type: 'REMOVE_ALERT'}), 3000) //in 3 sec

    }
    
    //values are passed into the provider which sends them to the components
    return <AlertContext.Provider value={{alert: state, setAlert}}> 
        {children}
    </AlertContext.Provider>
} 

export default AlertContext
