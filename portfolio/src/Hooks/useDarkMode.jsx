import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode() {
    const [ dark, setDark ] = useLocalStorage('darkmode', 'false');

    useEffect(() => {
        const body = document.querySelector('body');
        if (dark) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [dark])
    return [dark, setDark];
}