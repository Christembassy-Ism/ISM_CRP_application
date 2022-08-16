import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../../screens/Intro';
import CellMemberSignIn from '../../screens/Cell_Members/auth/signin';
import CellLeaderSignIn from '../../screens/Cell_Leaders/auth/signin';
import CellMemberRegister from '../../screens/Cell_Members/auth/register';
import CellMemberIndex from '../../screens/Cell_Members/Index';
import CellLeaderRegister from '../../screens/Cell_Leaders/auth/register';
import CellLeaderIndex from '../../screens/Cell_Leaders';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen
          name="Intro"
          component={Intro}
        />

        {/* Cell members activity screens */}
        <Stack.Group>
          <Stack.Screen name="Cell Member Sign In" 
              component={CellMemberSignIn}
          />
          <Stack.Screen name="Cell Member Register" 
              component={CellMemberRegister}
          />
          <Stack.Screen name="Cell Member" 
              component={CellMemberIndex}
          />
          <Stack.Screen name="Cell Leader" 
              component={CellLeaderIndex}
          />
        </Stack.Group>

        {/* Cell leaders actvity screens */}
        <Stack.Group>
          <Stack.Screen name="Cell Leader Sign In" 
                component={CellLeaderSignIn}
            />
          <Stack.Screen name="Cell Leader Register" 
              component={CellLeaderRegister}
          />
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default MyStack;