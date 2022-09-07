import { View, Text, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useUser } from '../../lib/context/user'

const VerifyEmail = ({navigation}) => {
    const { user, refresh } = useUser();
    
    useEffect(() => {
        user.emailVerified && navigation.navigate("Cell Leader");
    }, [user]);

    console.log((user && user.emailVerified))

  return (
    <View className="bg-white p-10 justify-center gap-5 flex-1">
        <Image
        source={require("../assets/email.png")}
        className="w-full"/>
      <Text className="font-[Montserrat] text-xl text-center">A verification link been sent to your email!</Text>
      
      <Button onPress={() => refresh()} title="Refresh"/>
    </View>
  )
}

export default VerifyEmail