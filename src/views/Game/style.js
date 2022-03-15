import styled from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/roboto';
import { MdRefresh } from 'react-icons/md';
import { COLORS } from '../../constants/colors';
export const PageWrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${COLORS.gray800};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-top: 62px;
  background: linear-gradient(174.92deg, #ef6c00 18.47%, #db6300 36.57%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (min-width: 768px) {
    margin-top: 44px;
    font-size: 36px;
  }
`;
export const Line = styled.hr`
  width: 205px;
  margin: 0 auto;
  margin-top: 16px;
  @media only screen and (min-width: 768px) {
    width: 255px;
  }
`;

export const IconBtnNewGame = styled(MdRefresh)`
  margin-right: 8px;
  font-size: 16px;
`;

export const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DisplayBoardyWrapper = styled.div`
  margin-top: 33px;
`;

export const FormWrapper = styled.div`
  margin-bottom: 31px;
  display: flex;
  @media only screen and (min-width: 768px) {
    margin-bottom: 59px;
  }
`;

export const InputNumber = styled.input`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.orange};
  box-sizing: border-box;
  border-radius: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 10px;
  color: ${COLORS.grey3};
  width: 217px;
`;
