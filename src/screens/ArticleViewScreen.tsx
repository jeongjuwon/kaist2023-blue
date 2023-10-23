import {RootStackParamList} from '@/navigators/RootStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View} from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'ArticleView'>;
const ArticleViewScreen: FC<Props> = ({}) => {
  return <View />;
};

export default ArticleViewScreen;
