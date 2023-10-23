import 'react-native-gesture-handler';

import RootStackNavigator from '@/navigators/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
