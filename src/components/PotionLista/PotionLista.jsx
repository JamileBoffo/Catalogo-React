import './PotionLista.css';
import { PotionService }  from '../../services/PotionService';
import React, { useState, useEffect } from 'react';
import {PotionListaItem} from '../PotionListaItem/PotionListaItem';
import PotionDetalhesModal from '../PotionDetalhesModal/PotionDetalhesModal';

function PotionLista() {
  const [potions, setPotions] = useState([]);
  const [potionSelecionada, setPotionSelecionada] = useState({});
  const [potionModal, setPotionModal] = useState(false)
  
  const onAdd = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) + 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
  }

  const onRemove = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) - 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
  }
  
  const getLista = async () => {
    const response = await PotionService.getLista();
    setPotions(response);
  };

  const getPotionById = async (id) => {
    const response = await PotionService.getById(id);
    setPotionModal(response);
  }
  //após renderizar, chamar a função
  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="PotionLista">
      {potions.map((potion, index) => (
        <PotionListaItem 
        key={`PotionListaItem-${index}`}
        potion = { potion }
        quantidadeSelecionada = { potionSelecionada[index] }
        index = { index }
        onAdd = { (index) => onAdd(index) }
        onRemove = { (index) => onRemove(index) }
        clickItem = {(id) => getPotionById(id)}
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