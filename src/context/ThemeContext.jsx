import React, { createContext, useState, useContext } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the Theme Context
export const useTheme = () => {
    return useContext(ThemeContext);
};
