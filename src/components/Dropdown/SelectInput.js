import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { Provider, Surface } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

const SelectDropDown = ({headerClass, listClass}) => {
    const [ value, setValue ] = useState("");

    const [ show, setShow ] = useState(false) 

    return(
    <View className="">
        <Pressable onPress={() => setShow(!show)}>
            <View className={headerClass + "rounded p-5 flex-row justify-between"}>
                <Text>{value ? value : "Label"}</Text>
                <FontAwesome name={`${show ? "arrow-up" : "arrow-down"}`} color="black"/>
            </View>            
        </Pressable>

        <View className={`border-t bottom-0 bg-white px-5 h-40 ${!show && "hidden"}`}>
          <ScrollView className="">
            {
                genderList.map((item, index) => (
                    <TouchableOpacity onPress={() => setValue(item.value)} key={index} className={listClass + " w-full py-5"}>
                        <Text>{item.label}</Text>
                    </TouchableOpacity>
                ))
            } 
          </ScrollView>
        </View>
    </View>
)
}

export default SelectDropDown;