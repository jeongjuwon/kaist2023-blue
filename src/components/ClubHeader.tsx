import styled from '@emotion/native';
import React, {FC} from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommonText from './CommonText.ios';
import TotalMemberInfo from './TotalMemberInfo';

const Container = styled.View`
  background-color: #000;
`;

const TopContainer = styled.View`
  flex-direction: row;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  bottom: 63px;
  justify-content: space-between;
`;

const InnerContainer = styled.View`
  height: 250px;
  padding-top: 25px;
  algin-items: center;
  margin-horizontal: 25px;
`;

const BackButtonContainer = styled.Pressable`
  width: 100px;
`;

const WriteButtonContainer = styled.Pressable`
  width: 85px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(17, 141, 255, 0.8);
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const WriteButtonIcon = styled.Image`
  width: 10.057px;
  height: 10.914px;
  margin-right: 8.94px;
`;

const WriteButtonTitle = styled(CommonText)`
  color: #fff;
  font-family: NanumGothic;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 13.68px;
`;

const Title = styled(CommonText)`
  color: #fff;
  text-align: center;
  font-family: NanumGothic;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  margin-bottom: 12px;
  margin-right: 100px;
  flex: 1px;
`;

const Description = styled(CommonText)`
  color: #fff;
  text-align: center;
  font-family: NanumGothic;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px;
  flex: 1px;
`;

const BottomBar = styled.View`
  border-radius: 14px 14px 0px 0px;
  background-color: #fff;
  height: 28px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

type Props = {
  onBack?: () => void;
  onWrite?: () => void;
  title: string;
  desc: string;
};

const BackIcon = require('@/assets/images/arrow-left.png');
const WriteIcon = require('@/assets/images/write-icon.png');

const ClubHeader: FC<Props> = ({onBack, onWrite, title, desc}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Container style={{paddingTop: top}}>
      <InnerContainer>
        <TopContainer>
          <BackButtonContainer onPress={onBack}>
            <Image source={BackIcon} />
          </BackButtonContainer>
          <Title>{title}</Title>
        </TopContainer>
        <Description>{desc}</Description>
        <BottomContainer>
          <TotalMemberInfo count={100} />
          <WriteButtonContainer onPress={onWrite}>
            <WriteButtonIcon source={WriteIcon} />
            <WriteButtonTitle>글쓰기</WriteButtonTitle>
          </WriteButtonContainer>
        </BottomContainer>
      </InnerContainer>
      <BottomBar />
    </Container>
  );
};

export default ClubHeader;
