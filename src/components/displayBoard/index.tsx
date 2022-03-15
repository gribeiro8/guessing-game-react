import Display from '../display';

function DisplayBoard({ status, number }: { status: any; number: any }) {
  /**
   * Converte o numero para string
   */
  const digits = number.toString().split('');
  /**
   * Coloca cada digito em uma posicao do array 123 = [1,2,3]
   */
  const realDigits = digits.map(Number);
  /**
   * Roda um map para montar o display
   */
  return realDigits.map((num: any) => (
    <Display status={status} character={num} />
  ));
}

export default DisplayBoard;
