import React from "react";
import * as S from "./AllocMenuOrganisms.style";

const AllocMenuOrganisms = () => {
  return (  
    <>
      <S.Line />
      <S.MenuWrap>
        <S.Menu>백테스트</S.Menu>
        <S.MenuClicked>자산분배</S.MenuClicked>
        <S.Menu>포트폴리오 추출</S.Menu>
        <S.Menu>팩터 검증</S.Menu>
        <S.Menu>전략 조회</S.Menu>
        <S.Menu>커뮤니티</S.Menu>
      </S.MenuWrap>
      <S.Line />
    </>
  );
};

export default AllocMenuOrganisms;
