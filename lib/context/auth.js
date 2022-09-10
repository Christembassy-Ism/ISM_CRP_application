import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
import axios from "axios";

const AuthContext = createContext();

// Create the authetication hook that can be called in all components
export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({children}) => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false)

    const sendEmail = async () => {
        try {
           const sendmail = await auth.currentUser.sendEmailVerification()
           return true;
        } catch (error) {
           setError(err.message); errTimer(); setLoading(false)
        }
    };

    const storeData = async (data, user_type) => {
        let url;

        switch (user_type) {
            case "cell leader":
                url = "https://9347-154-113-157-42.eu.ngrok.io/api/cell-leaders/auth";
                break;
            case "cell member":
                url = "https://9347-154-113-157-42.eu.ngrok.io/api/cell-members/auth";
                break;

            default:
                console.log("invalid type");
                break;
        }

        try {
            const req = await axios.post(url, data);
            return req.data;

        } catch (error) {
            console.log(error.message)
        }

      }

      const errTimer = () => {
        setTimeout(() => {
            setError(false)
        }, 2000);
      }

    const cellLeaderRegister = async (data, navigation) => {
        setLoading(true);
        try {
            const create = await auth.createUserWithEmailAndPassword(data.email, data.password);
            const token = await create.user.getIdToken();
            const api = await storeData({...data, FirebaseToken : token}, "cell leader");
            const sendmail = await sendEmail();
            setLoading(false); 
            navigation.navigate("Cell Leader");
        } catch (err) {
            setError(err.message); errTimer(); setLoading(false)
        }
    }

    const cellLeaderSignIn = (data, navigation) => {
        setLoading(true);
        auth.signInWithEmailAndPassword(data.email, data.password)
        .then(res => {setLoading(false);  navigation.navigate("Cell Leader");})
        .catch(err => {setError(err.message); errTimer(); setLoading(false)})
    };

    const cellMemberRegister = async (data, navigation) => {
        setLoading(true);
        try {
            const create = await auth.createUserWithEmailAndPassword(data.email, data.password);
            const token = await create.user.getIdToken();
            await storeData({...data, FirebaseToken : token}, "cell member");
            await sendEmail();
            setLoading(false);
            navigation.navigate("Cell Member");
        } catch (err) {
            console.log(err)
            setError(err.message); errTimer(); setLoading(false)
        }
    }

    const cellMemberSignIn = (data, navigation) => {
        setLoading(true);
        auth.signInWithEmailAndPassword(data.email, data.password)
        .then(res => {setLoading(false); navigation.navigate("Cell Member")})
        .catch(err => {setError(err.message); errTimer(); setLoading(false)})
    }

    const signOut = () => {
        auth.signOut();
    }

    const value = {
        cellLeaderRegister,
        cellLeaderSignIn,
        signOut,
        cellMemberSignIn,
        cellMemberRegister,
        loading,
        error
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}