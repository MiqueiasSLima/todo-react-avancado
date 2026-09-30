import { useState, useContext, useMemo, useEffect } from 'react';
import { ListaContext } from '../contexts/ListaContexts.jsx';
import Item from "./TodoItem.jsx";

function Mostrar() {
  const { listaTarefas, removerTarefa, setListaTarefas } = useContext(ListaContext);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('');

  const tarefasFiltradas = useMemo(() => {
    if(filtro === 'pendentes'){
      return listaTarefas
        .filter((tarefa) => !tarefa.concluida)
        .filter((item) => item.nome.toLowerCase().includes(busca.toLowerCase()));
    }
    if (filtro === 'concluidas') {
      return listaTarefas
        .filter((tarefa) => tarefa.concluida)
        .filter((item) => item.nome.toLowerCase().includes(busca.toLowerCase()));
    }
    return listaTarefas.filter((item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [listaTarefas, busca, filtro]);

  useEffect(() => {
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
    setBusca('')
  }, [listaTarefas]);

  return (
    <>
      <h3>Lista de Produtos Cadastrados:</h3>
      <h2>Filtrar tarefas</h2>
      <button className="botao-filtrar" onClick={() => setFiltro('todas')}>Todas</button>
      <button className="botao-filtrar" onClick={() => setFiltro('concluidas')}>Concluídas</button>
      <button className="botao-filtrar" onClick={() => setFiltro('pendentes')}>Pendentes</button>

      {listaTarefas.length === 0 ? (
        <p>Nenhum produto adicionado ainda.</p>
      ) : (
        <ul>
          <input 
            type="text" 
            value={busca} 
            onChange={(e) => setBusca(e.target.value)} 
            placeholder="Buscar tarefa..." 
          />
          {tarefasFiltradas.map((tarefa) => (
            <Item
              key={tarefa.id}
              tarefa={tarefa}
              removerTarefa={removerTarefa}
              setListaTarefas={setListaTarefas}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default Mostrar;