import styled from '@emotion/native';
import React, {FC} from 'react';
import CommonText from './CommonText.ios';

const Container = styled.View``;

const InnerContainer = styled.View`
  height: 169px;
  padding-top: 25px;
  algin-items: center;
  background-color: #000;
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
  onPress?: () => void;
  title: string;
  desc: string;
};

const ClubHeader: FC<Props> = ({onPress, title, desc}) => {
  return (
    <Container>
      <InnerContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDesc>{desc}</ItemDesc>
      </InnerContainer>
      <BottomBar />
    </Container>
  );
};

export default ClubHeader;
