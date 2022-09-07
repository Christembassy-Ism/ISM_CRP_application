import { Platform, TouchableWithoutFeedback, Button, Keyboard, KeyboardAvoidingView  } from 'react-native'
import React from 'react'

const KeyboardDismiss = ({children}) => {
  return (
   <KeyboardAvoidingView
    className="flex-1"
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         {children}   
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

export default KeyboardDismiss