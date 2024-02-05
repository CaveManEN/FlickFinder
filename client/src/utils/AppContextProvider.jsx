import { useState } from 'react'
import AppContext from './AppContext'

const AppContextProvider = ({children}) => {
    const [data, setData] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <AppContext.Provider value={{data, setData, loggedIn, setLoggedIn}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;