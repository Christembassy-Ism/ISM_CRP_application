import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo'
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';


const CellOutline = () => {
    const [status, requestPermission] = MediaLibrary.usePermissions();

    React.useEffect(() =>  {
      if(!status){
        requestPermission()
      }
    }, [])

    console.log(status)

  const downloadOutline = async () => {
    if(status.granted){
      const uri = "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/ISM%2Fcert.pdf?alt=media&token=d7a65092-1ac2-4e09-802e-e846c460f322";
      let fileUri = FileSystem.documentDirectory + "outline.pdf";
      FileSystem.downloadAsync(uri, fileUri)
      .then(({ uri }) => {
          saveImage(uri)
        })
        .catch(error => {
          console.error(error);
        });

    }else{
      console.log("Permissiondenied")
    }

  }

  
  const saveImage = async (fileUri) => {
    const asset = await MediaLibrary.createAssetAsync(fileUri)
    const file = await MediaLibrary.createAlbumAsync("download", asset, true);

    openFile(fileUri);
  }

  const openFile = (fileUri) => {
    FileSystem.getContentUriAsync(fileUri).then(cUri => {
      console.log(cUri);
      IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: cUri,
        flags: 1,
      });
    });
    console.log(file);
  }


  return (
    <View className="py-3 px-5 mb-10 space-y-5">
        <View className="flex-row justify-between">
            <Text className="font-[NunitoBold] text-xl">Cell Outline</Text>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
        </View>

      <View className="bg-white p-5 rounded-xl shadow-lg space-y-4">
        <View className="flex-row justify-between">
            <Text>Topic : </Text>
            <Text className=" font-bold">Spiritual sight</Text>
        </View>
        <View className="flex-row justify-between">
            <Text>Month : </Text>
            <Text className="font-bold">August 2020</Text>
        </View>
            <TouchableOpacity
                onPress={() => {downloadOutline()}}>
                <View className={`w-full mt-5 py-3 bg-blue-500 rounded-xl shadow-lg flex-row justify-center space-x-4 items-center`}>
                   <FontAwesome name="download" size={25} color="white"/>
                   <Text className={`text-center text-md text-white font-bold`}>Download</Text> 
                </View>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default CellOutline