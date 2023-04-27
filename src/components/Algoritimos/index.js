import React, { useRef, useState } from 'react';
/* eslint-disable */
export function Algoritimos() {
  const inputRefValor = useRef();
  // const inputRefValidade = useRef();
  const inputRefJuros = useRef();
  const inputRefanoBicesto = useRef();
  const inputRefDataPrazoIncio = useRef();
  const inputRefDataPrazoFim = useRef();
  const inputRefDataVencida = useRef();

  const valorDoProduto = 100;
  const jurosDiarios = 2.5;
  const [value, setValue] = useState('');

  // const dataPrazoIncio = '2023-02-01';
  // const dataPrazoFim = '2023-03-02';
  // const dataVencida = '2023-03-05';

  // const diasDePrazo =
  //   (new Date(dataPrazoFim) - new Date(dataPrazoIncio)) / (1000 * 60 * 60 * 24);
  // const diasDePrazoVencido =
  //   (new Date(dataVencida) - new Date(dataPrazoFim)) / (1000 * 60 * 60 * 24);

  // function calculojuros(valor, validade, juros) {
  //   for (validade; validade <= 30; validade - 1) {
  //     valor
  //   }
  // }
  // calculojuros();
  // function calculojuros(juros, dias) {
  //   for (dias; dias >= 30; dias - 1) {
  //     console.log((valor += valor * (juros / 100)));
  //   }
  // }
  // calculojuros(5, 35);
  // let valor = 100;
  // console.log((valor += valor * (7 / 100)));

  // function calcularValorComJurosMensal(valor, dias, juros) {
  //   const taxaJuros = juros / 100;
  //   const meses = (dias - 30) / 30;
  //   const valorFinal = valor * Math.pow(1 + taxaJuros, meses);
  //   return valorFinal.toFixed(2);
  // }

  function calcularValorComJurosDiario3(valor, dias, juros) {
    return console.log(
      `valor do produto com juros RS${
        valor * Math.pow(1 + juros / 100, dias).toFixed(4)
      }`,
    );
  }
  function calcularValorComJurosDiario4(valor, dias, juros) {
    if (dias >= 0) {
      const valorFinal = valor * Math.pow(1 + juros / 100, dias);
      console.log(
        `valor do produto com juros ${valorFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}`,
      );
    } else {
      console.log(
        `valor do produto com juros ${valor.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}`,
      );
    }
  }

  // function calcularValorComJurosDiario(valor, data, validade, juros) {
  //   if (data <= validade) {
  //     console.log(valor);
  //     return calcularValorComJurosDiario(
  //       valor + valor * (juros / 100),
  //       data,
  //       validade - 1,
  //       juros,
  //     );
  //   }
  // }

  // console.log(100 * Math.pow(1 + 13.65 / 100, 2).toFixed(6));
  // console.log('manual', 100 * Math.pow(1 + 6 / 100, (35 - 30) / 30).toFixed(4));

  function calcularValorComJurosDiario2(valor, data, juros) {
    if (data >= 1) {
      return calcularValorComJurosDiario2(
        valor + valor * (juros / 100),
        data - 1,
        juros,
      );
    } else {
      console.log(`valor do produto com juros RS${valor.toFixed(2)}`);
    }
  }

  function submit() {
    const diasDePrazo =
      (new Date(inputRefDataPrazoFim.current.value) -
        new Date(inputRefDataPrazoIncio.current.value)) /
      (1000 * 60 * 60 * 24);
    const diasDePrazoVencido =
      (new Date(inputRefDataVencida.current.value) -
        new Date(inputRefDataPrazoFim.current.value)) /
      (1000 * 60 * 60 * 24);
    console.log(diasDePrazoVencido, diasDePrazo);
    // calcularValorComJurosDiario(100, 30, 45, 2.5);
    calcularValorComJurosDiario2(
      valorDoProduto,
      diasDePrazoVencido,
      jurosDiarios,
    );
    calcularValorComJurosDiario3(
      inputRefValor.current.value,
      diasDePrazoVencido,
      inputRefJuros.current.value,
    );
    calcularValorComJurosDiario4(
      inputRefValor.current.value,
      diasDePrazoVencido,
      inputRefJuros.current.value,
    );
    // console.log(
    //   'altomatico',
    //   calcularValorComJurosMensal(
    //     inputRefValor.current.value,
    //     inputRefValidade.current.value,
    //     inputRefJuros.current.value,
    //   ),
    // );
  }

  function consult() {
    const anoBicesto =
      (new Date(`03/01/${inputRefanoBicesto.current.value}`) -
        new Date(`01/31/${inputRefanoBicesto.current.value}`)) /
      (1000 * 60 * 60 * 24);
    console.log(anoBicesto, inputRefanoBicesto.current.value.length);

    if (anoBicesto >= 30) {
      setValue('Sim');
    } else {
      setValue('Não');
    }
  }

  const handlePreventTypeLetters = (e) => {
    if (!/[0-9]|Backspace/.test(e.key)) e.preventDefault();
  };

  return (
    <div>
      <form>
        <div />
        <br />
        <div>Valor do produto</div>
        <input
          type="text"
          placeholder="valor"
          name="valor"
          ref={inputRefValor}
          onKeyDown={handlePreventTypeLetters}
        />{' '}
        <div />
        <br />
        <div>Data de inicio do prazo</div>
        <input type="date" name="juros" ref={inputRefDataPrazoIncio} /> <div />
        <br />
        <div>Data de Fim do prazo</div>
        <input type="date" name="juros" ref={inputRefDataPrazoFim} /> <div />
        <br />
        <div>Data do pagamento</div>
        <input type="date" name="juros" ref={inputRefDataVencida} /> <div />
        <br />
        <div>juros diario</div>
        <input
          type="text"
          placeholder="juros"
          name="juros"
          ref={inputRefJuros}
          onKeyDown={handlePreventTypeLetters}
        />{' '}
        <div />
        <br />
        <button type="reset">Reset formulario</button>{' '}
        <button type="button" onClick={submit}>
          Calcular juros do produto
        </button>{' '}
      </form>
      <div />
      <br />
      <div>ano bicesto</div>
      <input
        type="number"
        onKeyDown={handlePreventTypeLetters}
        ref={inputRefanoBicesto}
      />{' '}
      <button onClick={consult}>Consultar ano</button> <div />
      <div>
        <h2>{value}</h2>
      </div>
    </div>
  );
}
