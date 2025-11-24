import React, { useEffect, useState, type PropsWithChildren } from 'react'
import type { User } from '../data/user-mock.data';
import { users } from '../data/user-mock.data';
import * as z from "zod";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextType {
    //state
    authStatus: AuthStatus;
    user: User | null

    // methods
    login: (email: string, password: string) => boolean
    logout: () => void
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined);


export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setauthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setauthStatus('authenticated');
        } else {
            setauthStatus('not-authenticated');
        }
    }, []);


    const handleLogin = (email: string, password: string) => {
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            setauthStatus('authenticated');
            setUser(foundUser);
            console.log('User logged in:', foundUser);
            localStorage.setItem('user', JSON.stringify(foundUser));
            return true;
        }
        return false;
    }

    const handleLogout = () => {
        setauthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <UserContext.Provider value={{ authStatus, user, login: handleLogin, logout: handleLogout }}>
            {children}
        </UserContext.Provider>
    )
}
