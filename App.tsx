/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import CommonText from '@/components/CommonText';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      console.log('3초 뒤에 실행됩니다.');
      RNBootSplash.hide();
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <CommonText>안녕하세요.</CommonText>
    </SafeAreaView>
  );
}

export default App;
