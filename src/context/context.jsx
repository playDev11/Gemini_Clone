import {createContext} from 'react'

export const Context = createContext();

const contextProvider = (props) => {
    


    const contextValue = {

    }
    return(
        <contextProvider value={contextValue}>
            {props.children}
        </contextProvider>
    )
}

export default contextProvider