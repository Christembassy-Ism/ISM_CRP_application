import { Formik } from 'formik';
import React from 'react'
import { RadioButton } from 'react-native-paper'
import { TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Background from '../../../components/Background/Background';
import Header from '../../../components/Header/Header';
import { useAuth } from '../../../../lib/context/auth';
import Loader from '../../../components/Loader/loader';

const CellMemberRegister = ({navigation}) => {
  const [value, setValue] = React.useState('No');
  const { cellMemberRegister, loading, error } = useAuth();

  return (
    <Background>
      {
        loading && ( <Loader/>)
      }

        <Header
         navigation={navigation}/>
        <ScrollView>
         <View className="flex-1 justify-between py-16 px-8">
          
            <Formik
                            initialValues={{firstName : "hello", lastName : "world", email : "jndjndjndjd@gmail.com", cell_name : "dkcndncjkdcn ",founded_ministry: null, region : "", country : "", password : "", mobile : ""}}
                // initialValues={{firstName : "hello", lastName : "world", email : "jndjndjndjd@gmail.com", cell_name : "dkcndncjkdcn ",founded_ministry: null, region : "kcmdkcmdk", country : "nigeria", password : "jdbjsbjbsjdbjsd", mobile : "093092092"}}
                onSubmit={values => cellMemberRegister({...values, user_type : "cell member", founder : value}, navigation)}>

                {({handleSubmit, handleChange, handleBlur, values}) => (
                <>
                    <View className="space-y-16">
                        <Text className="text-4xl font-bold">
                            Join the mi.nistry.
                        </Text>
                        {
                          error ? (
                          <View className="bg-red-200 py-5 rounded-lg px-3">
                            <Text>{error}</Text>
                          </View>) : (<></>)
                        }
                        <View className="space-y-4">
                          <View className="flex flex-row justify-between flex-wrap">
                            <TextInput
                              onChangeText={handleChange('firstName')}
                              onBlur={handleBlur('firstName')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholderTextColor={"#666"}
                              placeholder='First name'
                              value={values.firstName}/>
                              <TextInput
                              onChangeText={handleChange('lastName')}
                              onBlur={handleBlur('lastName')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholderTextColor={"#666"}
                              placeholder='Last name'
                              value={values.lastName}/>
                          </View>

                          <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholderTextColor={"#666"}
                            placeholder='Email'
                            value={values.email}/>

                          <TextInput
                            onChangeText={handleChange('mobile')}
                            onBlur={handleBlur('mobile')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholderTextColor={"#666"}
                            placeholder='Mobile'
                            value={values.mobile}/>

                          <TextInput
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Password'
                            placeholderTextColor={"#666"}
                            value={values.password}/>
                          <TextInput
                            onChangeText={handleChange('cell_name')}
                            onBlur={handleBlur('cell_name')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholderTextColor={"#666"}
                            placeholder='Name of your cell'
                            value={values.cell_name}/>


                          <Text className="font-[NunitoBold] mt-5 mb-3">Are you a founder :</Text>
                          <RadioButton.Group
                            onValueChange={newValue => setValue(newValue)} value={value} >
                              <View className="flex-row justify-start gap-4">
                                  <View 
                                  className="flex-row items-center space-x-3">
                                      <View className="bg-gray-300 rounded">
                                        <RadioButton 
                                            color='blue'
                                            uncheckedColor='black'
                                            value="Yes" />
                                      </View>
                                      <Text>Yes</Text>
                                    </View>
                                  <View 
                                  className="flex-row items-center space-x-3">
                                    <View className="bg-gray-300 rounded">
                                      <RadioButton 
                                          color='blue'
                                          uncheckedColor='black'
                                          value="No" />
                                    </View>
                                    <Text>No</Text>
                                  </View>
                              </View>
                          </RadioButton.Group>

                          {
                            value === "Yes" ? (
                              <TextInput
                              onChangeText={handleChange('founded_ministry')}
                              onBlur={handleBlur('founded_ministry')}
                              className="rounded-lg w-full bg-gray-200 p-4 border-2 border-blue-400"
                              placeholderTextColor={"#666"}
                              placeholder='Name of ministry founded'
                              value={values.founded_ministry}/>
                            ) : (<></>)
                          }
                          


                          <View className="flex flex-row justify-between flex-wrap">
                            <TextInput
                              onChangeText={handleChange('region')}
                              onBlur={handleBlur('region')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholderTextColor={"#666"}
                              placeholder='Region'
                              value={values.region}/>
                              <TextInput
                              onChangeText={handleChange('country')}
                              onBlur={handleBlur('country')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholderTextColor={"#666"}
                              placeholder='Country'
                              value={values.country}/>
                          </View>
                        </View>
                    </View>
                    <View className="pt-10">
                            <Text className="text-center font-[NunitoBold] text-lg py-5">Already have an account? 
                                    <Text className="text-blue-600 font-bold ml-4" onPress={() => navigation.navigate("Cell Member Sign In")}> Sign in</Text>
                            </Text>
                            <TouchableOpacity
                            onPress={() => {handleSubmit()}}>
                                <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                                  <Text className="text-center text-white font-bold">Register</Text> 
                                </View>
                            </TouchableOpacity>
                    </View>             
                </>

                )}
                </Formik>
                
         </View>
        </ScrollView>
    </Background>
  )
}

export default CellMemberRegister