import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [url, setUrl] = useState('');
    const [discount, setDiscount] = useState(15);
    const [desiredYield, setDesiredYield] = useState('');
    const [crr, setCrr] = useState(20);
    const [duration, setDuration] = useState(3);
    const [fetchedData, setFetchedData] = useState(null);

    return (
        <AppContext.Provider value={{ url, setUrl, discount, setDiscount, desiredYield, setDesiredYield, crr, setCrr, duration, setDuration, fetchedData, setFetchedData }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}