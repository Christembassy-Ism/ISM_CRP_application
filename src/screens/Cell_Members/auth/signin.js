import { Formik } from 'formik';
import React from 'react'
import { TextInput, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import Background from '../../../components/Background/Background';
import Header from '../../../components/Header/Header';

const CellMemberSignIn = ({navigation}) => {
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
                        <Text className="text-5xl font-bold">
                            Let's sign you in
                        </Text>
                        <View className="space-y-4">
                            <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Input your email'
                            value={values.email}/>
                            <TextInput
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Password'
                            value={values.password}/>
                        </View>
                    </View>
                    <View className="">
                            <Text className="text-center font-[NunitoBold] text-lg py-5">Don't have an account? 
                                <Text onPress={() => navigation.navigate("Cell Member Register")} className="text-blue-600 font-bold ml-4"> Register</Text>
                            </Text>
                            <TouchableOpacity
                            onPress={() => navigation.navigate("Cell Member")}>
                                <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                                  <Text className="text-center font-[NunitoBold] text-white font-bold">Sign In</Text> 
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

export default CellMemberSignIn