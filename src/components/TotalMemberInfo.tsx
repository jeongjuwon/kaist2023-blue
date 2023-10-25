import styled from '@emotion/native';
import React, {FC} from 'react';
import CommonText from './CommonText.ios';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 15.5px;
  background-color: rgba(12, 12, 12, 0.8);
`;

const SnowManIcon = styled.Image`
  width: 11.7px;
  height: 14.114px;
  margin-right: 8.3px;
`;

const MemberCount = styled(CommonText)`
  color: #fff;
  font-family: NanumGothic;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 13.68px;
`;

type Props = {
  count: number;
};

const Icon = require('@/assets/images/snowman-icon.png');

const TotalMemberInfo: FC<Props> = ({count}) => {
  return (
    <Container>
      <SnowManIcon source={Icon} />
      <MemberCount>{count}</MemberCount>
    </Container>
  );
};

export default TotalMemberInfo;
