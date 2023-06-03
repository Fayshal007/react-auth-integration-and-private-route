import { createContext } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {
    const user = {displayName: 'Fayshal'}
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;