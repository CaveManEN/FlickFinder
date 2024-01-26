import { useState } from 'react'
import AppContext from './AppContext'

const AppContextProvider = ({children}) => {
    const [data, setData] = useState(null)

    return (
        <AppContext.Provider value={{data, setData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;