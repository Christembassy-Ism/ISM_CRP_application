import React, { useEffect, useState } from 'react'
import { Button, Text, View, Image, TouchableOpacity } from 'react-native'
import Background from '../components/Background/Background'

const Intro = ({navigation}) => {
  return (
    <Background>
        <View className=" flex-1 justify-between py-20 w-full px-10">
          <View className="flex items-center">
            <Image
             source={require("../assets/logo.png")}
             className=" w-38 h-28"/>            
          </View>

          <View>
            <Text className="font-bold text-5xl text-center">Welcome To ISM CRP</Text>
          </View>

        <View className="space-y-5">
          <TouchableOpacity 
            onPress={() => navigation.navigate("Cell Leader Sign In")}
            >
            <View className="text-white bg-white w-full py-5  rounded-xl shadow-lg">
              <Text className="text-center font-bold text-blue-600" >Cell Leader</Text> 
            </View>            
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cell Member Sign In")}
            >
            <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
              <Text className="text-center text-white font-bold">Cell Member</Text> 
            </View>
          </TouchableOpacity>
        </View>
            
        </View>
    </Background>
  )
}

export default Intro