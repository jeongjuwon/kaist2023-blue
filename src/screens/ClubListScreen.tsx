import CommonText from '@/components/CommonText.android';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback} from 'react';
import {FlatList} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ItemContainer = styled.TouchableOpacity`
  border-radius: 20px;
  height: 169px;
  padding-top: 25px;
  align-items: center;
  background-color: #000;
  margin-bottom: 29px;
  margin-horizontal: 16px;
`;

const ItemTitle = styled(CommonText)`
  color: #fff;
  text-align: center;
  font-family: NanumGothic;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  margin-bottom: 12px;
`;

const ItemDesc = styled(CommonText)`
  color: #fff;
  text-align: center;
  font-family: NanumGothic;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px;
`;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '사진과 감성',
    desc: '식재료부터 요리, 배움의 즐거움을 느껴보세요!\n새로운 친구들과 함께하는 즐거움이 가득합니다.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '사진과 감성',
    desc: '식재료부터 요리, 배움의 즐거움을 느껴보세요!\n새로운 친구들과 함께하는 즐거움이 가득합니다.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '사진과 감성',
    desc: '식재료부터 요리, 배움의 즐거움을 느껴보세요!\n새로운 친구들과 함께하는 즐거움이 가득합니다.',
  },
];

type ItemProps = {title: string; desc: string; onPress: () => void};

const Item = ({title, desc, onPress}: ItemProps) => (
  <ItemContainer onPress={onPress}>
    <ItemTitle>{title}</ItemTitle>
    <ItemDesc>{desc}</ItemDesc>
  </ItemContainer>
);

type Props = StackScreenProps<RootStackParamList, 'ClubList'>;
const ClubListScreen: FC<Props> = ({navigation}) => {
  const onPress = useCallback(
    (id: string) => () => {
      navigation.navigate('ClubHome', {id});
    },
    [navigation],
  );

  return (
    <Container>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            title={item.title}
            desc={item.desc}
            onPress={onPress(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default ClubListScreen;
