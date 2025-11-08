import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const guardado = localStorage.getItem(key);
            return guardado ? JSON.parse(guardado) : initialValue;
        } catch (error) {
            console.error('Error al leer localStorage', error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log('Error al guardar en localStorage');
        }
    }, [key, value]);

    return [value, setValue] as const;
}
