import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import * as S from "./AllocGnbOrganisms.style";
const AllocGnbOrganisms = () => {
  return (
    <>
      <S.GnbWrap>
        <S.Logo>
          <Image src={logo} alt="logo" width={156} height={30} />
        </S.Logo>
        <S.TextWrap>
          <S.Text>이동규님 환영합니다!</S.Text>
          <S.Text>마이페이지</S.Text>
        </S.TextWrap>
        <S.ProcessBar></S.ProcessBar>
      </S.GnbWrap>
    </>
  );
};

export default AllocGnbOrganisms;
