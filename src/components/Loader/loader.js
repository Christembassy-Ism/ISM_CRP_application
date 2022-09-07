import { View, Text, ActivityIndicator } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';import React from 'react'

const Loader = () => {
  return (
    <View 
    className="flex-1 absolute h-full justify-center items-center px-10 w-full bg-transparents z-20">
        <View className="bg-white space-y-3 p-10 rounded-xl shadow justify-center items-center p">
        <ActivityIndicator size="large" color="black" />
        <Text className="font-[NunitoBold] text-xl">Loading...</Text>
        </View>
    </View>
  )
}

export default Loader