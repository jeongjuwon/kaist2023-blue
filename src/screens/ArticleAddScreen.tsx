import CancelButton from '@/components/CancelButton';
import NavigatorGrayHeader from '@/components/NavigatorGrayHeader';
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
`;

const TitleContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #e9e9e9;
  padding-top: 36px;
  padding-bottom: 16px;
`;

const ContentsContainer = styled.View`
  padding-top: 21px;
  flex: 1;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  height: 59px;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
`;

const StyledTextInput = styled.TextInput`
  color: #000;
  font-family: NanumGothic;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.82px;
`;

type Props = StackScreenProps<RootStackParamList, 'ArticleAdd'>;
const ArticleAddScreen: FC<Props> = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSubmit = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container style={{paddingBottom: bottom}}>
      <NavigatorGrayHeader title="게시글 작성" />
      <InnerContainer>
        <TitleContainer>
          <StyledTextInput
            placeholder="제목을 입력해주세요."
            placeholderTextColor={'#7d7d7d'}
          />
        </TitleContainer>
        <ContentsContainer>
          <StyledTextInput
            placeholder="내용을 입력해주세요."
            placeholderTextColor={'#7d7d7d'}
          />
        </ContentsContainer>
      </InnerContainer>
      <ButtonContainer>
        <CancelButton onPress={onCancel} />
        <SubmitButton title="등록" onPress={onSubmit} />
      </ButtonContainer>
    </Container>
  );
};

export default ArticleAddScreen;
