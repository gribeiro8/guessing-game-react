import { COLORS } from '../../constants/colors';

/**
 * Define a cor do led
 */
function SelectColor(status: any) {
  const ledOn = COLORS.black2;
  const ledOnError = COLORS.red;
  const ledOnWin = COLORS.green;
  let color = ledOn;

  switch (status) {
    case 'error':
      color = ledOnError;
      break;
    case 'win':
      color = ledOnWin;
      break;
  }
  return color;
}

function Display({
  character,
  status,
  numbers,
  ledOff,
}: {
  character: any;
  status: string;
  numbers: any;
  ledOff: any;
}) {
  return (
    /**
     * Usei o SVG disponibilizado, implementei a lógica do display de 7 segmentos (eletrônica)
     */
    <svg
      width="56"
      height="100"
      viewBox="0 0 56 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7918 10.9848H42.6309L52.9545 1.18126C51.9989 0.442677 50.8034 4.76837e-06 49.5038 4.76837e-06H5.65773C4.36601 4.76837e-06 3.18002 0.436367 2.2276 1.16469L12.7918 10.9848Z"
        /**
         * Dependedo troca a cor do led ou apaga
         */
        fill={numbers[character][0] ? SelectColor(status) : ledOff}
      />

      <path
        d="M43.4255 12.049V42.5707L52.0707 49.0498C53.9037 48.114 55.1607 46.2123 55.1607 44.0131V5.64801C55.1607 4.30184 54.6888 3.06851 53.9053 2.09794L43.4255 12.049Z"
        fill={numbers[character][1] ? SelectColor(status) : ledOff}
      />
      <path
        d="M43.4255 87.9413V57.4196L52.0707 50.9405C53.9037 51.8771 55.1607 53.778 55.1607 55.9772V94.3423C55.1607 95.6877 54.6888 96.921 53.9053 97.8932L43.4255 87.9413Z"
        fill={numbers[character][2] ? SelectColor(status) : ledOff}
      />
      <path
        d="M12.7918 89.0144H42.6309L52.9545 98.8187C51.9989 99.5557 50.8034 100 49.5038 100H5.65773C4.36601 100 3.18002 99.5621 2.2276 98.8337L12.7918 89.0144Z"
        fill={numbers[character][3] ? SelectColor(status) : ledOff}
      />

      <path
        d="M1.27122 97.9218C0.477403 96.9481 0 95.7061 0 94.3512V55.9861C0 53.7869 1.257 51.886 3.09003 50.9494L11.7352 57.4285V88.1956L1.27122 97.9218Z"
        fill={numbers[character][4] ? SelectColor(status) : ledOff}
      />
      <path
        d="M1.27122 2.08556C0.477403 3.06007 0 4.30288 0 5.65694V44.0221C0 46.2212 1.257 48.1229 3.09003 49.0588L11.7352 42.5796V11.8126L1.27122 2.08556Z"
        fill={numbers[character][5] ? SelectColor(status) : ledOff}
      />
      <path
        d="M42.5551 43.9926H12.6056L4.62952 49.8721L12.6056 55.7523H24.0243H31.1363H42.5551L50.5312 49.8721L42.5551 43.9926Z"
        fill={numbers[character][6] ? SelectColor(status) : ledOff}
      />
    </svg>
  );
}

Display.defaultProps = {
  character: 0,
  ledOff: COLORS.grey2,
  ledOn: COLORS.black,
  ledOnError: COLORS.red,
  ledOnWin: COLORS.green,
  /**
   * Matriz que acende os leds certos
   */
  numbers: [
    [1, 1, 1, 1, 1, 1, 0], //DIGIT 0
    [0, 1, 1, 0, 0, 0, 0], //DIGIT 1
    [1, 1, 0, 1, 1, 0, 1], //DIGIT 2
    [1, 1, 1, 1, 0, 0, 1], //DIGIT 3
    [0, 1, 1, 0, 0, 1, 1], //DIGIT 4
    [1, 0, 1, 1, 0, 1, 1], //DIGIT 5
    [1, 0, 1, 1, 1, 1, 1], //DIGIT 6
    [1, 1, 1, 0, 0, 0, 0], //DIGIT 7
    [1, 1, 1, 1, 1, 1, 1], //DIGIT 8
    [1, 1, 1, 1, 0, 1, 1], //DIGIT 9
  ],
};

export default Display;
