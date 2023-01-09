import React from "react";
import * as S from "./AllocFooterOrganisms.style";
const AllocFooterOrganisms = () => {
  return (
    <>
      <S.FooterWrap>
        <S.FooterInner>
          <S.FooterInfo>
            <S.CopyRight>© 2022 Quantus. All rights reserved.</S.CopyRight>
            <S.Ask>문의: info@quantus.kr</S.Ask>
          </S.FooterInfo>
          <S.FooterLink>
            <S.CopyRightLink href="https://cafe.naver.com/quantus">
              네이버카페 바로가기
            </S.CopyRightLink>
            <S.Ask>이용약관</S.Ask>
          </S.FooterLink>
        </S.FooterInner>
      </S.FooterWrap>
    </>
  );
};

export default AllocFooterOrganisms;
