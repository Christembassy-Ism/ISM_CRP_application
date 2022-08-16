import { View, Text, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'

const MenuDropdown = ({show,hide,  data}) => {

  return (
    <Pressable
    style={{display : show ? "flex" : "none"}} 
    onPress={() => hide()}
    className="flex-1 absolute h-full items-end w-full bg-transparent z-20">
        <TouchableHighlight>
            <View className="w-1/2 mt-24 mr-5 bg-gray-100 rounded space-y-5 shadow-lg right-0 px-5 py-4">
                <TouchableOpacity>
                    <Text className="text-lg">
                        Edit Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-lg">
                        Change Cell
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-lg">
                        Delete Account
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableHighlight>
    </Pressable>


  )
}

export default MenuDropdown