import axios from 'axios';
// @ts-ignore
import {readFileSync} from 'fs';

async function createCommunity(
  token: string,
  title: string,
  summary: string,
  imageStr: string,
) {
  const image = `data:image/png;base64,${imageStr}`;
  const data = {
    title,
    summary,
    imageStr: image,
  };

  console.log('image', image.substring(0, 40));

  const response = await axios.post(
    'http://localhost:8091/community/create',
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
}

(async () => {
  const encodedImage1 = readFileSync('./1.png', 'base64');
  // const encodedImage1 = Buffer.from(image1).toString('base64');
  const encodedImage2 = readFileSync('./2.jpeg', 'base64');
  // const encodedImage2 = Buffer.from(image2).toString('base64');
  const encodedImage3 = readFileSync('./3.jpeg', 'base64');
  // const encodedImage3 = Buffer.from(image3).toString('base64');
  const encodedImage4 = readFileSync('./4.jpeg', 'base64');
  // const encodedImage4 = Buffer.from(image4).toString('base64');
  const encodedImage5 = readFileSync('./5.jpg', 'base64');
  // const encodedImage5 = Buffer.from(image5).toString('base64');
  const adminData = {
    userId: 'admin',
    userName: '관리자',
    upassword: 'kaist1234',
    email: 'kaist@gmail.com',
  };

  try {
    await axios.post('http://localhost:8091/api/admin/signup', adminData);
  } catch {}

  const userData = {
    userId: 'kaist',
    userName: '김카이',
    upassword: 'kaist1234',
    email: 'kaist@gmail.com',
  };
  try {
    await axios.post('http://localhost:8091/api/signup', userData);
  } catch {}

  const loginData = {
    userId: 'admin',
    upassword: 'kaist1234',
  };

  const loginResponse = await axios.post(
    'http://localhost:8091/auth/authenticate',
    loginData,
  );

  const token = loginResponse.data.token;
  await createCommunity(
    token,
    '궁극의 맛',
    '식재료부터 요리, 배움의 즐거움을 느껴보세요!\n새로운 친구들과 함께하는 즐거움이 가득합니다.',
    encodedImage1,
  );
  await createCommunity(
    token,
    '사진과 감성',
    '식재료부터 요리, 배움의 즐거움을 느껴보세요!\n새로운 친구들과 함께하는 즐거움이 가득합니다.',
    encodedImage2,
  );
  await createCommunity(
    token,
    '창작과 문예',
    '상상이 현실이 되는 그 순간,\n창작과 문예의 세계에 빠져보세요.',
    encodedImage3,
  );
  await createCommunity(
    token,
    '캠퍼스 청소 봉사단',
    '깨끗한 캠퍼스를 만들고, 따뜻한 마음을 나누는 봉사단!\n우리와 함께해요~',
    encodedImage4,
  );
  await createCommunity(
    token,
    'TEAM LINE',
    '웨이트 트레이닝, 기능성 훈련\n몸도 마음도 건강하게',
    encodedImage5,
  );
})();
