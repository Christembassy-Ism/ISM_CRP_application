import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import {Formik} from 'formik'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

const Support = ({navigation}) => {
  return (
    <View className="flex-1">
        <Header
         navigation={navigation}/>

         <View className="px-5 py-8">
            <View className="flex-row py-14 items-center gap-2">
                <Text className="font-[MontserratBold] text-6xl text-blue-800">Get In Touch</Text>
                <FontAwesome name="headset" color="#666" size={28}/>
            </View>

            <Formik
                initialValues={{subject : "", message : ""}}
                onSubmit={values => console.log(values)}>

                {({handleSubmit, handleChange, handleBlur, values}) => (
                <View className="space-y-12">
                    <View className="space-y-10">
                        <View className="space-y-4">
                            <TextInput
                            onChangeText={handleChange('subject')}
                            onBlur={handleBlur('subject')}
                            className="rounded-lg bg-gray-200 p-4 h-16 border-2 border-blue-400"
                            placeholder='Subject'
                            placeholderTextColor={"#666"}
                            value={values.email}/>
                            <TextInput
                            secureTextEntry={true}
                            onChangeText={handleChange('message')}
                            onBlur={handleBlur('message')}
                            className="rounded-lg bg-gray-200 h-40 p-4 border-2 border-blue-400"
                            placeholder='Message'
                            multiline
                            placeholderTextColor={"#666"}
                            value={values.message}/>
                        </View>
                    </View>
                    <View className="space-y-3">
                            <TouchableOpacity
                            onPress={() => {handleSubmit(); navigation.navigate("Cell Leader")}}>
                                <View className="text-white bg-blue-600 w-full py-8  rounded-xl shadow-lg">
                                  <Text className="text-center font-[NunitoBlack] text-white font-bold">Submit</Text> 
                                </View>
                            </TouchableOpacity>
                    </View>             
                </View>
                )}
            </Formik>
         </View>
              
        <Image source={require("../../assets/contact.png")} className="absolute left-0 w-full bottom-0 -z-10"/>
    </View>
  )
}

export default Support