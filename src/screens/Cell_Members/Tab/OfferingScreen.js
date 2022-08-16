import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import CarouselListPage from '../../../components/carousel/carouselImages';
import OfferingModal from '../../../components/Modal/OfferingModal';


const data = [
  {
    date: 'May 29',
    title: 'Offering',
  },
  {
    date: 'Apr 12',
    title: 'Offering',
  },
  {
    date: 'July 16',
    title: 'Offering',
  },
  {
    date: 'July 10',
    title: 'Offering',
  },
  {
    date: 'July 8',
    title: 'Offering',
  },
  {
    date: 'Jan 8',
    title: 'Offering',
  },
  {
    date: 'Jan 8',
    title: 'Offering',
  },
  {
    date: 'Jan 8',
    title: 'Offering',
  },
  {
    date: 'Jan 8',
    title: 'Offering',
  },
];

const Item = ({ title, date }) => (
  <View className="py-5 border-b border-white flex flex-row  items-center justify-between">
    <View className="flex-row gap-5">
      <View className="p-5 bg-green-300 rounded-lg"></View>
      <View className="space-y-1">
        <Text className="font-[Nunito] text-lg">{title}</Text>
        <Text className="text-xs ">{date}</Text>
      </View>
    </View>

    <View className="justify-self-end">
      <Text className="text-lg">N10,000.00</Text>
    </View>
  </View>
);

const OfferingScreen = () => {
  const [show, setShow] = useState(false)

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} />
  );

  const hide = () => {
     setShow(!show)
  }


  return (
    <View className="flex-1">
      <OfferingModal show={show} hide={hide} />
      <View className="bg-blue-400 rounded-xl p-5 mx-5 mt-28 space-y-5">
        <View className="flex-row justify-between">
          <Text className="font-[NunitoBold] text-2xl">Offering Overview</Text>
          <FontAwesome name="hand-holding-heart" color={"blue"} size={26}/>
        </View>
        <Text className="text-md  font-[Montserrat]">
           Lorem ipsum dolor sit amet, consectetur adipiscorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
        <TouchableOpacity 
        onPress={() => hide()}
        className="items-end">
            <View className="text-white bg-white w-1/2 py-5  rounded-xl shadow-lg">
              <Text className="text-center text-blue-800 font-bold">Give Offering</Text> 
            </View>
        </TouchableOpacity>
      </View>

      <View className="bg-blue-400 flex-1 mt-16 px-8 py-8" style={style.meetingContainer}>
        <Text className=" font-[NunitoBold] text-xl py-4 ">Recent Givings</Text>

        <SafeAreaView>
          <FlatList
          data={data} 
          renderItem={renderItem}
          keyExtractor={(item, index) => index}/>
        </SafeAreaView>
      </View>
    </View>
  )
  
  // return(
  //   <CarouselListPage/>
  // )
}



const style = StyleSheet.create({
  meetingContainer : {
    borderTopLeftRadius : 50,
    borderTopRightRadius : 50,
  }
})

export default OfferingScreen