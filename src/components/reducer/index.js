import { useReducer } from 'react';
import { globalState } from '../contexts/App/data';
//eslint-disable-next-line
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'muda':
      return { ...state, title: 'Mudou' };
    case 'date':
      return { ...state, data: action.payload };
    case 'invert':
      return { ...state, title: state.title.split('').reverse('').join('') };
    case 'resetTitle':
      return { ...state, title: globalState.title };
    case 'cont':
      return { ...state, contador: state.contador + 1 };
    case 'resetCont':
      return { ...state, contador: globalState.contador };
    case 'reset':
      return { ...globalState };
  }
  return { ...state };
};

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { contador, title, data } = state;
  return (
    <div>
      <h1>
        {title} {contador}
      </h1>
      <h1>{data}</h1>
      <button onClick={() => dispatch({ type: 'muda' })}>Mudar</button>{' '}
      <button
        onClick={() =>
          dispatch({
            type: 'date',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Adicionar data
      </button>{' '}
      <button onClick={() => dispatch({ type: 'invert' })}>Inverter</button>{' '}
      <button onClick={() => dispatch({ type: 'cont' })}>Contador</button>{' '}
      <div>
        <br />
      </div>
      <button onClick={() => dispatch({ type: 'resetTitle' })}>
        Resetar titulo
      </button>{' '}
      <button onClick={() => dispatch({ type: 'resetCont' })}>
        Resetar contador
      </button>{' '}
      <button onClick={() => dispatch({ type: 'reset' })}>Resetar tudo</button>
    </div>
  );
}
