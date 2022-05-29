// 마이페이지 유저 정보 Presenter ---김치훈

import * as S from "./userInfo.styles"
import Script from "next/script";
import { SettingOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import Uploads02 from "../../uploads/02mypageUserProfile/Uploads02.containder";
import { PointComma } from "../../libraries/point";

export default function UserInfoPresenter(props: any){
  return( 
    <>
      <Script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></Script>
        {/* <!-- iamport.payment.js --> */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>
    
      <S.Wrapper>

        <S.MypageBox>
          <S.UserLeftBox>
            {/* <S.ImgBox> */}

            {props.fileUrls.map((el:any, index:any) => (
              <Uploads02 
                data={props.data}
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}

            <S.UserInfo>
              <S.UserName>안녕하세요. <S.Span>{props.data?.fetchUserLoggedIn?.userNickname}</S.Span> 단짝님</S.UserName>
              <S.userProfileBox>

              {props.isUpdate 
              ?
              <>
                <S.userProfile>{props.data?.fetchUserLoggedIn?.userProfile}</S.userProfile>
                <S.userProfileUpdate onClick={props.onClickUpdate}>수정</S.userProfileUpdate>
              </>
              :
              <>
                <S.userProfileInput 
                  type="text"
                  maxLength={40} 
                  defaultValue={props.data?.fetchUserLoggedIn?.userProfile}
                  placeholder={"간단한 소개글을 작성해주세요. (40자 내외로 작성하세요.)"}
                  onChange={props.onChangeProfile}
                ></S.userProfileInput>
                <S.userProfileComplete onClick={props.onClickUpdateProfile}>완료</S.userProfileComplete>
              </>
              }
              </S.userProfileBox>

              <S.UserSection>
                <S.UserBox style={{paddingLeft: "0px"}}>
                  <S.UserTitle>마이 단짠</S.UserTitle>
                  <S.UserCount onClick={props.onClickMyReview}>
                    {props.fetchBoardCountData?.fetchBoardCount}
                  </S.UserCount>
                </S.UserBox>

                <S.VerticalLine />

                <S.UserBox>
                  <S.UserTitle>팔로잉</S.UserTitle>
                  <S.UserCount>
                    {props.followCountData?.followCount[3]}
                  </S.UserCount>
                </S.UserBox>

                <S.VerticalLine />
                
                <S.UserBox>
                  <S.UserTitle>팔로워</S.UserTitle>
                  <S.UserCount>
                    {props.followCountData?.followCount[1]}
                  </S.UserCount>
                </S.UserBox>

                <S.VerticalLine />

                <S.UserBox>
                  <S.UserTitle>쪽지함</S.UserTitle>
                  <S.UserCount onClick={props.onClickLikeAccess}>
                    {props.fetchUnreadMessageCountData?.fetchUnreadMessageCount}
                  </S.UserCount>
                </S.UserBox>

                <S.VerticalLine />

                <S.UserBox>
                  <S.UserTitle>포인트</S.UserTitle>
                  <S.UserCount onClick={props.onClickPointAccess}>
                    {PointComma(props.data?.fetchUserLoggedIn?.userPoint)}
                  </S.UserCount>
                </S.UserBox>
              </S.UserSection>
            </S.UserInfo>
          </S.UserLeftBox>
          
          <S.ButtonBox>
            {props.isPoint 
            ? <S.PointButton>
                <img onClick={props.onClickPointCharge} style={{width: "24px", marginRight: "6px"}} src="../images/pointicon.png"/>
                <S.Input 
                  type="number"
                  step={100}
                  placeholder="충전할 금액을 적으세요."
                  min={100}
                  max={50000}
                  required
                  onChange={props.onChangePoint}
                />
              </S.PointButton>
            : <S.PointButton>
                <S.PointImg onClick={props.onClickPointCharge} src="../images/pointicon.png"/>
                <S.PointCharge onClick={props.onClickPoint}>{props.changePoint} 포인트 충전하기
                </S.PointCharge>
              </S.PointButton>
            }
            <S.Button onClick={props.onClickModify}><SettingOutlined style={{ marginRight: "6px"}}/>회원정보 수정하기</S.Button>
          </S.ButtonBox>

        </S.MypageBox>

      </S.Wrapper>
    </>
  )
}