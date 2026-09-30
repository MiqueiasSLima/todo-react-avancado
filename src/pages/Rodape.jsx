import '../components/TodoEstilos.css';

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
        <p>&copy; {anoAtual} - Miqueias Lima. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Rodape;