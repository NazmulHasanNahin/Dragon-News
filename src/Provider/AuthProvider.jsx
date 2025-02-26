    import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
    import { createContext, useEffect, useState } from "react";
    import app from "../firebase/firebase.config";

    export const AuthContext = createContext(null);
    const auth = getAuth(app);

    const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);

        const [loading,setLoading]= useState(true);


        const createuser = (email, password) => {
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password);
        }
        const signIn = (email,password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
        }

        const logOut = () => {
            setLoading(true);
            return signOut(auth);

        }

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false);
            });
            return () => {
                unsubscribe()
            }
        }, [])
        const authInfo = {
            user, createuser,logOut,signIn,loading,

        }
        return (
            <AuthContext.Provider value={authInfo}>

                {children}
            </AuthContext.Provider>
        );
    };

    export default AuthProvider;