import { useState } from 'react';
import './App.css';

import { AppContext } from './components/contexts/App';
import { Div } from './components/Div';
import { UseReducer } from './components/reducer';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseCallback from './components/UseCallback';
import { UseReduxUseContext } from './components/useReduxUseContext';
import { UseMyHook } from './components/UseMyHook';

function App() {
  console.log('pai renderizou');
  const [state, setState] = useState(null);

  return (
    <div className="App">
      <button onClick={() => setState('')}>reset</button>{' '}
      {state == 'reducerContext' ? (
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
      ) : (
        ''
      )}
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
      </button>
    </div>
  );
}

export default App;
