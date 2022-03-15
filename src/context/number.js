import { createContext, useReducer } from 'react';
import axios from 'axios';

/**
 * Usei context api para centralizar os dados da api
 */

export const NumberContext = createContext({
  /**
   * Criei um sistema parecido com REDUX
   */
  state: {
    number: 0,
    error: '',
  },
  action: {
    getNumber: () => {},
  },
});
const url = `https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`;

export const numberReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'GET_SUCCESS':
      return {
        number: action.data.value,
        error: false,
      };
    /**
     * Se falhar seta o erro
     */
    case 'GET_FAILED':
      return {
        number: 502,
        error: true,
      };
    default:
      return state;
  }
};

export const useNumber = () => {
  const [state, dispatch] = useReducer(numberReducer, {
    number: 0,
    error: null,
  });

  const getNumber = async () => {
    try {
      const result = await axios.get(url);
      dispatch({ type: 'GET_SUCCESS', data: result.data });
    } catch (error) {
      dispatch({ type: 'GET_FAILED', error });
    }
  };

  return [state, { getNumber }];
};
