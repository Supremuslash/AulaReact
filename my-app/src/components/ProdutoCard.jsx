
function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="card-produto">
      <img src={imagem || 'https://via.placeholder.com/150'} alt={nome} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p><strong>Preço: R$ {preco}</strong></p>
    </div>
  );
}

export default ProdutoCard;
