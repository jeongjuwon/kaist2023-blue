import 'react-native-gesture-handler';

import RootStackNavigator from '@/navigators/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import * as React from 'react';

export default function App() {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 0);
  }, []);

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
