import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CarouselListPage from '../../../components/carousel/carouselImages';
import CellOutline from '../../../components/Cell Outline/CellOutline';
import PreviousMeetings from '../../../components/Previous Meetings/PreviousMeetings';


const Home = () => {
  return (
    <View className="flex-1 bg-gray-100 space-y-10">
      <ScrollView>
      <View className="px-5 pt-16 pb-8">
       <Text className="text-3xl font-[NunitoBold]">Hello Pastor,</Text>
      </View>
      <CarouselListPage/>
      <CellOutline/>
      <PreviousMeetings/>
      </ScrollView>
    </View>
  )
}

export default Home