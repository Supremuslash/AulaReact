import { useState } from 'react';

function FormularioProduto({ aoAdicionar }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco || !descricao) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
    
    aoAdicionar({ nome, preco, descricao, imagem });
    
    // Limpar formulário
    setNome('');
    setPreco('');
    setDescricao('');
    setImagem('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-produto">
      <h2>Cadastrar Novo Produto </h2>
      <div>
        <label>Nome do Produto:</label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Ex: Teclado Mecânico"
        />
      </div>
      <div>
        <label>Preço:</label>
        <input 
          type="number" 
          value={preco} 
          onChange={(e) => setPreco(e.target.value)} 
          placeholder="Ex: 250.00"
        />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          placeholder="Descrição do produto..."
        />
      </div>
      <div>
        <label>URL da Imagem (opcional):</label>
        <input 
          type="text" 
          value={imagem} 
          onChange={(e) => setImagem(e.target.value)} 
          placeholder="http://..."
        />
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
}

export default FormularioProduto;
