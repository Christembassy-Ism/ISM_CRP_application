import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import MenuDropdown from '../../../components/Menu/menucontainer';
import { useUser } from '../../../../lib/context/user';

const ProfileScreen = () => {
  const [show, setShow] = useState(false);

  const menuDropDown = () => {
    setShow(!show);
  }
  const { data } = useUser();

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
              <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.firstName}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Last Name</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.lastName}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Email</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.email}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Mobile</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.mobile}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Founder</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.founded_ministry}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Country</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.country}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Region</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.region}</Text>
            </View>
          </View>
        </View>

        <View>
            <Text className="text-blue-800  font-[NunitoBold] font-bold text-lg ">Cell Information</Text>
            <View className="space-y-2 my-4">
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Cell Name</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>{data.cell_name}</Text>
              </View>
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Cell Leader</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>Brother John</Text>
              </View>
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Region</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]" style={{textTransform : "capitalize"}}>East Europe</Text>
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