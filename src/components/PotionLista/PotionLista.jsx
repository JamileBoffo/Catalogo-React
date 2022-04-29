import './PotionLista.css';
import { potions } from '../../mocks/potions';
import { useState } from 'react';
import { PotionListaItem } from '../PotionListaItem/PotionListaItem';

export function PotionLista() {
  const [potionSelecionada, setPotionSelecionada] = useState({});

  const adicionarItem = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) + 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
  }

  const removerItem = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) - 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
  }

  return (
    <div className="PotionLista">
      {potions.map((potion, index) => (
        <PotionListaItem key={`PotionListaItem-${index}`}/>
      ))}
    </div>
  );
}
