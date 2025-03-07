import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = (({children}) => {
    const [isDark, setIsDark] = useState(false)
    function toggle() {
        setIsDark(!isDark)
    }

    return (
        <ThemeContext.Provider value={{isDark, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
})