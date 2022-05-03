import "./PotionListaItem.css";

export function PotionListaItem({
  potion,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {


  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={(e) => {
        e.stopPropagation();
        onRemove(index);
      }}>
        Remover
      </button>
    );

  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PotionListaItem__badge">{+quantidadeSelecionada}</span>
    );

  return (
    <div className="PotionListaItem" key={`PotionListaItem-${index}`}onClick={() => clickItem(potion.id)}>
      {badgeCounter(+quantidadeSelecionada, index)}

      <div>
        <div className="PotionListaItem__nome">{potion.nome}</div>
        <div className="PotionListaItem__valor">ʛ {potion.valor}</div>
        <div className="PotionListaItem__descricao">{potion.descricao}</div>
        <div className="PotionListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "acoes__adicionar--preencher"
            }`}
            onClick={(e) => {e.stopPropagation();
              onAdd(index);
            }}
          >
            Adicionar
          </button>
          {removeButton(+quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="PotionListaItem__img"
        src={potion.img}
        alt={potion.nome}
      />
    </div>
  );
}
