import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/components/stack/stack';
import { useFonts } from 'expo-font';
import "./ignoreWarnings";

export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratBlack: require('./assets/fonts/Montserrat-Black.ttf'),
    Nunito: require('./assets/fonts/nunito.regular.ttf'),
    NunitoBold: require('./assets/fonts/nunito.bold.ttf'),
    NunitoBlack: require('./assets/fonts/nunito.black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
  <NavigationContainer>
      <TailwindProvider>
        <MyStack/>
      </TailwindProvider>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight : 'bold'
  },
});
