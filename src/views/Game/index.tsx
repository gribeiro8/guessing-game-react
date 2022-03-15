import { useState, useContext, useEffect } from 'react';
import {
  InputNumber,
  Title,
  PageWrapper,
  FormWrapper,
  DisplayWrapper,
  DisplayBoardyWrapper,
  Line,
  Header,
} from './style.js';
import { NumberContext } from '../../context/number';
import DisplayBoard from '../../components/displayBoard';
import Button from '../../components/button';
import TextResult from '../../components/result';

function Game() {
  const numberNew = useContext(NumberContext);

  const [valueNumber, setValueNumber] = useState('');
  const [displayNumber, setDisplayNumber] = useState('0');
  const [displayTitle, setDisplayTitle] = useState('');
  const [Match, setMatch] = useState(true);
  const [statusMatch, setStatusMatch] = useState('game');

  /**
   * Trata quando um erro acontecer
   */
  useEffect(() => {
    if (numberNew.state.error) {
      setStatusMatch('error');
      setMatch(false);
      setDisplayNumber(numberNew.state.number.toString());
      setDisplayTitle('ERRO');
    }
  }, [numberNew.state.error]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Trata a submissao do number no input
   */
  const submitValue = () => {
    if (parseInt(valueNumber) === numberNew.state.number) {
      setDisplayTitle('Você acertou!!!!');
      setMatch(false);
      setStatusMatch('win');
    } else if (parseInt(valueNumber) > numberNew.state.number) {
      setDisplayTitle('É menor');
    } else {
      setDisplayTitle('É maior');
    }

    setDisplayNumber(valueNumber);
    setValueNumber('');
  };

  /**
   * Inicia uma nova partida
   */
  const novaMatch = () => {
    numberNew.action.getNumber();
    setDisplayNumber('0');
    setValueNumber('');
    setMatch(true);
    setDisplayTitle('');
    setStatusMatch('game');
  };

  return (
    <PageWrapper>
      <Header>
        <Title>QUAL É O NÚMERO?</Title>
        <Line />
      </Header>

      <DisplayWrapper>
        <TextResult status={!Match} text={displayTitle} type={statusMatch} />
        <DisplayBoardyWrapper>
          <DisplayBoard status={statusMatch} number={displayNumber} />
        </DisplayBoardyWrapper>
        {/* LIBERA OS NUMEROS PARA TESTE
        <p>
          {numberNew.state.number} - {statusMatch} -{' '}
          {numberNew.state.error && <p>ERRRORRR</p>}
        </p> */}
        <Button
          text={'Nova Partida'}
          func={novaMatch}
          status={!Match}
          icon={true}
          variant={'grey'}
        />
      </DisplayWrapper>

      <FormWrapper>
        <InputNumber
          type="text"
          onChange={e => setValueNumber(e.target.value)}
          value={valueNumber}
          readOnly={!Match}
          placeholder={'Digite o palpite'}
          data-testid="input-number"
        />
        <Button
          text={'Enviar'}
          func={submitValue}
          status={true}
          icon={true}
          variant={'orange'}
          data-testid="button-submit"
        />
      </FormWrapper>
    </PageWrapper>
  );
}

export default Game;
