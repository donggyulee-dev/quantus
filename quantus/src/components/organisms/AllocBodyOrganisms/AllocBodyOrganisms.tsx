import React, { useEffect, useState, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import data from "../../../../data/data.json";

import * as S from "./AllocBodyOrganisms.style";
const AllocBodyOrganisms = () => {
  let today = new Date().toISOString().substring(0, 10);
  const [asset, setAsset] = useState([1]);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const stock = data;
  const Algorithm = ["전략배분(정적자산배분)", "듀얼모멘텀", "VAA", "DAA"];
  const Cycle = ["월별", "분기별", "반기별", "매년", "하지않음(Buy-and-Hold)"];
  const Aggressive = [
    "SPY",
    "EFA",
    "QQQ",
    "KOSPI",
    "KOSDAQ",
    "GLD",
    "VNQ",
    "TLT",
    "AGG",
    "VEA",
  ];

  const Defense = ["SHY", "AGG", "LQD", "IEF"];

  const [SelectAlgorithm, setSelectAlgorithm] =
    useState("전략배분(정적자산배분)");

  const [SelectCycle, setSelectCycle] = useState("월별");

  const handleSelect = (e) => {
    setSelectAlgorithm(e.target.value);
  };

  return (
    <>
      <S.BodyWrap>
        <S.Title>자산배분 설정</S.Title>
        <S.SubTitle>자산배분 알고리즘</S.SubTitle>
        <S.Select>
          {Algorithm.map((item) => {
            return (
              <S.Option value={item} key={item}>
                {item}
              </S.Option>
            );
          })}
        </S.Select>
        {SelectAlgorithm === "전략배분(정적자산배분)" ? (
          <>
            <S.SubTitle>주기 리밸런싱</S.SubTitle>
            <S.Select>
              {Cycle.map((item) => {
                return <S.Option>{item}</S.Option>;
              })}
            </S.Select>
            <S.SubTitle>밴드 리밸런싱</S.SubTitle>
            <S.PercentWrap>
              <S.PercentInput
                type="number"
                placeholder="리밸런싱 밴드 기준을 입력해주세요"
              ></S.PercentInput>
              <S.Percent>%</S.Percent>
            </S.PercentWrap>
            <S.SubTitleDesCrip>
              0~100%까지 입력할 수 있습니다. (0 입력시 비활성화)
            </S.SubTitleDesCrip>
            <S.Title>자산군 추가</S.Title>
            {check === true
              ? asset.map((item, index) => {
                  return (
                    <>
                      <S.SubTitle>자산{item}</S.SubTitle>
                      <S.Select>
                        {stock.map((item) => {
                          return (
                            <S.Option>
                              {item["종목명"]}({item.code})
                            </S.Option>
                          );
                        })}
                      </S.Select>
                      <S.SubTitle>비중</S.SubTitle>
                      <S.AssetPercentWrap>
                        <S.PercentInput
                          type="number"
                          placeholder="비중을 입력해주세요"
                        ></S.PercentInput>
                        <S.Percent>%</S.Percent>
                      </S.AssetPercentWrap>
                      <S.SubTitleDesCrip>
                        0~100%까지 입력할 수 있습니다.
                      </S.SubTitleDesCrip>
                      {index === asset.length - 1 ? (
                        <S.ButtonsWrap>
                          <S.DelButton
                            onClick={() => {
                              setAsset(asset.filter((_, i) => i !== index));
                            }}
                          >
                            삭제하기
                          </S.DelButton>
                          <S.Button
                            onClick={() => {
                              if (check) {
                                setAsset([
                                  ...asset,
                                  asset[asset.length - 1] + 1,
                                ]);
                              }
                            }}
                          >
                            추가하기
                          </S.Button>
                        </S.ButtonsWrap>
                      ) : (
                        <S.DelButton
                          onClick={() => {
                            setAsset(asset.filter((_, i) => i !== index));
                          }}
                        >
                          삭제하기
                        </S.DelButton>
                      )}
                    </>
                  );
                })
              : null}
            {check === false ? (
              <S.Button
                onClick={() => {
                  setCheck(true);
                }}
              >
                추가하기
              </S.Button>
            ) : null}

            {check === true && asset.length === 0 ? (
              <S.Button
                onClick={() => {
                  setAsset([...asset, 1]);
                }}
              >
                추가하기
              </S.Button>
            ) : null}
          </>
        ) : null}

        <S.DateWrap>
          <div>
            <S.DateTitle>시작일 설정</S.DateTitle>
            <S.Date type="date" defaultValue="2014-02-09"></S.Date>
          </div>
          <div>
            <S.DateTitle>종료일 설정</S.DateTitle>
            <S.Date type="date" defaultValue={today}></S.Date>
          </div>
        </S.DateWrap>
        <S.ButtonWrap>
          <S.BackTestButton
            onClick={() => {
              setLoading(true);
            }}
          >
            {loading ? (
              <S.LoadingWrap>
                <S.Loading>대기중...</S.Loading>
                <S.LoadingSpinner>
                  <TailSpin
                    height="30"
                    width="30"
                    color="#ec6126"
                    ariaLabel="tail-spin-loading"
                    radius="0"
                    visible={true}
                  />
                </S.LoadingSpinner>
              </S.LoadingWrap>
            ) : (
              "백테스트"
            )}
          </S.BackTestButton>
        </S.ButtonWrap>
      </S.BodyWrap>
    </>
  );
};

export default AllocBodyOrganisms;
