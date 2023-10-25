import CommonText from '@/components/CommonText.android';
import SignInButton from '@/components/SignInButton';
import SignInInput from '@/components/SignInInput';
import axiosClient from '@/libs/axiosClient';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useState} from 'react';
import {ImageBackground} from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'SignIn'>;

const Container = styled(ImageBackground)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled(CommonText)`
  color: #fff;
  font-family: Baloo;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 57px;
  letter-spacing: -2.5px;
  margin-bottom: 131px;
`;

const NotAMemberText = styled(CommonText)`
  color: #fff;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 13px;
`;

const SignUpButton = styled.TouchableOpacity``;

const SignUpText = styled(CommonText)`
  color: #a9e0ff;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
`;

const SignInScreen: FC<Props> = ({navigation}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = useCallback(async () => {
    // todo: 네트워킹
    try {
      const response = await axiosClient.post('auth/authenticate', {
        userId: id,
        upassword: password,
      });
      console.log('response', response);
      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate('ClubList');
    } catch (e) {
      console.log(e);
    }
  }, [id, navigation, password]);

  const onChangeId = useCallback((text: string) => {
    setId(text);
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <Container source={require('@/assets/images/signin_background.png')}>
      <LogoText>Blue</LogoText>
      <SignInInput
        placeholder="아이디를 입력하세요."
        style={{marginBottom: 19}}
        onChangeText={onChangeId}
      />
      <SignInInput
        placeholder="비밀번호를 입력하세요."
        style={{marginBottom: 19}}
        onChangeText={onChangePassword}
      />
      <SignInButton style={{marginBottom: 50}} onPress={onSignIn} />
      <NotAMemberText>만약 회원이 아니라면</NotAMemberText>
      <SignUpButton onPress={onSignUp}>
        <SignUpText>회원가입</SignUpText>
      </SignUpButton>
    </Container>
  );
};

export default SignInScreen;
