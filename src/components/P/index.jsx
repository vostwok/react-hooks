import { useContext } from 'react';
import { GlobalContext } from '../contexts/App';

//eslint-disable-next-line
export const P = () => {
  const {
    contextState: { body },
    setContextState,
    stadoTeste: { nome, idade },
  } = useContext(GlobalContext);
  return (
    <>
      <p
        onClick={() =>
          setContextState((stado) => ({
            ...stado,
            contador: stado.contador + 1,
          }))
        }
      >
        {body}
      </p>
      <p>{nome}</p>
      <p>{idade}</p>
    </>
  );
};
