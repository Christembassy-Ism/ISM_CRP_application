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
     
     console.log(token);

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
            console.log("refresh")
            await auth.currentUser.reload();
            const verified = auth.currentUser
            setUser(verified);
            console.log(verified)            
        } catch (error) {
            console.log(error.response)
        }

     }

     const getBlob = async (image) => {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            resolve(xhr.response);
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", image, true);
          xhr.send(null);
        });
        
        return blob;
      }

      const uploadImage = async (item) => {
        console.log("one")
        try {      
          const image = (Platform.OS === "ios" && item.replace("file://", ""));
          const filename = image.substring(image.lastIndexOf('/') + 1);
          const ref = storage.ref("ISM");
          const name = ref.child(data.cell_name + "/" + filename);
    
          const blob = await getBlob(image)
    
          const upload = await name.put(blob);
    
          blob.close();
    
          const getUrl = await upload.ref.getDownloadURL();
          
          const url = getUrl;

          return url;
    
        } catch (error) {
          console.log(error)
        }
      }

     const profilePicture = async (image) => {
        try {
            const url = await uploadImage(image);
            await auth.currentUser.updateProfile({
                photoURL : url
            })
            
            await auth.currentUser.reload();

            const user = auth.currentUser;

            setUser(user);

        } catch (error) {
            console.log(error)
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
                        url = "https://9347-154-113-157-42.eu.ngrok.io/api/cell-leaders/auth";
                        break;
                    case "cell member":
                        url = "https://9347-154-113-157-42.eu.ngrok.io/api/cell-members/auth";
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
        profilePicture,
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
