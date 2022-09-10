import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, bg="bg-blue-400", color="text-white", onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}>
    <View className={`w-full mt-5 py-4 px-5 ${bg} rounded-xl shadow-lg`}>
      <Text className={`text-center ${color}`}>{title}</Text> 
    </View>
  </TouchableOpacity>
  )
}

export default CustomButton