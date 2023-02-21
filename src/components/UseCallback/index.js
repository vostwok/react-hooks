import React, { useCallback, useState } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho redenrizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

export default function UseCallback() {
  // const [conter, setconter] = useState(-400);
  const [cont, setcont] = useState(0);
  const incrementButton = useCallback((nun) => {
    setcont((cont) => cont + nun);
  }, []);

  console.log('pai renderizou');

  // function segParaHora(time = conter, with_seg = true) {
  //   let hours = Math.floor(time / 3600);
  //   let minutes = Math.floor((time % 3600) / 60);
  //   let seconds = time % 60;

  //   minutes = minutes < 10 ? '0' + minutes : minutes;
  //   seconds = seconds < 10 ? '0' + seconds : seconds;
  //   hours = hours < 10 ? '0' + hours : hours;

  //   if (with_seg) {
  //     return hours + ':' + minutes + ':' + seconds;
  //   }

  //   return hours + ':' + minutes;
  // }

  // useEffect(() => {
  //   console.log(segParaHora());
  //   setTimeout(() => {
  //     setconter(conter + 1);
  //   }, 1000);
  // }, [conter]);
  // console.log(conter);

  return (
    <div className="App">
      {/* <h1>Contador: {conter}</h1>
      <h1>horas: {segParaHora()}</h1> */}
      <h1>cont: {cont}</h1>
      {/* <button onClick={() => setconter(conter + 1)}>+</button> */}
      <Button incrementButton={incrementButton} />
    </div>
  );
}
