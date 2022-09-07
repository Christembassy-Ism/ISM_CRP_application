import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo'
import React, { useEffect, useState } from 'react'
import CarouselListPage from '../../../components/carousel/carouselImages';
import CellOutline from '../../../components/Cell Outline/CellOutline';
import PreviousMeetings from '../../../components/Previous Meetings/PreviousMeetings';
import { useUser } from '../../../../lib/context/user';


const Home = ({navigation}) => {
  const { data } = useUser();

  return (
    <View className="flex-1 bg-gray-100 space-y-10">
      <ScrollView>
      <View className="px-5 pt-16 pb-8">
       <Text className="text-3xl font-[NunitoBold]">Hello {data.firstName},</Text>
      </View>
      <CarouselListPage/>
      <View className="py-5 px-8 flex-row justify-between">
        <TouchableOpacity>
        <View className="space-y-3">
          <View className="bg-gray-200 p-5 items-center bg-blue-600 shadow-sm rounded">
            <Entypo name="documents" size={33} color="white"/>
          </View>
          <Text className="text-center font-[NunitoBold]">Cell Manual</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("Offerings")}>
        <View className="space-y-3">
          <View className="bg-gray-200 p-5 items-center bg-blue-500 shadow-sm rounded">
            <FontAwesome name="credit-card" size={33} color="white"/>
          </View>
          <Text className="text-center font-[NunitoBold]">Pay Offering</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Support")} >
        <View className="space-y-3">
          <View className="bg-gray-200 p-5 items-center bg-blue-400 shadow-sm rounded">
            <FontAwesome name="headphones-alt" size={33} color="white"/>
          </View>
          <Text className="text-center font-[NunitoBold]">Support</Text>
        </View>
        </TouchableOpacity>
      </View>
      <CellOutline/>
        <PreviousMeetings/>
      </ScrollView>
    </View>
  )
}

export default Home