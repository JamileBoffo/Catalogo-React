import './PotionListaItem.css';

export function PotionListaItem() {
  const removerItem = (i) => console.log("remover" + i);
  const adicionarItem = (i) => console.log("adicionar" + i);
  const potionSelecionada = [0];
  const index = 0;
  const potion = {
    nome: "Poção Felix Felicis",
    descricao: "É uma poção que é extremamente (muito mesmo) difícil de preparar e, se produzida corretamente, traz sorte para quem a beber por algum tempo.",
    img: require("../../assets/img/felixfelicis.png"),
    valor: 70
  };

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PotionListaItem__badge">{potionSelecionada[index]}</span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        Remover
      </button>
    );

  return (
    <div className="PotionListaItem" key={`PotionListaItem-${index}`}>
      {badgeCounter(potionSelecionada[index], index)}
      
      <div>
        <div className="PotionListaItem__nome">{potion.nome}</div>
        <div className="PotionListaItem__valor">ʛ {potion.valor}</div>
        <div className="PotionListaItem__descricao">{potion.descricao}</div>
        <div className="PotionListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !potionSelecionada[index] && 'acoes__adicionar--preencher'
            }`}
            onClick={() => adicionarItem(index)}
          >
            Adicionar
          </button>
          {removeButton(potionSelecionada[index], index)}
        </div>
      </div>
      <img className="PotionListaItem__img" src={potion.img} alt={potion.nome} />
    </div>
  );
}
