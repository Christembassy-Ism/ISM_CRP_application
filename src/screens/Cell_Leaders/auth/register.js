import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Background from '../../../components/Background/Background';
import Header from '../../../components/Header/Header';
import { RadioButton } from 'react-native-paper';
import { useAuth } from '../../../../lib/context/auth';
import Loader from '../../../components/Loader/loader';
import KeyboardDismiss from '../../../components/Keyboard/KeyboardDismiss';
import SelectDropDown from '../../../components/Dropdown/SelectInput';

const CellLeaderRegister = ({navigation}) => {
  const [value, setValue] = React.useState('on-site');
  const { cellLeaderRegister, loading, error } = useAuth();

  return (
    <Background>
      {
        loading ? ( <Loader/>) : <></>
      }
     
        <Header
         navigation={navigation}/>

         <KeyboardDismiss>
         <ScrollView>
          <View className="flex-1 justify-between py-16 px-8">
            <Formik
                initialValues={{firstName : "", lastName : "", email : "", resedential_address : "", cell_name : "", region : "", country : "", password : "", mobile : ""}}
                // initialValues={{firstName : "hello", lastName : "world", email : "jndjndjndjd@gmail.com", resedential_address : "kdkfkemfk", cell_name : "dkcndncjkdcn ", region : "kcmdkcmdk", country : "nigeria", password : "jdbjsbjbsjdbjsd", mobile : "093092092"}}
                onSubmit={values => cellLeaderRegister({...values, user_type: "cell leader"}, navigation)}>

                {({handleSubmit, handleChange, handleBlur, values}) => (
                <>
                    <View className="space-y-8">
                        <Text className="text-4xl font-[MontserratBold] font-bold">
                            Register your cell.
                        </Text>
                        {
                          error ? (<View className="bg-red-200 py-5 rounded-lg px-3">
                          <Text>{error}</Text>
                        </View>) : (<></>)
                        }
                        
                        <View className="space-y-4">
                          <Text className="text-l font-bold">Personal Information</Text>
                          <View className="flex flex-row justify-between flex-wrap">
                            <TextInput
                              onChangeText={handleChange('firstName')}
                              onBlur={handleBlur('firstName')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholder='First name'
                              placeholderTextColor={"#666"}
                              value={values.firstName}/>
                              <TextInput
                              onChangeText={handleChange('lastName')}
                              onBlur={handleBlur('lastName')}
                              className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                              placeholder='Last name'
                              placeholderTextColor={"#666"}
                              value={values.lastName}/>
                          </View>
                          <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Email'
                            placeholderTextColor={"#666"}
                            value={values.email}/>

                          <TextInput
                            onChangeText={handleChange('mobile')}
                            onBlur={handleBlur('mobile')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='mobile'
                            placeholderTextColor={"#666"}
                            value={values.mobile}/>

                          <TextInput
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Password'
                            placeholderTextColor={"#666"}
                            value={values.password}/>
                            
                        </View>

                        <View>
                          <Text className="font-bold text-l pb-3">Cell Information</Text>
                          <TextInput
                            onChangeText={handleChange('cell_name')}
                            onBlur={handleBlur('cell_name')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Name of cell'
                            placeholderTextColor={"#666"}
                            value={values.cell_name}/>

                          <Text className=" font-[NunitoBold] my-4">Type of Cell:</Text>

                          <RadioButton.Group
                              onValueChange={newValue => setValue(newValue)} value={value}                              className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                                >
                                <View className="flex-row justify-between">
                                    <View className="space-x-3 flex-row items-center">
                                          <View className="bg-gray-300 rounded">
                                              <RadioButton 
                                                  color='blue'
                                                  uncheckedColor='black'
                                                  value="on-site" />
                                          </View>
                                          <Text>On Site</Text>
                                      </View>

                                      
                                      <View className="space-x-3 flex-row items-center">
                                          <View className="bg-gray-300 rounded">
                                            <RadioButton 
                                                color='blue'
                                                uncheckedColor='black'
                                                value="virtual" />
                                        </View>
                                        <Text>Virtual</Text>
                                      </View>


                                      <View className="space-x-3 flex-row items-center">
                                          <View className="bg-gray-300 rounded">
                                            <RadioButton 
                                                color='blue'
                                                uncheckedColor='black'
                                                value="hybrid" />
                                          </View>
                                          <Text>Hybrid</Text>
                                    </View>
                                </View> 
                          </RadioButton.Group>
                          </View>

                          <View className="space-y-3">
                            <Text className="font-bold text-l">Location</Text>
                              <View className="flex flex-row justify-between flex-wrap">
                                <TextInput
                                  onChangeText={handleChange('resedential_address')}
                                  onBlur={handleBlur('resedential_address')}
                                  className="rounded-lg w-full bg-gray-200 p-4 border-2 border-blue-400"
                                  placeholder='Residential Address'
                                  placeholderTextColor={"#666"}
                                  value={values.resedential_address}/>
                              </View>
                              <View className="flex flex-row justify-between flex-wrap">
                                <TextInput
                                  onChangeText={handleChange('region')}
                                  onBlur={handleBlur('region')}
                                  className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                                  placeholder='Region'
                                  placeholderTextColor={"#666"}
                                  value={values.region}/>
                                  <TextInput
                                  onChangeText={handleChange('country')}
                                  onBlur={handleBlur('country')}
                                  className="rounded-lg w-1/2 bg-gray-200 p-4 border-2 border-blue-400"
                                  placeholder='Country'
                                  placeholderTextColor={"#666"}
                                  value={values.country}/>
                              </View>
                          </View>
                          <View className="space-y-3">
                            <Text className="text-center font-[Nunito] text-l">Already have an account? 
                                    <Text className="text-blue-600 font-bold ml-4" onPress={() => navigation.navigate("Cell Leader Sign In")}> Sign in</Text>
                            </Text>
                            <TouchableOpacity
                            onPress={() => {handleSubmit()}}>
                                <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                                  <Text className="text-center font-[NunitoBlack] text-white font-bold">Register</Text> 
                                </View>
                            </TouchableOpacity>
                    </View>  
                    </View>
           
                </>

                )}
                </Formik>
          </View>
         </ScrollView>          
         </KeyboardDismiss>

    </Background>
  )
}

export default CellLeaderRegister