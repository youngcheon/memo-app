import {useState, useCallback} from 'react';

export default function useBoolean(defaultValue: boolean = false) {
    const [value, setValue] = useState(defaultValue);

    const setTrue = useCallback(() => {
        setValue(true);
    }, []);

    const setFalse = useCallback(() => {
        setValue(false);
    }, []);

    const toggle = useCallback(() => {
        setValue((x) => !x);
    }, []);

    return {value, setValue, setTrue, setFalse, toggle};
}
