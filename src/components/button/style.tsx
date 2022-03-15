import styled, { css } from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/roboto';
import { MdRefresh } from 'react-icons/md';
import { COLORS } from '../../constants/colors';

const BtnBase = css`
  font-size: 12px;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${COLORS.white};
  border: 0px;
  display: flex;
  align-items: center;
`;

interface Props {
  status: boolean;
}

export const BtnOrange = styled.button`
  ${BtnBase};
  margin-left: 10px;
  background: linear-gradient(180deg, #ef6c00 0%, #c0661c 100%);
`;

export const BtnGrey = styled.button<Props>`
  /**
   * Reaproveitamento das propriedades base do botao
   */
  ${BtnBase};
  ${props => !props.status && 'visibility: hidden;'};
  margin-top: 56px;
  background: linear-gradient(180deg, #434854 0%, #9e9e9e 100%);
  @media only screen and (min-width: 768px) {
    margin-top: 31px;
  }
`;

export const IconBtnNewGame = styled(MdRefresh)`
  margin-right: 8px;
  font-size: 16px;
`;
