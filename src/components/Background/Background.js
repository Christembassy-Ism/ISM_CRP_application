import React from 'react'
import { View, ScrollView} from 'react-native'

const Background = ({children}) => {
  return (
      <View className="flex-1">
          <View className="bg-blue-300 w-[424px] rounded-full h-[424px] -left-48 -top-48 absolute"/>
          <View className="bg-blue-300 w-[424px]  rounded-full h-[424px] -right-48 -bottom-48 absolute"/>
            {
                children
            }
      </View>      

  )
}

export default Background