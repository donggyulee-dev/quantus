import React, { useState, useEffect } from "react";
import * as S from "./AllocInputOrganisms.style";

const AllocInputOrganisms = () => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(localStorage.getItem("inputValue"));
  }, []);

  return (
    <>
      <S.InputWrap>
        <S.InputPlaceWrap>
          {inputValue === "" ? (
            <S.Input
              type={"text"}
              maxLength={25}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            ></S.Input>
          ) : (
            <S.Input
              type={"text"}
              placeholder="전략 이름을 입력해주세요."
              value={inputValue}
              maxLength={25}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            ></S.Input>
          )}
        </S.InputPlaceWrap>

        {inputValue === "" ? (
          <S.StoreButtonWrap>
            <S.StoreButton>전략 저장</S.StoreButton>
          </S.StoreButtonWrap>
        ) : (
          <S.StoreButtonWrap>
            <S.ClickedStoreButton
              onClick={() => {
                localStorage.setItem("inputValue", inputValue);
                console.log(localStorage.getItem("inputValue"));
              }}
            >
              전략 저장
            </S.ClickedStoreButton>
          </S.StoreButtonWrap>
        )}
      </S.InputWrap>
    </>
  );
};

export default AllocInputOrganisms;
