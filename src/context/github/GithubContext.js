import { createContext, useReducer } from "react"; //useReducer replaces useState
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


export const GithubProvider = ({children}) => { //children are the components
   const initialState = { //replaces useState
    users: [],
    user: {}, //initial state, but when we fetch our user we want to fill this in
    repos:[],
    loading: false
   }

   const [state, dispatch] = useReducer(githubReducer, initialState)//no more set...

    return <GithubContext.Provider 
    value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext