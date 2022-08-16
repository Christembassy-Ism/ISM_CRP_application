import { Pressable, View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, bg="bg-blue-400", color="text-white", onPress}) => {
  return (
    <Pressable
    onPress={() => onPress}>
    <View className={`w-full mt-5 py-4 ${bg} rounded-xl shadow-lg`}>
      <Text className={`text-center ${color} font-bold`}>{title}</Text> 
    </View>
  </Pressable>
  )
}

export default CustomButton