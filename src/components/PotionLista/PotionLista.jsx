import "./PotionLista.css";
import { PotionService } from "../../services/PotionService";
import { useState, useEffect, useCallback } from "react";
import { PotionListaItem } from "../PotionListaItem/PotionListaItem";
import PotionDetalhesModal from "../PotionDetalhesModal/PotionDetalhesModal";
import { ActionMode } from "../../constants/index";

function PotionLista({ 
  potionCriada, 
  mode, 
  updatePotion, 
  deletePotion, 
  potionEditada, 
  potionRemovida 
}) {
  const [potions, setPotions] = useState([]);
  const [potionSelecionada, setPotionSelecionada] = useState({});
  const [potionModal, setPotionModal] = useState(false);

  const onAdd = (potionIndex) => {
    const potion = {
      [potionIndex]: Number(potionSelecionada[potionIndex] || 0) + 1,
    };
    setPotionSelecionada({ ...potionSelecionada, ...potion });
  };

  const onRemove = (potionIndex) => {
    const potion = {
      [potionIndex]: Number(potionSelecionada[potionIndex] || 0) - 1,
    };
    setPotionSelecionada({ ...potionSelecionada, ...potion });
  };

  const getLista = async () => {
    const response = await PotionService.getLista();
    setPotions(response);
  };

  const getPotionById = async (id) => {
    const response = await PotionService.getById(id);
    const mapper = {
      [ActionMode.NORMAL]: () => setPotionModal(response),
      [ActionMode.ATUALIZAR]: () => updatePotion(response),
      [ActionMode.DELETAR]: () => deletePotion(response),
    };
    mapper[mode]();
  };

  const adicionaPotionNaLista = useCallback(
    (potion) => {
      const lista = [...potions, potion];
      setPotions(lista);
  }, [potions]);

  useEffect(() => {
    if (potionCriada && !potions.map(({ id }) => id).includes(potionCriada.id)) {
      adicionaPotionNaLista(potionCriada);
    }
  }, [adicionaPotionNaLista, potionCriada, potions]);

  //após renderizar, chamar a função
  useEffect(() => {
    getLista();
  }, [potionEditada]);

  return (
    <div className="PotionLista">
      {potions.map((potion, index) => (
        <PotionListaItem
          mode={mode}
          key={`PotionListaItem-${index}`}
          potion={potion}
          quantidadeSelecionada={potionSelecionada[index]}
          index={index}
          onAdd={(index) => onAdd(index)}
          onRemove={(index) => onRemove(index)}
          clickItem={(id) => getPotionById(id)}
        />
      ))}
      {potionModal && (
        <PotionDetalhesModal
          potion={potionModal}
          closeModal={() => setPotionModal(false)}
        />
      )}
    </div>
  );
}

export default PotionLista;
