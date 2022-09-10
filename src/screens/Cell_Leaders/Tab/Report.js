import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Button, Keyboard, Pressable, Image } from 'react-native'
import React, { useState } from 'react';
import { Formik } from 'formik';
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import CustomButton from '../../../components/Buttons/CustomButton';
import KeyboardDismiss from '../../../components/Keyboard/KeyboardDismiss';
import ImagePickerExample from '../../../components/Buttons/openMedia';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../../lib/firebase/firebase';
import { useUser } from '../../../../lib/context/user';
import Selct from '../../../components/Buttons/openMedia';

const Report = () => {
  const initialState = [{title: "", attendant_name: ''}]
  const [attendanceList, setAttendanceList ] = useState(initialState);
  const [testimonies, setTestimonies ] = useState([{name : "", testimony : ""}]);
  const [ images, setImages ] =  useState([]);
  const [ imagesURL, setImagesURL ] =  useState([]);
  const { data } = useUser();

  const handleList = (e, index, name, state, setState) => {
    let list = [...state];
    list[index][name] = e;
    setState(list);
  }

  const addInput = (state, setState, initial) => {
    const list = [...state, initial]
    setState(list);
  }

  const removeItem = (index, state, setState) => {
    const list = [...state]
    list.splice(index, 1);
    setState(list)
  }

  const getBlob = async (image) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    
    return blob;
  }

  const uploadImage = async (item) => {
    console.log("one")
    try {      
      const image = item.replace("file://", "");
      const filename = image.substring(image.lastIndexOf('/') + 1);
      const ref = storage.ref("ISM");
      const name = ref.child(data.cell_name + "/" + filename);

      const blob = await getBlob(image)

      const upload = await name.put(blob);

      blob.close();

      const getUrl = await upload.ref.getDownloadURL();
      
      const url = getUrl;

      setImagesURL((prev) => ([...prev, url]));

    } catch (error) {
      console.log(error)
    }
  }

  const UploadImages = async () => {
    for (let image of images){
      await uploadImage(image);
    }
  }

  const selectImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        // allowsMultipleSelection : true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImages([...images, result.uri]);
      };
  }

  const removeImage = (index) => {
    const imgs = [...images];
    imgs.splice(index, 1);
    setImages(imgs);
  }

  // const sendReport = (data) => {
  //   const report
  // }

  console.log(imagesURL);

  return (
    <KeyboardDismiss>
      
      <ScrollView className="px-5 py-16">
      <Text className="font-[NunitoBold] py-10 text-5xl">Cell Report</Text>
      <TouchableWithoutFeedback
         onPress={() => {Keyboard.dismiss; console.log("clicked")}}>
        <Formik
                initialValues={{date : "", attendance : "",summary : "", pictures : "", testimonies : "" }}
                // onSubmit={values => console.log({...values, attendance : attendanceList, testimonies : testimonies })}>
                onSubmit={values => UploadImages()}>

                {({handleSubmit, handleChange, handleBlur, values}) => (
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
                            onChangeText={(e) => {handleChange("attendance")}}
                            onBlur={handleBlur('attendance')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Num of attendants'
                            keyboardType='numeric'
                            maxLength={3}
                            placeholderTextColor={"black"}/>
                            {
                              attendanceList.map((item, index) => (
                                <View key={index} className="flex-row justify-between gap-2">
                                  <TextInput
                                  onChangeText={(e) => handleList(e, index, "attendant_name", attendanceList, setAttendanceList)}
                                  className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400 flex-1"
                                  placeholder="Full Name"
                                  placeholderTextColor={"black"}
                                  value={item.attendant_name}
                                  />

                                  <Pressable
                                  onPress={() => removeItem(index, attendanceList, setAttendanceList)}>
                                    <View className="bg-red-400 rounded-full flex-row items-center p-4 ">
                                      <FontAwesome  name="trash" size={30} color="white"/>
                                    </View>
                                  </Pressable>
                             </View> 
                              ))
                            }

                            <View>
                              <CustomButton 
                              title={"Add Attendant"}
                              onPress={() => addInput(attendanceList, setAttendanceList, { title : "", attendant_name : ""})}
                              />
                            </View>
                         </View>

                        <View className="testimonies space-y-2 py-5">
                        <Text className="font-[NunitoBold] text-lg">Testimonies </Text>
                          <TextInput
                            onChangeText={(e) => {handleChange('testimonies')}}
                            onBlur={handleBlur('testimonies')}
                            className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Num of Testimonies'
                            keyboardType='numeric'
                            maxLength={2}
                            placeholderTextColor={"black"}/>

                            {
                              testimonies.map((item, index) => (
                                <View key={index} className="flex-row justify-between gap-3">
                                  <TextInput
                                  onChangeText={(e) => handleList(e, index, "testimony", testimonies, setTestimonies)}
                                  className="rounded-lg bg-gray-200 p-4 border-2 border-blue-400 flex-1"
                                  placeholder="Testimony"
                                  placeholderTextColor={"black"}
                                value={item.testimony}/>
                                  <Pressable
                                  onPress={() => removeItem(index, testimonies, setTestimonies)}>
                                    <View className="bg-red-400 rounded-full flex-row items-center p-4 ">
                                      <FontAwesome  name="trash" size={30} color="white"/>
                                    </View>
                                  </Pressable>
                             </View> 
                              ))
                            } 
                            <View>
                              <CustomButton 
                              title={"Add Testimony"}
                              onPress={() => addInput(testimonies, setTestimonies, { name : "", testimony : ""})}
                              />
                            </View>
                        </View>
                          <Text className="font-[NunitoBold] text-lg">Cell Summary </Text>

                          <TextInput
                            onChangeText={handleChange('summary')}
                            onBlur={handleBlur('summary')}
                            className="rounded-lg h-40 bg-gray-200 p-4 border-2 border-blue-400"
                            placeholder='Write cell summary here.'
                            multiline
                            editable
                            placeholderTextColor={"black"}
                            value={values.summary}/>

                           <View className="rounded-lg space-y-2 bg-gray-200 p-4 border-2 border-blue-400 items-center">
                            <FontAwesome name="cloud-upload-alt" size={50} color={"#3953DD"}/>
                            <Text className="font-[NunitoBold] text-xl">Upload Images</Text>
                            <Text>Maximum of 5 Images</Text>
                            {
                              <ScrollView horizontal={true}>
                                <View className="flex-row gap-3">
                                      {images.map((uri, index) => (
                                        <View key={index+uri} className="relative">
                                          <Image source={{ uri: uri }} style={{ width: 100, height: 100 }} />
                                          <Pressable
                                          onPress={() => removeImage(index)}
                                          className="absolute right-0 p-3">
                                            <FontAwesome name="trash" size={30} color={"red"}/>              
                                          </Pressable>
                                        </View>
                                      ))}                                  
                                  
                                </View>
                              </ScrollView>
                            }
                            <CustomButton
                            title={"Select Images"}
                            onPress={() => selectImage()}
                            bg="bg-[#3953DD]"/>
                           </View>
                        </View>
                    </View>
                    <View className="py-5 mb-16">
                            <TouchableOpacity
                            onPress={() => {handleSubmit(); console.log("clicked")}}>
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