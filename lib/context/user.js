import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const UserContext =  createContext();

export const useUser = () => {
   return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [ token, setToken ] = useState("");
    const [ data, setData ] = useState("");
    const [ user, setUser ] = useState(null);


    const getToken = async () => {
        try {
         if(user){
            const token = await auth.currentUser.getIdToken();
            setToken(token);
         }
        } catch (error) {
         console.log(error);
        }
     } 

     //get current User State in the Application
     const getUser = () => {
         auth.onAuthStateChanged(user => {
             if(user){
                console.log("refresh")
                setUser(user)
                getToken();
             }else{
                setUser(null);
             }
         })
     }

     //Function to refresh the page if Email is verified
     const refresh = async () => {
        try {
            console.log("rferesh")
            await auth.currentUser.reload();
            const verified = auth.currentUser
            setUser(verified);
            console.log(verified)            
        } catch (error) {
            console.log(error.response)
        }

     }

     const signOut = () => {
        auth.signOut()
        .then(res => setData(null))
        .catch(err => console.log(err))
     }
     
     const fetchUser = async (user_type) => {
          if(token){
            try {
            let url;
                switch (user_type) {
                    case "cell leader":
                        url = "https://f8f5-102-89-32-88.eu.ngrok.io/api/cell-leaders/auth";
                        break;
                    case "cell member":
                        url = "https://f8f5-102-89-32-88.eu.ngrok.io/api/cell-members/auth";
                        break;
        
                    default:
                        console.log("invalid type");
                        break;
                }
                    const req = await axios.get(url, { params : { FirebaseToken : token} } )
                    const dat = req.data;
                    console.log("data", dat);
                    setData(dat) 
                
            } catch (error) {
                console.log(error.response);
                }
              } 
            }
     
   useEffect(() => {
        getUser();
   }, [user])

    const value = {
        data,
        fetchUser,
        refresh,
        signOut,
        token,
        user
    }
    
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
