import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactNode, useCallback} from 'react';
import {Image} from 'react-native';
import CommonText from './CommonText';

const Container = styled.View`
  background-color: #ededed;
  height: 89px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 30px;
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
`;

const LeftContainer = styled.Pressable`
  width: 100px;
  padding-left: 22px;
`;

const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const RightContainer = styled.View`
  width: 100px;
  padding-right: 22px;
`;

const Title = styled(CommonText)`
  color: #000;
  font-family: NanumGothic;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 18.24px;
`;

const BackIcon = require('@/assets/images/arrow-left-black.png');

type Props = {
  title: string;
  RightComponent?: ReactNode;
};

const NavigatorGrayHeader: FC<Props> = ({title, RightComponent}) => {
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <LeftContainer onPress={onBack}>
        <Image source={BackIcon} />
      </LeftContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <RightContainer>{RightComponent}</RightContainer>
    </Container>
  );
};

export default NavigatorGrayHeader;
