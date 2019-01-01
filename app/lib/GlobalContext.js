import React from 'react';

const defaultContext = {
    latitude: '',
    longitude: '',
    error: '',
    setLocation: () => {}
}

export const GlobalContext = React.createContext(defaultContext)