import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = (provider) => {
        signInWithPopup(auth, provider)
            .then((result) => { console.log(result.user)
                toast.success("Login Successfully");
                setLoading(true)
                
            
                
            })
            .catch((error) => {
                
                console.error("Error signing in with Google:", error);
            });
    };

    const loginWithGit = (GitProvider) => {
        
        signInWithPopup(auth, GitProvider)
        .then((result) => { console.log(result.user)
            toast.success("Login Successfully");
            setLoading(true)
            
        })
        .catch((error) => {
            
            console.error("Error signing in with Github:", error);
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the", currentUser)
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser, 
        signIn,
        logOut,
        loginWithGoogle,
        loginWithGit
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
