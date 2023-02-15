import { useCallback, useState } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

export default function DarkOrLight(props) {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('light');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value ={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    )
}