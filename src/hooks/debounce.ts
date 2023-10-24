import {useEffect, useState} from "react";

export const useDebounce = (value: string, delay = 300): string => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(timer);
    }, [value])

    return debouncedValue
};