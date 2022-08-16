import { Formik } from 'formik';
import React from 'react'
import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import Background from '../../../components/Background/Background';
import Header from '../../../components/Header/Header';

const CellMemberRegister = ({navigation}) => {
  return (
    <Background>
        <Header
         navigation={navigation}/>

         <View className="flex-1 justify-between py-20 px-8">

            <Formik
                initialValues={{email : "", password : ""}}
                onSubmit={values => console.log(values)}>

                {({onSubmit, handleChange, handleBlur, values}) => (
                <>
                    <View className="space-y-16">
                        <Text className="text-4xl font-bold">
                            Join the ministry.
                        </Text>
                        <View className="space-y-4">
                          <View className="flex flex-row justify-between flex-wrap">
                            <TextInput
                              onChangeText={handleChange('firstName')}
                              onBlur={handleBlur('firstName')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholder='First name'
                              value={values.firstName}/>
                              <TextInput
                              onChangeText={handleChange('lastName')}
                              onBlur={handleBlur('lastName')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholder='Last name'
                              value={values.lastName}/>
                          </View>

                          <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Email'
                            value={values.email}/>

                          <TextInput
                            onChangeText={handleChange('mobile')}
                            onBlur={handleBlur('mobile')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Mobile'
                            value={values.email}/>

                          <TextInput
                            onChangeText={handleChange('cell_meeting')}
                            onBlur={handleBlur('cell_meeting')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Cell Meeting'
                            value={values.email}/>

                          <View className="flex flex-row justify-between flex-wrap">
                            <TextInput
                              onChangeText={handleChange('region')}
                              onBlur={handleBlur('region')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholder='Region'
                              value={values.region}/>
                              <TextInput
                              onChangeText={handleChange('country')}
                              onBlur={handleBlur('country')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholder='Country'
                              value={values.country}/>
                          </View>
                        </View>
                    </View>
                    <View className="">
                            <Text className="text-center font-[NunitoBold] text-lg py-5">Already have an account? 
                                    <Text className="text-blue-600 font-bold ml-4" onPress={() => navigation.navigate("Cell Member Sign In")}> Sign in</Text>
                            </Text>
                            <TouchableOpacity
                            onPress={() => navigation.navigate("Cell Member")}>
                                <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                                  <Text className="text-center text-white font-bold">Register</Text> 
                                </View>
                            </TouchableOpacity>
                    </View>             
                </>

                )}
                </Formik>
         </View>
    </Background>
  )
}

export default CellMemberRegister