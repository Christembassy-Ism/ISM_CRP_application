import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import HomeScreen from '../../screens/Cell_Members/Tab/HomeScreen';
import MeetingScreen from '../../screens/Cell_Members/Tab/MeetingScreen';
import OfferingScreen from '../../screens/Cell_Members/Tab/OfferingScreen';
import ProfileScreen from '../../screens/Cell_Members/Tab/ProfileScreen';
import Home from '../../screens/Cell_Leaders/Tab/Home';
import Report from '../../screens/Cell_Leaders/Tab/Report';
import Meeting from '../../screens/Cell_Leaders/Tab/Meeting';
import Profile from '../../screens/Cell_Leaders/Tab/Profile';
import Members from '../../screens/Cell_Leaders/Tab/Members';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const CellLeaderTab = createBottomTabNavigator();

const MenuTab = () => {
  return (
      <Tab.Navigator

      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch(route.name){
            case 'Home' : 
            iconName = 'home';
            break;

            case "Meeting" : 
            iconName = 'video';
            break;

            case "Offering" : 
            iconName = 'credit-card';
            break;

            case "Profile" : 
            iconName = 'user-alt';
            break;
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1523A6',
        tabBarInactiveTintColor: 'gray',
        headerShown : false
      })}>
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Meeting" component={MeetingScreen} />
        <Tab.Screen name="Offering" component={OfferingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
  );
};

export default MenuTab;


export const CellLeaderMenuTab = () => {
  return (
    <CellLeaderTab.Navigator
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch(route.name){
          case 'Home' : 
          iconName = <FontAwesome name={'home'} size={size} color={color} />;
          break;

          case "Report" : 
          iconName = <FontAwesome name={'file-upload'} size={size} color={color} />;
          break;

          case "Meeting" : 
          iconName = <View
          style={{
            position: 'absolute',
            bottom: 13, // space from bottombar
            height: 68,
            width: 68,
            borderRadius: 58,
            padding : 5,
            backgroundColor: '#ffff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name={"plus-circle"} size={48} color={color} />
        </View>
          break;

          case "Members" : 
          iconName = <FontAwesome name={'users'} size={size} color={color} />;
          break;
          case "Profile" : 
          iconName = <FontAwesome name={'user-alt'} size={size} color={color} />;
          break;
        }
        // You can return any component that you like here!
        return iconName;
      },
      tabBarActiveTintColor: '#1523A6',
      tabBarInactiveTintColor: 'gray',
      headerShown : false,
      tabBarShowLabel : false,
    })}>
      
      <CellLeaderTab.Screen name="Home" component={Home} />
      <CellLeaderTab.Screen name="Report" component={Report} />
      <CellLeaderTab.Screen name="Meeting" component={Meeting} />
      <CellLeaderTab.Screen name="Members" component={Members} />
      <CellLeaderTab.Screen name="Profile" component={Profile} />

    </CellLeaderTab.Navigator>
);
}