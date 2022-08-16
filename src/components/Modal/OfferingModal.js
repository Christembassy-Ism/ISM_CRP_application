import { View, Text, Pressable, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { RadioButton } from 'react-native-paper'
import FontAwesome from '@expo/vector-icons/FontAwesome5';


const OfferingModal = ({show, hide, data}) => {
  const [value, setValue] = React.useState('Pay Gate');

  return (
    <Pressable
    style={{display : show ? "flex" : "none"}} 
    onPress={() => hide()}
    className="flex-1 absolute h-full justify-center px-10 w-full bg-gray-100 z-20">
        <TouchableHighlight>
        
            <View className="justify-between py-10 px-6 bg-white shadow-xl rounded-xl">
                    <Formik
                    initialValues={{amount : "", paymentType : ""}}
                    onSubmit={values => console.log(values)}>

                    {({onSubmit, handleChange, handleBlur, values}) => (
                    <>
                        <View className="space-y-5 w-full">
                            <View className="text-3xl flex-row justify-between font-bold">
                                <Text className="text-3xl  font-[NunitoBold] justify-between font-bold">Pay Offering</Text>  
                                <FontAwesome name="credit-card" color={"#1a6df0"} size={26}/>
                            </View>
                            <View className="space-y-4">
                                <Text
                                className=" font-[NunitoBold] mt-5">Amount :</Text>
                                <TextInput
                                onChangeText={handleChange('amount')}
                                onBlur={handleBlur('amount')}
                                className="rounded-lg bg-white-200 p-3 border-2 border-blue-400"
                                placeholder='$0.00'
                                value={values.email}/>

                              <RadioButton.Group
                                onValueChange={newValue => setValue(newValue)} value={value}                              className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                                  >
                                    <Text
                                    className=" font-[NunitoBold] mt-5">Payment Option :</Text>
                                  <View 
                                  className="flex-row items-center">
                                      <RadioButton 
                                        color='blue'
                                        value="Pay Gate" />
                                      <Text>Pay Gate</Text>
                                    </View>
                                  <View className="flex-row items-center">
                                      <RadioButton
                                        color='blue'
                                        value="Stripe" />
                                  <Text>Stripe</Text>

                                  </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                        <View className="mt-5">
                                <TouchableOpacity>
                                    <View className="text-white bg-blue-600  py-5  rounded-xl shadow-lg">
                                     <Text className="text-center text-white font-bold">Pay Now</Text> 
                                    </View>
                                </TouchableOpacity>
                        </View>             
                    </>
                    )}
                    </Formik>
            </View>

        </TouchableHighlight>
    </Pressable>


  )
}

export default OfferingModal