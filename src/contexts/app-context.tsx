import React, { createContext, useReducer, Dispatch } from 'react';
import { appReducer } from '../reducers/app-reducer';

type AppInitialStateType = {
    value?: any;
};

const initialState = {
    value: 0,
};

const AppContext = createContext<{
    state: AppInitialStateType;
    dispatch: Dispatch<{ type: string; payload: any }>;
}>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = <T extends { type: string; payload: T }>(
    data: AppInitialStateType,
    action: T,
) => ({
    value: appReducer(data, action),
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
