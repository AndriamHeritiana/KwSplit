import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
    colors: typeof lightColors;
}

// Light theme colors
const lightColors = {
    primary: '#0066CC',
    secondary: '#00AA55',
    accent: '#8844EE',
    background: '#FFFFFF',
    card: '#F9F9F9',
    text: '#333333',
    textSecondary: '#666666',
    border: '#E0E0E0',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    chart: {
        main: '#0066CC',
        submeter: '#00AA55',
    }
};

// Dark theme colors
const darkColors = {
    primary: '#4D94FF',
    secondary: '#4DC591',
    accent: '#AA88FF',
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#BBBBBB',
    border: '#333333',
    success: '#81C784',
    warning: '#FFB74D',
    error: '#E57373',
    chart: {
        main: '#4D94FF',
        submeter: '#4DC591',
    }
};

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
    colors: lightColors,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const deviceColorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeType>(deviceColorScheme === 'dark' ? 'dark' : 'light');

    useEffect(() => {
        setTheme(deviceColorScheme === 'dark' ? 'dark' : 'light');
    }, [deviceColorScheme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const colors = theme === 'light' ? lightColors : darkColors;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
            {children}
        </ThemeContext.Provider>
    );
};