import { useRef, useEffect, useState } from 'react';

const useInterval = (callback, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

const useInterval2 = (callback, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

export function UseMyHook() {
  const [conter, setConter] = useState(0);
  const [cont, setCont] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  console.log(conter);

  useInterval(() => setConter((conter) => conter + 1), delay);
  useInterval2(() => setCont((conter) => conter + 1));

  return (
    <div>
      <h1>Contador: {conter}</h1>
      <h1>Contador: {cont}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((delay) => delay + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((delay) => delay - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(event) => setIncrementor(Number(event.target.value))}
      />
    </div>
  );
}
