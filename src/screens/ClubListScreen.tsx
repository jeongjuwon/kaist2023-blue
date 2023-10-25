import CommonText from '@/components/CommonText.android';
import axiosClient from '@/libs/axiosClient';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
`;

const ItemContainer = styled.TouchableOpacity`
  border-radius: 20px;
  height: 169px;
  background-color: #000;
  margin-bottom: 29px;
  margin-horizontal: 16px;
  padding-horizontal: 0px;
`;

const ItemBackgroundContainer = styled.ImageBackground`
  flex: 1;
  padding-top: 25px;
  align-items: center;
  border-radius: 20px;
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

type ItemProps = {
  title: string;
  desc: string;
  imageStr?: string;
  onPress: () => void;
};

const Item = ({title, desc, imageStr, onPress}: ItemProps) => (
  <ItemContainer onPress={onPress}>
    <ItemBackgroundContainer source={{uri: imageStr}}>
      <ItemTitle>{title}</ItemTitle>
      <ItemDesc>{desc}</ItemDesc>
    </ItemBackgroundContainer>
  </ItemContainer>
);

type Data = {
  id: number;
  title: string;
  summary: string;
  status?: string;
  createdAt: Date;
  image: string;
  imageStr?: string;
  type: string;
};

type Props = StackScreenProps<RootStackParamList, 'ClubList'>;
const ClubListScreen: FC<Props> = ({navigation}) => {
  const [clubList, setClubList] = useState<Data[]>([]);

  const onPress = useCallback(
    (id: number) => async () => {
      try {
        const response = await axiosClient.post('community/list/user', {});

        const filtered = response.data.data.filter(
          (item: any) => item.communityId === id && !!item.userId,
        );

        if (filtered.length === 0) {
          navigation.navigate('ProfileAdd', {
            communityId: id,
          });
        } else {
          navigation.navigate('ClubHome', {communityId: id});
        }
      } catch (e) {
        console.error(e);
      }
    },
    [navigation],
  );

  useEffect(() => {
    async function init() {
      const response = await axiosClient.get('community/list');
      setClubList(response.data.data);
    }
    init();
  }, []);

  return (
    <Container>
      {clubList.length > 0 && (
        <FlatList
          data={clubList}
          renderItem={({item}) => (
            <Item
              title={item.title}
              desc={item.summary}
              onPress={onPress(item.id)}
              imageStr={`${item.type}${item.image}`}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </Container>
  );
};

export default ClubListScreen;
