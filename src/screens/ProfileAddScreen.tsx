import CancelButton from '@/components/CancelButton';
import NavigatorGrayHeader from '@/components/NavigatorGrayHeader';
import NicknameInput from '@/components/NicknameInput';
import SubmitButton from '@/components/SubmitButton';
import axiosClient from '@/libs/axiosClient';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Container = styled.View`
  flex: 1;
  background-color: #f2f4fb;
`;

const InnerContainer = styled.View`
  flex: 1;
  margin-horizontal: 22px;
  align-items: center;
  justify-content: center;
`;

const ProfileImageContainer = styled.Pressable`
  margin-bottom: 34px;
  border-radius: 50px;
`;

const ProfileImage = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  resize-mode: cover;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  height: 59px;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
`;

type Props = StackScreenProps<RootStackParamList, 'ProfileAdd'>;
const ProfileAddScreen: FC<Props> = ({navigation, route}) => {
  const {bottom} = useSafeAreaInsets();
  const {id, communityId} = route.params;
  const [nickName, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const onChangeNickName = useCallback((text: string) => {
    setNickname(text);
  }, []);

  const onChangeProfileImage = useCallback(async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: true,
    });

    if (!result?.assets) {
      return;
    }

    setProfileImage(`data:image/png;base64,${result.assets[0].base64}`);
  }, []);

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSubmit = useCallback(async () => {
    const response = await axiosClient.post('community/user/add', {
      communityId,
      nickName,
      sortNo: '0',
      imageStr: profileImage,
    });
    console.log(response);
    navigation.goBack();
  }, [communityId, navigation, nickName, profileImage]);

  return (
    <Container style={{paddingBottom: bottom}}>
      <NavigatorGrayHeader title={id ? '프로필수정' : '회원가입'} />
      <InnerContainer>
        <ProfileImageContainer onPress={onChangeProfileImage}>
          {profileImage ? (
            <ProfileImage source={{uri: profileImage}} />
          ) : (
            <ProfileImage
              source={require('@/assets/images/empty-profile-icon-512.png')}
            />
          )}
        </ProfileImageContainer>
        <NicknameInput
          placeholder="닉네임을 입력해주세요."
          onChangeText={onChangeNickName}
        />
      </InnerContainer>
      <ButtonContainer>
        <CancelButton onPress={onCancel} />
        <SubmitButton
          title={id ? '프로필수정' : '가입하기'}
          onPress={onSubmit}
        />
      </ButtonContainer>
    </Container>
  );
};

export default ProfileAddScreen;
