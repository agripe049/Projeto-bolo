import React, { useState } from 'react';
import 'firebase/firestore';
import { db } from './Infra/firebase';
import { collection, addDoc } from 'firebase/firestore';


const FormularioFirebase = () => {    //Estado, começa em 0
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function trocarData (event){   //Função que começa em nulo e troca data pelo valor recebido do input
    setDate(event.target.value);
  };

  function trocarHorario (event) {  //Função que começa em nulo e troca horario pelo valor recebido do input
    setTime(event.target.value);
  };

  const enviarParaFirebase = async () => {
    // Verifica se a data e a hora foram preenchidas
    if (date && time) {
      // Adiciona os dados ao Firestore
      await addDoc(collection(db, "dataHora"), {
        data: date,
        hora: time
      })
      .then(() => {
        console.log("Data e hora enviadas com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao enviar data e hora: ", error);
      });
    } else {
      console.error("Por favor, preencha tanto a data quanto a hora.");
    }
  };

  return (
    <div>
      <h1>Formulário Firebase</h1>
      <form>
        <label htmlFor="date">Data:</label>
        <input type="date" id="date" value={date} onChange={trocarData} required /><br />
        <label htmlFor="time">Hora:</label>
        <input type="time" id="time" value={time} onChange={trocarHorario} required /><br />
        <button type="button" onClick={enviarParaFirebase}>Enviar</button>
      </form>
    </div>
  );
};

export default FormularioFirebase;
