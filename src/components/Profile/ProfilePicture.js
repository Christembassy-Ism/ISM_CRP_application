import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import { auth, storage } from '../../../lib/firebase/firebase';


const ProfilePicture = ({data}) => {
    const [ image, setImage ] = useState("https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png");

    const selectImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
         return result.uri;
        };
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


    const updateImage = async () => {
            try {      
                const item = await selectImage()
                const image = item.replace("file://", "");
                const filename = image.substring(image.lastIndexOf('/') + 1);
                const ref = storage.ref("ISM");
                const name = ref.child(data.cell_name + "/" + filename);

                const blob = await getBlob(image)

                const upload = await name.put(blob);

                blob.close();

                const getUrl = await upload.ref.getDownloadURL();
                
                const url = getUrl;

                auth.currentUser.updateProfile({
                    photoURL : url
                });

                setImage(url);
            } catch (error) {
                console.log(error)
            }
    }

  return (
    <View
    className="items-center -mb-16 z-10 relative">
      <Image
      source={{ uri : image}}
      className="rounded-full p-0"
      style={{ width: 180, height: 180 }}/>
      <TouchableOpacity
      onPress={() => {updateImage()}}>
        <View className="rounded-full bg-blue-400 -mb-3 p-4 absolute shadow-5xl bottom-0">
            <FontAwesome name="camera" size={20} color="white"/>
        </View>        
      </TouchableOpacity>
    </View>
  )
}

export default ProfilePicture