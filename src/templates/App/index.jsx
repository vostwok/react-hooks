import { useEffect, useState } from 'react';
import './App.css';

import { AppContext } from '../../components/contexts/App';
import { Div } from '../../components/Div';
import { UseReducer } from '../../components/reducer';
import UseMemo from '../../components/UseMemo';
import UseRef from '../../components/UseRef';
import UseCallback from '../../components/UseCallback';
import { UseReduxUseContext } from '../../components/useReduxUseContext';
import { UseMyHook } from '../../components/UseMyHook';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { Algoritimos } from '../../components/Algoritimos';
import { CounterProvider } from '../../contexts/ExampleProvider';

function App() {
  console.log('pai renderizou');
  const [state, setState] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  let list = new Array();
  list.push(1);
  list.push(1);
  // let atual = 1;
  // let anteiror = 1;

  // function recursao(qtRecursao, atual, anterio) {
  //   if (list.length >= qtRecursao) {
  //     return alert(`Numero recunsivamente ${list[qtRecursao - 1]}`);
  //   } else {
  //     list.push(atual + anterio);
  //     return recursao(qtRecursao, atual + anterio, atual);
  //   }
  // }

  // function fibonacci(
  //   criterioParada,
  //   contAtual = 2,
  //   numeroAtual = 1,
  //   numeroAnterior = 1,
  // ) {
  //   if (contAtual === criterioParada) {
  //     return numeroAtual;
  //   } else {
  //     return fibonacci(
  //       criterioParada,
  //       contAtual + 1,
  //       numeroAtual + numeroAnterior,
  //       numeroAtual,
  //     );
  //   }
  // }

  // function recursao2(qtRecursao, atual, anterio) {
  //   console.log(parseInt(qtRecursao));

  //   if (list.length >= qtRecursao) {
  //     return alert(
  //       `Numero recunsivo na posição [${list.length - 1}] ${
  //         list[qtRecursao - 1]
  //       }`,
  //     );
  //   } else {
  //     if (list.length >= qtRecursao) {
  //       return console.log('acabou');
  //     } else {
  //       console.log(anterio, atual);
  //       list.push(atual);
  //       return recursao(qtRecursao, atual + anterio, atual);
  //     }
  //   }
  // }
  //let numero = prompt('Digite um numero');

  //recursao(numero, atual, anteiror);
  // let resultado = fibonacci(8);
  // alert('Fibonacci xubaca: ' + resultado);

  useEffect(() => {
    if (state === 'Silvio') {
      alert('Silvio ventura');
    } else if (state === 'Schwamberth') {
      alert('schwamberth vicente');
    }
  }, [state]);

  useEffect(() => {
    console.log(state);
    if (state != 'posts') {
      console.log('esta no post');
      setIsMounted(true);
    } else {
      setIsMounted(true);
    }
  }, [state]);

  console.log(isMounted);

  return (
    <CounterProvider>
      <PostsProvider>
        <div className="App">
          <button onClick={() => setState('')}>reset</button>{' '}
          {state === '' ? null : state === 'posts' ? (
            <Posts isMounted={isMounted} />
          ) : state == 'reducerContext' ? (
            <UseReduxUseContext />
          ) : state == 'context' ? (
            <AppContext>
              <Div />
            </AppContext>
          ) : state == 'Reducer' ? (
            <UseReducer />
          ) : state == 'useMemo' ? (
            <UseMemo />
          ) : state == 'useRef' ? (
            <UseRef />
          ) : state == 'useCallback' ? (
            <UseCallback />
          ) : state == 'useMyHook' ? (
            <UseMyHook />
          ) : state == 'algoritimos' ? (
            <Algoritimos />
          ) : null}
          <div>
            <br />
          </div>{' '}
          <div>
            <br />
          </div>{' '}
          <div className="divisor">
            <br />
          </div>
          <button
            className={state == 'posts' ? 'active' : ''}
            onClick={() => setState('posts')}
          >
            Posts
          </button>{' '}
          <button
            className={state == 'context' ? 'active' : ''}
            onClick={() => setState('context')}
          >
            Context
          </button>{' '}
          <button
            className={state == 'Reducer' ? 'active' : ''}
            onClick={() => setState('Reducer')}
          >
            Reducer
          </button>{' '}
          <button
            className={state == 'reducerContext' ? 'active' : ''}
            onClick={() => setState('reducerContext')}
          >
            reducer Context
          </button>{' '}
          <button
            className={state == 'useMemo' ? 'active' : ''}
            onClick={() => setState('useMemo')}
          >
            UseMemo
          </button>{' '}
          <button
            className={state == 'useRef' ? 'active' : ''}
            onClick={() => setState('useRef')}
          >
            UseRef
          </button>{' '}
          <button
            className={state == 'useCallback' ? 'active' : ''}
            onClick={() => setState('useCallback')}
          >
            UseCallback
          </button>{' '}
          <button
            className={state == 'useMyHook' ? 'active' : ''}
            onClick={() => setState('useMyHook')}
          >
            UseMyHook
          </button>{' '}
          <button
            className={state == 'Silvio' ? 'active' : ''}
            onClick={() => setState('Silvio')}
          >
            Silvio
          </button>{' '}
          <button
            className={state == 'Schwamberth' ? 'active' : ''}
            onClick={() => setState('Schwamberth')}
          >
            Schwamberth
          </button>
          <button
            className={state == 'algoritimos' ? 'active' : ''}
            onClick={() => setState('algoritimos')}
          >
            Algoritimos
          </button>
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
