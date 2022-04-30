import './PotionListaItem.css';

export function PotionListaItem({ potion, quantidadeSelecionada, index, onRemove, onAdd }) {

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PotionListaItem__badge">{+quantidadeSelecionada}</span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        Remover
      </button>
    );

  return (
    <div className="PotionListaItem" key={`PotionListaItem-${index}`}>
      {badgeCounter(+quantidadeSelecionada, index)}
      
      <div>
        <div className="PotionListaItem__nome">{potion.nome}</div>
        <div className="PotionListaItem__valor">ʛ {potion.valor}</div>
        <div className="PotionListaItem__descricao">{potion.descricao}</div>
        <div className="PotionListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada[index] && 'acoes__adicionar--preencher'
            }`}
            onClick={() => onAdd(index)}
          >
            Adicionar
          </button>
          {removeButton(+quantidadeSelecionada, index)}
        </div>
      </div>
      <img className="PotionListaItem__img" src={potion.img} alt={potion.nome} />
    </div>
  );
}
