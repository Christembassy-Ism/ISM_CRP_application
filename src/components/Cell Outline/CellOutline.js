import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo'

const CellOutline = () => {
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
                onPress={() => {}}>
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