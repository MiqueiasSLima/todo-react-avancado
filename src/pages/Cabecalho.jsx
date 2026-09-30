import '../components/TodoEstilos.css';

function Cabecalho() {
  const anoAtual = new Date().getFullYear();

  return (
    <header className="cabeca">
        Gerenciador de Tarefas
    </header>
  );
}

export default Cabecalho;