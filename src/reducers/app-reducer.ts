export enum Types {
    Append = 'ACTION_APPEND',
}

export const appReducer = <T extends { type: string; payload: T }>(
    state: any,
    action: T,
) => {
    switch (action.type) {
        case Types.Append:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
