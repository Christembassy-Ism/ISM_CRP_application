import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import CustomButton from '../../../components/Buttons/CustomButton';
import KeyboardDismiss from '../../../components/Keyboard/KeyboardDismiss';

const Report = () => {
  const [founders, setFounders ] = useState([{title : "", founders_name : ""}]);
  const [testimonies, setTestimonies ] = useState([{name : "", testimony : ""}]);

  const foundersFields = (e) => {
    const num = e < 1 ? 1 : e;
    const initial = {title : "", founders_name : ""}
    const num_of_arrays = Array(parseInt(num)).fill(initial);
    setFounders(num_of_arrays);
  }

  const testimonyFields = (e) => {
    const num = e < 1 ? 1 : e;
    const initial = {name : "", testimony : ""}
    const num_of_arrays = Array(parseInt(num)).fill(initial);
    setTestimonies(num_of_arrays);
  }

  return (
    <KeyboardDismiss>
      
      <ScrollView className="px-5 py-16">
      <Text className="font-[NunitoBold] py-10 text-5xl">Cell Report</Text>
      <TouchableWithoutFeedback
         onPress={() => {Keyboard.dismiss; console.log("clicked")}}>
      <Formik
                initialValues={{date : "", attendance : 1, founders: "",summary : "", pictures : "", testimonies : "" }}
                onSubmit={values => console.log(values)}>

                {({onSubmit, handleChange, handleBlur, values}) => (
                <>
                    <View className="space-y-16 flex-1">
                        <View className="space-y-4">
                          <TextInput
                            onChangeText={handleChange('date')}
                            onBlur={handleBlur('date')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Date'
                             placeholderTextColor={"black"}
                           value={values.date}/>

                         <View className="attendance space-y-2 py-5">
                          <Text className="font-[NunitoBold] text-lg">Attendance </Text>
                          <TextInput
                            onChangeText={(e) => {handleChange("attendance");  foundersFields(e)}}
                            onBlur={handleBlur('attendance')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Num of attendants'
                            keyboardType='numeric'
                            maxLength={2}
                            placeholderTextColor={"black"}/>
                            {
                              founders.map((item, index) => (
                                <View key={index} className="flex-row justify-between">
                                <TextInput
                                  onChangeText={handleChange('founders')}
                                  onBlur={handleBlur('founders')}
                                  className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400 w-2/6"
                                  placeholder='title'
                                  placeholderTextColor={"black"}
                                value={values.attendance}/>
                                  <TextInput
                                  onChangeText={handleChange('founders')}
                                  onBlur={handleBlur('founders')}
                                  className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400 w-3/5"
                                  placeholder="Full Name"
                                  placeholderTextColor={"black"}
                                value={values.attendance}/>
                             </View> 
                              ))
                            }
                         </View>

                        <View className="testimonies space-y-2 py-5">
                        <Text className="font-[NunitoBold] text-lg">Testimonies </Text>
                          <TextInput
                            onChangeText={(e) => {handleChange('testimonies'); testimonyFields(e); }}
                            onBlur={handleBlur('testimonies')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Num of Testimonies'
                            keyboardType='numeric'
                            maxLength={2}
                            placeholderTextColor={"black"}/>

                            {
                              testimonies.map((item, index) => (
                                <View key={index} className="flex-row justify-between">
                                <TextInput
                                  onChangeText={handleChange('founders')}
                                  onBlur={handleBlur('founders')}
                                  className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400 w-2/6"
                                  placeholder='Name'
                                  placeholderTextColor={"black"}
                                value={values.attendance}/>
                                  <TextInput
                                  onChangeText={handleChange('founders')}
                                  onBlur={handleBlur('founders')}
                                  className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400 w-3/5"
                                  placeholder="Testimony"
                                  placeholderTextColor={"black"}
                                value={values.attendance}/>
                             </View> 
                              ))
                            }
                        </View>

                          <TextInput
                            onChangeText={handleChange('summary')}
                            onBlur={handleBlur('summary')}
                            className="rounded-lg h-40 bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Summary'
                            multiline
                            editable
                            placeholderTextColor={"black"}
                           value={values.summary}/>

                           <View className="rounded-lg space-y-2 bg-gray-200 p-4 border-2 border-blue-400 items-center">
                            <FontAwesome name="cloud-upload-alt" size={50} color={"#3953DD"}/>
                            <Text className="font-[NunitoBold] text-xl">Upload Images</Text>
                            <Text>You can select multiple images at once</Text>

                            <CustomButton
                            // onPress={DocumentPicker.getDocumentAsync()}
                            title={"Select Images"}
                            bg="bg-[#3953DD]"/>
                           </View>
                        </View>
                    </View>
                    <View className="py-5 mb-16">
                            <TouchableOpacity
                            onPress={() => {}}>
                                <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                                  <Text className="text-center font-[NunitoBlack] text-white font-bold">Submit Report</Text> 
                                </View>
                            </TouchableOpacity>
                    </View>             
                </>
                )}
      </Formik> 
      </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardDismiss>
  )
}

export default Report