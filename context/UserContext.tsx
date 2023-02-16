import React, {createContext, ReactNode, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from '../utils/firebase'
import router from "next/router";
import {addDoc, collection} from "firebase/firestore";

type User = {
    firstName: string,
    lastName: string
    email: string,

}

interface AuthContextType {
    authUser: {
        email: string;
        userId: string;
    } | null;
    setAuthUser: (user: { email: string; userId: string; } | null) => void;
    signIn: (email: string, password: string) => void
    signUp: (user: User, password: string) => void
}

export const AuthContext = createContext<AuthContextType>({
    authUser: null,
    setAuthUser: () => {
    },
    signIn: () => {

    },
    signUp: () => {

    }
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const [authUser, setAuthUser] = useState<{ email: string; userId: string } | null>(null);

    const signIn = async (email: string, password: string) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            if (!result.user.email) return;
            setAuthUser({email: result.user.email, userId: result.user.uid});
            if (authUser) {
                localStorage.setItem("userID", authUser.userId)
                localStorage.setItem("email", authUser.email)
            }
            await router.push("/")
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const signUp = async (user: User, password: string): Promise<void> => {
        const {email, firstName, lastName} = user;
        try {
            // Create user with email and password
            const {user: authUser} = await createUserWithEmailAndPassword(auth, email, password)
            // Save user data to Firestore with unique ID
            const userRef = collection(db, 'users');
            await addDoc(userRef, {firstName, lastName, email, userId: authUser.uid});
            await router.push('/')
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }


    return (
        <AuthContext.Provider value={{authUser, setAuthUser, signIn, signUp}}>
            {children}
        </AuthContext.Provider>
    );
};
