import styled from "@emotion/styled";
import WriteReviewInput from "./CommonReviewWrite.input";

export const Wrapper = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form``;
export const Title = styled.div`
  padding: 100px 0;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const ReviewWriteBox = styled.div`
  padding: 40px;
  width: 1000px;
  background: #fff;
  border-radius: 20px;
`;

export const Header = styled.div`
  padding-bottom: 20px;
`;

export const TitleArticle = styled.div`
  display: flex;
  border-bottom: 1px solid #dadada;
  padding-bottom: 20px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 31px 0px 0px;
`;

export const MapArticle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  border-bottom: 1px solid #dadada;
`;
export const Map = styled.div`
  width: 920px;
  height: 600px;
`;
export const WriteTitle = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const SugarSaltArticle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 1px solid #dadada;
`;

export const MenuArticle = styled.div`
  width: 100%;
  border-bottom: 1px solid #dadada;
  padding: 0px 0px 20px 0px;
`;

export const MoodArticle = styled.div`
  width: 100%;
  padding: 20px 0px;
  border-bottom: 1px solid #dadada;
`;

export const EditorArticle = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

export const Span = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Category = styled.div`
  margin: 0 9px 0 0;
  padding: 10px 20px;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  background: #dbdbdb;
  &:hover {
    background: #ff9a31;
  }
`;
export const InputBox = styled(WriteReviewInput)`
  padding: 12px 16px;
  width: 445px;
  height: 46px;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  font-weight: 700;
  outline-color: #676767;
  ::placeholder {
    color: #dbdbdb;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const SectionHr = styled.div`
  margin: 20px 0;
  width: 920px;
  height: 1.5px;
  border-radius: 50px;
  background: #dadada;
`;
export const MoodBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Mood = styled.div`
  margin: 7px 7px 0 0;
  padding: 10px 30px;
  color: #7b7b7b;
  background: #fff;
  transition: 0.2s;
  cursor: pointer;
  border: 2px solid #d8d8d8;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: #ff9a31;
    border: 2px solid #ff9a31;
  }
`;
export const TextAreaBox = styled.textarea`
  padding: 12px 16px;
  max-width: 920px;
  min-width: 920px;
  height: 492px;
  max-height: 492px;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  font-weight: 700;
  outline-color: #676767;
  ::placeholder {
    color: #dbdbdb;
  }
`;

export const ButtonBox = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  margin: 0 9px;
  padding: 10px 42px;
  background: #fff;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #ff9a31;
    border: 2px solid #ff9a31;
  }
`;
