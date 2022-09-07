import { Formik } from 'formik';
import React from 'react'
import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import { useAuth } from '../../../../lib/context/auth';
import Background from '../../../components/Background/Background';
import Header from '../../../components/Header/Header';
import KeyboardDismiss from '../../../components/Keyboard/KeyboardDismiss';
import Loader from '../../../components/Loader/loader';

const CellMemberSignIn = ({navigation}) => {
    const { cellMemberSignIn, error, loading } = useAuth();

  return (
    <Background>
          {
        loading ? ( <Loader/>) : (<></>)
      }
        <Header
         navigation={navigation}/>
       <KeyboardDismiss>
       <View className="flex-1 justify-between py-20 px-8">
                    <Formik
                        initialValues={{email : "", password : "jdbjsbjbsjdbjsd"}}
                        onSubmit={values => cellMemberSignIn(values, navigation)}>

                        {({handleSubmit, handleChange, handleBlur, values}) => (
                        <>
                            <View className="space-y-16">
                                <Text className="text-5xl font-bold">
                                    Let's sign you in
                                </Text>
                                {
                                error ? (
                                    <View className="bg-red-200 py-5 rounded-lg px-3">
                                <Text>{error}</Text>
                                    </View>) : (<></>)
                                }
                                <View className="space-y-4">
                                    <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                                    placeholderTextColor={"#666"}
                                    placeholder='Input your email'
                                    value={values.email}/>
                                    <TextInput
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                                    placeholderTextColor={"#666"}
                                    placeholder='Password'
                                    value={values.password}/>
                                </View>
                            </View>
                            <View className="">
                                    <Text onPress={() => navigation.navigate("Cell Member Register")} className="text-center font-[NunitoBold] text-lg py-5">Don't have an account? 
                                        <Text className="text-blue-600 font-bold ml-4"> Register</Text>
                                    </Text>
                                    <TouchableOpacity
                                    onPress={() => {handleSubmit()}}>
                                        <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                                        <Text className="text-center font-[NunitoBold] text-white font-bold">Sign In</Text> 
                                        </View>
                                    </TouchableOpacity>
                            </View>             
                        </>
                        )}
                        </Formik>
        </View>
       </KeyboardDismiss>
       
    </Background>
  )
}

export default CellMemberSignIn