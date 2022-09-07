import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import CarouselListPage from '../../../components/carousel/carouselImages';
import PreviousMeetings from '../../../components/Previous Meetings/PreviousMeetings';
import { useAuth } from '../../../../lib/context/auth';
import { useUser } from '../../../../lib/context/user';


const data = [
  {
    date: 'May 29',
    title: 'Global day of ministry',
  },
  {
    date: 'Apr 12',
    title: 'Understanding The Word',
  },
  {
    date: 'July 16',
    title: 'The Power Of The Tongue',
  },
  {
    date: 'July 10',
    title: 'Kingdom Heritage',
  },
  {
    date: 'May 29',
    title: 'Global day of ministry',
  },
  {
    date: 'Apr 12',
    title: 'Understanding The Word',
  },
  {
    date: 'July 16',
    title: 'The Power Of The Tongue',
  },
  {
    date: 'July 10',
    title: 'Kingdom Heritage',
  },
];

const Item = ({ title, date }) => (
  <View className="pt-5 border-b border-white flex flex-row gap-5 items-center">
    <FontAwesome name="users" size={25} color="#0d52bf"/>
    <View className="space-y-1">
      <Text className="font-[NunitoBold] text-lg text-blue-800">{title}</Text>
      <Text className="text-xs font-[Montserrat] text-blue-900">{date}</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const { data } = useUser();

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} />
  );


  return (
    <View className="flex-1 bg-white">
      <View className="px-5 pt-16 pb-8">
       <Text className="text-3xl font-[NunitoBold]" style={{textTransform : "capitalize"}}>Hello {data.firstName},</Text>
      </View>
      <CarouselListPage paginate={true}/>
      <PreviousMeetings/>
    </View>
  )
}


const style = StyleSheet.create({
  meetingContainer : {
    borderTopLeftRadius : 50,
    borderTopRightRadius : 50,
  }
})

export default HomeScreen