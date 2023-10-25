import relativeTime from 'dayjs/plugin/relativeTime';
import 'react-native-gesture-handler';

import RootStackNavigator from '@/navigators/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import dayjs from 'dayjs';
import * as React from 'react';

dayjs.extend(relativeTime);

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
