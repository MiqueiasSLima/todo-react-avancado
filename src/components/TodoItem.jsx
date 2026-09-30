import { memo } from 'react';
import './TodoEstilos.css';

function Item({ tarefa, removerTarefa, setListaTarefas }) {

  const alternarConcluida = () => {
    setListaTarefas((listaAnterior) =>
      listaAnterior.map((item) =>
        item.id === tarefa.id ? { ...item, concluida: !item.concluida } : item
      )
    );
  };

  return (
    <li className="linha">
      <input 
        type="checkbox" 
        checked={Boolean(tarefa.concluida)} 
        onChange={alternarConcluida} 
      />
      <span className={tarefa.concluida ? 'concluida' : ''}> Tarefa: {tarefa.nome}</span> 
      <button className="botao-remover" onClick={() => removerTarefa(tarefa.id)}>REMOVER</button>
    </li>
  );
}

export default memo(Item);