import './PotionLista.css';
import { PotionService } from '../../services/PotionService';
import { useState, useEffect } from 'react';
import { PotionListaItem } from '../PotionListaItem/PotionListaItem';

export function PotionLista() {
  const [potions, setPotions] = useState([]);
  const [potionSelecionada, setPotionSelecionada] = useState({});

  const getLista = async () => {
    const response = await PotionService.getLista();
    setPotions(response);
  };

  const onAdd = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) + 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
  }

  const onRemove = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) - 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
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
        quantidadeSelecionada = { potionSelecionada }
        index = { index }
        onAdd = { (index) => onAdd(index) }
        onRemove = { (index) => onRemove(index) }
        />
      ))}
    </div>
  );
}
