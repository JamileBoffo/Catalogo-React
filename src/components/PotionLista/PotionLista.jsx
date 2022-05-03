import './PotionLista.css';
import {potions} from '../../mocks/potions'
import { PotionService } from '../../services/PotionService';
import { useState, /*useEffect*/ } from 'react';
import {PotionListaItem} from '../PotionListaItem/PotionListaItem';
import PotionDetalhesModal from '../PotionDetalhesModal/PotionDetalhesModal';

export function PotionLista() {
  //const [potions, setPotions] = useState([]);
  const [potionSelecionada, setPotionSelecionada] = useState({});
  const [potionModal, setPotionModal] = useState(false)

  /*const getLista = async () => {
    const response = await PotionService.getLista();
    setPotions(response);
  };*/

  const getPotionById = async (potionId) => {
    const response = await PotionService.getById(potionId);
    setPotionModal(response);
  }

  const onAdd = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) + 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
  }

  const onRemove = (potionIndex) => {
    const potion = { [potionIndex]: Number(potionSelecionada[potionIndex] || 0) - 1 };
    setPotionSelecionada({...potionSelecionada, ...potion});
  }
  //console.log(getLista)
  //após renderizar, chamar a função
  /*useEffect(() => {
    getLista()
  }, []);*/

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
        clickItem = {(potionId) => getPotionById(potionId)}
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
