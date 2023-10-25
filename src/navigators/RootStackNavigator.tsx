import ArticleAddScreen from '@/screens/ArticleAddScreen';
import ArticleViewScreen from '@/screens/ArticleViewScreen';
import ClubHomeScreen from '@/screens/ClubHomeScreen';
import ClubListScreen from '@/screens/ClubListScreen';
import ProfileAddScreen from '@/screens/ProfileAddScreen';
import SignInScreen from '@/screens/SignInScreen';
import SignUpScreen from '@/screens/SignUpScreen';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ClubHome: {
    id: string;
  };
  ClubList: undefined;
  ArticleView: {
    id: string;
  };
  ArticleAdd: undefined;
  ProfileAdd: {
    id?: string;
  };
};
const Stack = createStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
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
    </Stack.Navigator>
  );
}
export default RootStackNavigator;
