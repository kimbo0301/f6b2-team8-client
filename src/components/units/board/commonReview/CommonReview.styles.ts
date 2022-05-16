// 일반리뷰페이지 styles === 김치훈

import styled from "@emotion/styled";

export const CommonReviewWrapper = styled.div`
  width: 100%;
`;
export const CommonReviewOutBox = styled.div`
  margin: 0 auto 40px auto;
  width: 1338px;
`;
export const ReviewMenuBox = styled.div`
  margin: 0 auto;
  width: 1338px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ReviewMenu = styled.div`
  width: 320px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  color: #7b7b7b;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;

export const CommonReviewInnerBox = styled.div`
  margin: 0 auto;
  padding: 24px;
  width: 1338px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 10px 0px 10px #dbdbdb;
  display: flex;
  flex-direction: column;
`;
export const TopThreeBox = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
export const TopThreeTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  cursor: default;
  color: #ff9a31;
`;
export const TopDiv = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: default;
`;

export const ReviewSection = styled.div`
  width: 1072px;
  display: flex;
  justify-content: space-between;
`;

export const CommonReviewHr = styled.div`
  margin-bottom: 30px;
  width: 1290px;
  height: 2px;
  background: #dadada;
`;

export const ReviewList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;