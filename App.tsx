/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import CommonText from '@/components/CommonText';
import React from 'react';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <CommonText>안녕하세요.</CommonText>
    </SafeAreaView>
  );
}

export default App;
