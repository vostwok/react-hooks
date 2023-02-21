import P from 'prop-types';
import { useContext, useRef } from 'react';
import { GlobalContext, Context } from '../contexts/App';

//eslint-disable-next-line
const H1Context = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, contador },
  } = useContext(GlobalContext);
  console.log(theContext);
  return (
    <h1>
      {title} {contador}
    </h1>
  );
};

const H1Reducer = () => {
  const context = useContext(Context);
  console.log();
  const inputRef = useRef();
  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

H1Reducer.propTypes = {
  tipo: P.string,
};
export { H1Reducer, H1Context };
