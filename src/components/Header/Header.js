import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, TouchableHighlight} from 'react-native';

const Header = ({navigation}) => {
  return ( 
        <View>
          <TouchableHighlight  
          onPress={() => navigation.goBack()}>
              <View
              className="py-3 px-5 bg-white flex-row items-center gap-3">
                <FontAwesome name="arrow-left" size={15}/> 
                <Text className="text-lg">Back</Text>            
              </View>
          </TouchableHighlight>
        </View>
  )
}

export default Header