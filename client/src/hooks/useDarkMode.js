import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('wwc_darkmode',initialValue)

    useEffect(() => {
        const body = document.body;
        if(darkMode === true){
            body.classList.add('dark_mode')
            
        } else {
            body.classList.remove('dark_mode')
        
        };
    },[darkMode])

    return [darkMode, setDarkMode]
}

export default useDarkMode;