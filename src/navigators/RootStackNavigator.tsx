import ArticleAddScreen from '@/screens/ArticleAddScreen';
import ArticleViewScreen from '@/screens/ArticleViewScreen';
import ClubHomeScreen from '@/screens/ClubHomeScreen';
import ClubListScreen from '@/screens/ClubListScreen';
import ProfileAddScreen from '@/screens/ProfileAddScreen';
import SignInScreen from '@/screens/SignInScreen';
import SignUpScreen from '@/screens/SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {useEffect} from 'react';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ClubHome: {
    communityId: number;
  };
  ClubList: undefined;
  ArticleView: {
    communityId: number;
    id: number;
  };
  ArticleAdd: {
    communityId: number;
  };
  ProfileAdd: {
    communityId: number;
    id?: number;
  };
};
const Stack = createStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    async function init() {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token);
    }

    init();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName={isLoggedIn ? 'ClubList' : 'SignIn'}>
      {isLoggedIn === false && (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
      <>
        <Stack.Screen
          name="ClubList"
          component={ClubListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ClubHome"
          component={ClubHomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ArticleView"
          component={ArticleViewScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ArticleAdd"
          component={ArticleAddScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileAdd"
          component={ProfileAddScreen}
          options={{
            headerShown: false,
          }}
        />
      </>
    </Stack.Navigator>
  );
}
export default RootStackNavigator;
