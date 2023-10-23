import ClubHeader from '@/components/ClubHeader';
import CommonText from '@/components/CommonText';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {FlatList} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nickname: '하하',
    title: '[모집] 새로운 동호회원을 기다립니다!!',
    contents: '독서동호회에서 함께 책을 읽고 토론할 새로운 멤버를 모집합..',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nickname: '하하',
    title: '[모집] 새로운 동호회원을 기다립니다!!',
    contents: '독서동호회에서 함께 책을 읽고 토론할 새로운 멤버를 모집합..',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nickname: '하하',
    title: '[모집] 새로운 동호회원을 기다립니다!!',
    contents: '독서동호회에서 함께 책을 읽고 토론할 새로운 멤버를 모집합..',
  },
];

const ItemContainer = styled.View`
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e9e9e9;
  margin-bottom: 15px;
  margin-horizontal: 16px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const ItemNickName = styled(CommonText)`
  color: #000;
  font-family: NanumGothic;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.82px;
  margin-bottom: 21px;
`;

const ItemTitle = styled(CommonText)`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.24px;
  margin-bottom: 9px;
`;

const ItemContent = styled(CommonText)`
  color: #000
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.82px;
`;

type ItemProps = {title: string; nickname: string; content: string};

const Item = ({title, nickname, content}: ItemProps) => (
  <ItemContainer>
    <ItemNickName>{nickname}</ItemNickName>
    <ItemTitle>{title}</ItemTitle>
    <ItemContent>{content}</ItemContent>
  </ItemContainer>
);

type Props = StackScreenProps<RootStackParamList, 'ClubHome'>;
const ClubHomeScreen: FC<Props> = ({}) => {
  return (
    <Container>
      <FlatList
        data={DATA}
        ListHeaderComponent={
          <ClubHeader
            title="창작과 문예"
            desc={`상상이 현실이 되는 그 순간\n창작과 문예의 세계에 빠져보세요.`}
          />
        }
        renderItem={({item}) => (
          <Item
            title={item.title}
            nickname={item.nickname}
            content={item.contents}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default ClubHomeScreen;
