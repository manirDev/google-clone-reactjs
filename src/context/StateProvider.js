import React, {createContext, useContext, useReducer} from "react"

//preparing data layer
export const StateContext = createContext();

//children => refers to App which in index.js
//initialState => refers to what that app looks like when it is loaded

export const StateProvider =({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        
        {children}

    </StateContext.Provider>
);

//This is a Hook which allows us to pull infos freom data layer
//global hook 😆
export const useStateValue = () => useContext(StateContext);