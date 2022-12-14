import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import MenuDropdown from '../../../components/Menu/menucontainer';
import { useUser } from '../../../../lib/context/user';
import ProfilePicture from '../../../components/Profile/ProfilePicture';

const Profile = () => {
  const [show, setShow] = useState(false);

  const menuDropDown = () => {
    setShow(!show);
  }

  const { data, signOut } = useUser();

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

      <ProfilePicture data={data}/>

      <View className="bg-white flex-1 pt-20 px-5" style={style.Container}>
        <ScrollView>
        <View>
          <Text className="text-blue-800  font-[NunitoBold] font-bold text-lg ">Personal Information</Text>
          <View className="space-y-2 my-4">
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">First Name</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">{data.firstName}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Last Name</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">{data.lastName}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Email</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">{data.email}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Mobile</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">{data.mobile}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Address</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">{data.resedential_address}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Country</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">{data.country}</Text>
            </View>
            <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
              <Text className=" font-[Nunito]">Region</Text>
              <Text className="text-blue-800 text-md font-[NunitoBold]">{data.region}</Text>
            </View>
          </View>
        </View>

        <View>
            <Text className="text-blue-800  font-[NunitoBold] font-bold text-lg ">Cell Information</Text>
            <View className="space-y-2 my-4">
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Cell Name</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]">{data.cell_name}</Text>
              </View>
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Region</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]">{data.region}</Text>
              </View>
              <View className="p-4 flex-row justify-between bg-gray-100 rounded-lg">
                <Text className=" font-[Nunito]">Country</Text>
                <Text className="text-blue-800 text-md font-[NunitoBold]">{data.country}</Text>
              </View>
            </View>
        </View>
        <View className="py-5">
          <TouchableOpacity>
              <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                <Text className="text-center text-white font-bold">Edit Profile</Text> 
              </View>
          </TouchableOpacity>
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

export default Profile