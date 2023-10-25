import CancelButton from '@/components/CancelButton';
import NavigatorGrayHeader from '@/components/NavigatorGrayHeader';
import SignUpInput from '@/components/SignUpInput';
import SubmitButton from '@/components/SubmitButton';
import axiosClient from '@/libs/axiosClient';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useState} from 'react';
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

const ButtonContainer = styled.View`
  flex-direction: row;
  height: 59px;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
`;

type Props = StackScreenProps<RootStackParamList, 'SignUp'>;
const SignUpScreen: FC<Props> = ({navigation, route}) => {
  const {bottom} = useSafeAreaInsets();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');

  const onChangeId = useCallback((text: string) => {
    setId(text);
  }, []);

  const onChangeName = useCallback((text: string) => {
    setName(text);
  }, []);

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onChangePasswordre = useCallback((text: string) => {
    setPasswordRe(text);
  }, []);

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSubmit = useCallback(async () => {
    // todo: 네트워킹
    try {
      console.log(id, name, email, password, passwordRe);
      const response = await axiosClient.post('api/signup', {
        userId: id,
        userName: name,
        upassword: password,
        email: email,
      });
      console.log('response', response);
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }, [email, id, name, navigation, password, passwordRe]);

  return (
    <Container style={{paddingBottom: bottom}}>
      <NavigatorGrayHeader title={'회원가입'} />
      <InnerContainer>
        <SignUpInput
          placeholder="아이디를 입력해주세요"
          style={{marginBottom: 19}}
          onChangeText={onChangeId}
          value={id}
        />
        <SignUpInput
          placeholder="이름을 입력해주세요"
          style={{marginBottom: 19}}
          onChangeText={onChangeName}
          value={name}
        />
        <SignUpInput
          placeholder="이메일을 입력해주세요."
          style={{marginBottom: 19}}
          onChangeText={onChangeEmail}
          value={email}
        />
        <SignUpInput
          placeholder="비밀번호를 입력해주세요."
          style={{marginBottom: 19}}
          onChangeText={onChangePassword}
          secureTextEntry={true}
          value={password}
        />
        <SignUpInput
          placeholder="비밀번호를 재입력해주세요."
          style={{marginBottom: 19}}
          onChangeText={onChangePasswordre}
          secureTextEntry={true}
          value={passwordRe}
        />
      </InnerContainer>
      <ButtonContainer>
        <CancelButton onPress={onCancel} />
        <SubmitButton title={'가입하기'} onPress={onSubmit} />
      </ButtonContainer>
    </Container>
  );
};

export default SignUpScreen;
