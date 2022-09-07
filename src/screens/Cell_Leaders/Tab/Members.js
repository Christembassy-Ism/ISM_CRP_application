import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import TableTag from '../../../components/Table/CellMembersTable';
import SelectDropDown from '../../../components/Dropdown/SelectInput';


const Members = () => {
  return (
    <View>
       <View className="flex-row justify-between py-5 mt-10 px-5">
        <Text className=" font-[MontserratBold] text-2xl text-black">Cell Members</Text>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="flex-row flex-wrap justify-between px-5">
        <TextInput
          className="rounded-xl bg-white w-2/3 py-5 p-4 border-0"
          placeholder='Search Member'
          placeholderTextColor={"#666"}
          />
          <TouchableOpacity>
            <View className="text-white px-4 bg-blue-600 w-full py-5  rounded-xl shadow-lg">
              <Text className="text-center text-white font-bold">Search</Text> 
            </View>
        </TouchableOpacity>
      </View>

      <View>
        <TableTag/>
      </View>

    <View>
      <SelectDropDown/>
    </View>
      

    </View>
  )
}

export default Members