import styled from "@emotion/styled";

export const BodyWrap = styled.div`
  width: 1290px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;

  margin-bottom: 28px;
  color: #ffffff;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 18px;
`;

export const SubTitleDesCrip = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #ffffffb3;
  margin-top: 18px;
  margin-bottom: 18px;
`;

export const Select = styled.select`
  width: 640px;
  height: 46px;
  color: #ffffff;
  display: flex;
  text-align: center;
  margin-bottom: 18px;
  border: 0.2px solid #ffffff;
  border-radius: 6px;

  option {
    color: #ffffff;
    background-color: #000000;
  }
`;

export const Option = styled.option``;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 104px;
  height: 42px;
  background-color: #ec6126;
  border-radius: 6px;
`;

export const DelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 104px;
  height: 42px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 28px;
  margin-bottom: 28px;
`;
export const Date = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 320px;
  height: 46px;
  padding-right: 16px;
  color: #ffffff;
  border: 0.2px solid #ffffff;
  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(1);

`;
export const DateWrap = styled.div`
  display: flex;
  margin-top: 26px;
`;

export const DateTitle = styled.div`
  color: #ffffff;
  margin-bottom: 16px;
`;

export const AssetPercentWrap = styled.div`
  display: flex;
  margin-top: 26px;
  margin-bottom: 26px;
`;
export const PercentWrap = styled.div`
  display: flex;
`;

export const PercentInput = styled.input`
  width: 640px;
  height: 46px;
  color: #ffffff;
  display: flex;
  text-align: center;
  border: 0.2px solid #ffffff;
  border-radius: 6px;
  outline: #ec6126;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Percent = styled.div`
  margin-top: 18px;
  height: 10px;
  margin-left: -20px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;
export const BackTestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 210px;
  height: 53px;
  background-color: #ec6126;
  border-radius: 6px;
  margin: 110px 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonsWrap = styled.div`
  display: flex;
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const LoadingWrap = styled.div`
  display: flex;
  width: 97%;
  height: 95%;
  border-radius: 6px;
  border: 1px solid;
  justify-content: center;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
