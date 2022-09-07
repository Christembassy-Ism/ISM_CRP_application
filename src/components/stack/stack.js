import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../../screens/Intro';
import CellMemberSignIn from '../../screens/Cell_Members/auth/signin';
import CellLeaderSignIn from '../../screens/Cell_Leaders/auth/signin';
import CellMemberRegister from '../../screens/Cell_Members/auth/register';
import CellMemberIndex from '../../screens/Cell_Members/Index';
import CellLeaderRegister from '../../screens/Cell_Leaders/auth/register';
import CellLeaderIndex from '../../screens/Cell_Leaders';
import OfferingScreen from '../../screens/Cell_Members/Tab/OfferingScreen';
import Support from '../Support/Support';
import VerifyEmail from '../../screens/verifyEmail';
import { useUser } from '../../../lib/context/user';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const { user } = useUser();
  console.log((user && user.emailVerified))

  return (
      <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}>
          {/* {
          user === null ? ( */}
        <Stack.Group>
          <Stack.Screen
            name="Intro"
            component={Intro}
          />
          <Stack.Screen name="Cell Leader Sign In" 
                component={CellLeaderSignIn}
            />
          <Stack.Screen name="Cell Leader Register" 
              component={CellLeaderRegister}
          />
          <Stack.Screen name="Cell Member Sign In" 
              component={CellMemberSignIn}
          />
          <Stack.Screen name="Cell Member Register" 
              component={CellMemberRegister}
          />
        </Stack.Group>
          {/* ) : ( */}
            <Stack.Group>
                <Stack.Screen name="Cell Leader" 
                component={CellLeaderIndex}
                />
                <Stack.Screen name="Cell Member" 
                    component={CellMemberIndex}
                />
                <Stack.Screen name="Offerings" 
                    component={OfferingScreen}
                />
                <Stack.Screen name="Support" 
                    component={Support}
                />
                <Stack.Screen name="Verify Email" 
                    component={VerifyEmail}
                />
            </Stack.Group>
           {/* )} */}

      </Stack.Navigator>
  );
};

export default MyStack;