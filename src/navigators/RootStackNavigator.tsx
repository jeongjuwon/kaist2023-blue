import ArticleAddScreen from '@/screens/ArticleAddScreen';
import ArticleViewScreen from '@/screens/ArticleViewScreen';
import ClubHomeScreen from '@/screens/ClubHomeScreen';
import ClubListScreen from '@/screens/ClubListScreen';
import ProfileAddScreen from '@/screens/ProfileAddScreen';
import SignInScreen from '@/screens/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type RootStackParamList = {
  SignIn: undefined;
  ClubHome: {
    id: string;
  };
  ClubList: undefined;
  ArticleView: undefined;
  ArticleAdd: undefined;
  ProfileAdd: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
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
      <Stack.Screen name="ClubHome" component={ClubHomeScreen} />
      <Stack.Screen name="ArticleView" component={ArticleViewScreen} />
      <Stack.Screen name="ArticleAdd" component={ArticleAddScreen} />
      <Stack.Screen name="ProfileAdd" component={ProfileAddScreen} />
    </Stack.Navigator>
  );
}
export default RootStackNavigator;
