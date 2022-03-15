import styled from 'styled-components';
import '@fontsource/montserrat';
import { COLORS } from '../../constants/colors';

interface Props {
  status: boolean;
  type: String;
}

export const ResultText = styled.p<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -1px;

  color: ${props => props.type === 'win' && COLORS.green};
  color: ${props => props.type === 'error' && COLORS.red};
  ${props => !props.status && 'visibility: hidden;'};
`;
