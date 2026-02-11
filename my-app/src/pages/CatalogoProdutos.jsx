import { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import FormularioProduto from '../components/FormularioProduto';

function CatalogoProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simulação de API com useEffect
  useEffect(() => {
    const buscarProdutos = () => {
      setTimeout(() => {
        const dadosMockados = [
          {
            id: 1,
            nome: "Notebook Gamer",
            preco: "4500.00",
            descricao: "Notebook potente para jogos e trabalho pesado.",
            imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=200"
          },
          {
            id: 2,
            nome: "Mouse Sem Fio",
            preco: "120.00",
            descricao: "Mouse ergonômico com conexão Bluetooth.",
            imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=200"
          }
        ];
        setProdutos(dadosMockados);
        setCarregando(false);
      }, 2000); // 2 segundos de simulação
    };

    buscarProdutos();
  }, []);

  const adicionarProduto = (novoProduto) => {
    const produtoComId = { ...novoProduto, id: Date.now() };
    setProdutos([...produtos, produtoComId]);
  };

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Produtos</h1>
      
      <FormularioProduto aoAdicionar={adicionarProduto} />

      <hr />

      <h2>Produtos Disponíveis</h2>
      {carregando ? (
        <p className="loading">Carregando produtos...</p>
      ) : (
        <div className="lista-produtos">
          {produtos.length === 0 ? (
            <p>Nenhum produto cadastrado.</p>
          ) : (
            produtos.map((produto) => (
              <ProdutoCard 
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                imagem={produto.imagem}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default CatalogoProdutos;
