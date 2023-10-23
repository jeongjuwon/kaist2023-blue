import CommonText from '@/components/CommonText.android';
import SignInButton from '@/components/SignInButton';
import SignInInput from '@/components/SignInInput';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback} from 'react';
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

const SignUpText = styled(CommonText)`
  color: #a9e0ff;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
`;

const SignInScreen: FC<Props> = ({navigation}) => {
  const onSignIn = useCallback(() => {
    navigation.navigate('ClubList');
  }, [navigation]);

  return (
    <Container source={require('@/assets/images/signin_background.png')}>
      <LogoText>Blue</LogoText>
      <SignInInput placeholder="Username" style={{marginBottom: 19}} />
      <SignInInput placeholder="Password" style={{marginBottom: 19}} />
      <SignInButton style={{marginBottom: 50}} onPress={onSignIn} />
      <NotAMemberText>만약 회원이 아니라면</NotAMemberText>
      <SignUpText>회원가입</SignUpText>
    </Container>
  );
};

export default SignInScreen;
