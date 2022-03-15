import { useEffect } from 'react';
import { NumberContext, useNumber } from '../context/number';
import Game from '../views/Game';

function GamePage() {
  const [numberState, numberAction] = useNumber();

  useEffect(() => {
    numberAction.getNumber();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    /**
     * Cria o contexto em volta da página
     */
    <NumberContext.Provider
      value={{ state: numberState, action: numberAction }}
    >
      <Game />
    </NumberContext.Provider>
  );
}

export default GamePage;
