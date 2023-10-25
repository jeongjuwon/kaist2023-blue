import CancelButton from '@/components/CancelButton';
import NavigatorGrayHeader from '@/components/NavigatorGrayHeader';
import SignUpInput from '@/components/SignUpInput';
import SubmitButton from '@/components/SubmitButton';
import {RootStackParamList} from '@/navigators/RootStackNavigator';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback} from 'react';
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

  const onChangeId = useCallback((text: string) => {}, []);

  const onChangeName = useCallback((text: string) => {}, []);

  const onChangeEmail = useCallback((text: string) => {}, []);

  const onChangePassword = useCallback((text: string) => {}, []);

  const onChangePasswordre = useCallback((text: string) => {}, []);

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSubmit = useCallback(async () => {
    // todo: 네트워킹
    try {
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }, [navigation]);

  return (
    <Container style={{paddingBottom: bottom}}>
      <NavigatorGrayHeader title={'회원가입'} />
      <InnerContainer>
        <SignUpInput
          placeholder="아이디를 입력해주세요"
          style={{marginBottom: 19}}
          onChangeText={onChangeId}
        />
        <SignUpInput
          placeholder="이름을 입력해주세요"
          style={{marginBottom: 19}}
          onChangeText={onChangeName}
        />
        <SignUpInput
          placeholder="이메일을 입력해주세요."
          style={{marginBottom: 19}}
          onChangeText={onChangeEmail}
        />
        <SignUpInput
          placeholder="비밀번호를 입력해주세요."
          style={{marginBottom: 19}}
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />
        <SignUpInput
          placeholder="비밀번호를 재입력해주세요."
          style={{marginBottom: 19}}
          onChangeText={onChangePasswordre}
          secureTextEntry={true}
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
