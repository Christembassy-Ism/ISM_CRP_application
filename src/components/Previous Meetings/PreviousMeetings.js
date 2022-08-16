import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5';

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

const PreviousMeetings = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} />
  );


  return (
      <View className="bg-blue-300 flex-1 px-8 py-8" style={style.meetingContainer}>
        <Text className="font-[NunitoBold] text-xl py-4">Previous Meetings</Text>

        <SafeAreaView>
          <FlatList
          data={data} 
          renderItem={renderItem}
          keyExtractor={(item, index) => index}/>
        </SafeAreaView>
      </View>
  )
}


const style = StyleSheet.create({
  meetingContainer : {
    borderTopLeftRadius : 50,
    borderTopRightRadius : 50,
  }
})

export default PreviousMeetings