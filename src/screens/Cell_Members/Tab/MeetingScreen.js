import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MeetingScreen = () => {
  return (
    <View className="flex-1 px-8 space-y-12 relative">
      <View className="pt-20">
        <Text className="font-[NunitoBold] text-4xl">Join A Meeting</Text>
      </View>
      <View className="flex-row">
        <Image
        source={require("../../../assets/meeting.png")}
        className="w-full object-fit h-80"/>
      </View>

      <View className="rounded-xl bg-blue-300 p-4">
         <View className="flex-row items-center gap-1">
            <Text className="text-lg w-1/5">Title</Text><Text>: </Text><Text className="text-blue-600 text-lg font-[NunitoBold]">The Power of the tongue</Text>
        </View>
        <View className="flex-row items-center gap-1">
        <Text className="text-lg w-1/5">Host</Text><Text>: </Text><Text className="text-blue-600 text-lg font-[NunitoBold]">Pastor Alexander</Text>
        </View>
        <View className="flex-row items-center gap-1">
        <Text className="text-lg w-1/5">Status</Text><Text>: </Text><Text className="text-blue-600 text-lg font-[NunitoBold]">Ongoing</Text>
        </View>
      </View>


      <TouchableOpacity className="bottom-0 w-full absolute mx-8 mb-10 ">
        <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
          <Text className="text-center text-white font-bold">Join Meeting</Text> 
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MeetingScreen