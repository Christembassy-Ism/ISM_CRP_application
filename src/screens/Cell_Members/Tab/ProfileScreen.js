import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import MenuDropdown from '../../../components/Menu/menucontainer';

const ProfileScreen = () => {
  const [show, setShow] = useState(false);

  const menuDropDown = () => {
    setShow(!show);
  }

  return (
    <View className="flex-1 bg-blue-400">
      <MenuDropdown show={show} hide={menuDropDown} data={[]}/>
      <View className="flex-row justify-between py-5 mt-10 px-5">
        <Text className=" font-[MontserratBold] text-2xl text-white">Profile</Text>
        <TouchableOpacity
        onPress={menuDropDown}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      <View
      className="items-center -mb-16 z-10">
        <Image
        source={require("../../../assets/user.png")}
        className="rounded-full p-0"/>
      </View>

      <View className="bg-white flex-1 pt-20 px-5" style={style.Container}>
        <ScrollView>
        <View>
          <Text className="text-blue-800  font-[NunitoBold] font-bold text-lg ">Personal Information</Text>
          <View className="space-y-2 my-4">
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">First Name</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">Oluwatomisin</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Last Name</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">Harry</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Email</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">owluwatomisin@gmail.com</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Mobile</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">+234 810 293 378</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Country</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">Romania</Text>
            </View>
          </View>
        </View>

        <View>
            <Text className="text-blue-800  font-[NunitoBold] font-bold text-lg ">Cell Information</Text>
            <View className="space-y-2 my-4">
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Cell Name</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]">King's Cell</Text>
              </View>
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Cell Leader</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]">Brother John</Text>
              </View>
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Region</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]">East Europe</Text>
              </View>
            </View>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  Container : {
    borderTopLeftRadius : 50,
    borderTopRightRadius : 50,
  }
})

export default ProfileScreen