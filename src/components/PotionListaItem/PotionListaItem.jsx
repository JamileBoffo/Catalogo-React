import "./PotionListaItem.css";
import { ActionMode } from "../../constants";

export function PotionListaItem({
  potion,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        Remover
      </button>
    );

  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PotionListaItem__badge">{+quantidadeSelecionada}</span>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`PotionListaItem__tag ${
            mode === ActionMode.DELETAR && "PotionListaItem__tag--deletar"
          }`}
        >
          {" "}
          {mode}{" "}
        </span>
      );
  };

  return (
    <div
      className={`
      PotionListaItem
      ${mode !== ActionMode.NORMAL && "PotionListaItem--disable"}
      ${mode === ActionMode.DELETAR && "PotionListaItem--deletar"}`}
      key={`PotionListaItem-${index}`}
      onClick={() => clickItem(potion.id)}
    >
      {badgeCounter(+quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="PotionListaItem__nome">{potion.nome}</div>
        <div className="PotionListaItem__valor">ʛ {potion.valor}</div>
        <div className="PotionListaItem__descricao">{potion.descricao}</div>
        <div className="PotionListaItem__acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "acoes__adicionar--preencher"
            }`}
            onClick={(e) => {
              e.stopPropagation();
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
