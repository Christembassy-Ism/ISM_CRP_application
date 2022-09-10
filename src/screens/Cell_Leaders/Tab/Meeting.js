import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { RadioButton } from 'react-native-paper'
// import {
//     RTCPeerConnection,
//     RTCIceCandidate,
//     RTCSessionDescription,
//     RTCView,
//     MediaStream,
//     MediaStreamTrack,
//     mediaDevices,
//     registerGlobals
//   } from 'react-native-webrtc';


const Meeting = () => {
  const [value, setValue] = React.useState('Pay Gate');
  const [ localStream, setLocalStream ] = React.useState(null);

  const startLocalStream = async () => {
  //   // isFront will determine if the initial camera should face user or environment
  //   const isFront = true;
  //   const devices = await mediaDevices.enumerateDevices();

  //   const facing = isFront ? 'front' : 'environment';
  //   const videoSourceId = devices.find(device => device.kind === 'videoinput' && device.facing === facing);
  //   const facingMode = isFront ? 'user' : 'environment';
  //   const constraints = {
  //     audio: true,
  //     video: {
  //       mandatory: {
  //         minWidth: 500, // Provide your own width, height and frame rate here
  //         minHeight: 300,
  //         minFrameRate: 30,
  //       },
  //       facingMode,
  //       optional: videoSourceId ? [{ sourceId: videoSourceId }] : [],
  //     },
  //   };
  //   const newStream = await mediaDevices.getUserMedia(constraints);
  //   setLocalStream(newStream);
  };
  console.log(localStream)

  return (
    <View className="flex-1 bg-white justify-between pt-14">
      {/* <View className="pt-20">
        <Text className="font-[NunitoBold] text-4xl">Join A Meeting</Text>
      </View> */}
      <View className="">
        <Image
        source={require("../../../assets/start-meeting.png")}
        className="w-full"/>
      </View>



      <View
      className="bg-gray-200 py-10 px-8">
        <Text className="text-4xl font-[NunitoBold] mb-8">Start A Meeting</Text>
        <Formik
                initialValues={{title : "", host : ""}}
                onSubmit={values => console.log(values)}>

                {({onSubmit, handleChange, handleBlur, values}) => (
                <>
                    <View className="space-y-16">
                        <View className="space-y-4">
                          <TextInput
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            className="rounded-xl bg-white py-5 p-4 border-0"
                            placeholder='Title'
                            value={values.title}/>
                          <TextInput
                            onChangeText={handleChange('host')}
                            onBlur={handleBlur('host')}
                            className="rounded-xl bg-white py-5 p-4 border-0"
                            placeholder='Host'
                            value={values.host}/>
                        </View>
                    </View>
                    <View className="py-5">
                            <TouchableOpacity
                            onPress={() => startLocalStream()}>
                                <View className="text-white bg-blue-600 w-full py-5  rounded-xl shadow-lg">
                                  <Text className="text-center text-white font-bold">Start Meeting</Text> 
                                </View>
                            </TouchableOpacity>
                    </View>             
                </>

                )}
                </Formik>
      </View>
    </View>
  )
}

export default Meeting