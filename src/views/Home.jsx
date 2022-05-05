import "./Home.css";
import PotionLista from "../components/PotionLista/PotionLista";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import AdicionaEditaPotionModal from "../components/AdicionaEditaPotionModal/AdicionaEditaPotionModal";
import { ActionMode } from "../constants";

export function Home() {
  const [canShowAdicionaPotionModal, setCanShowAdicionaPotionModal] =
    useState(false);

  const [potionParaAdicionar, setPotionParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [potionParaEditar, setPotionParaEditar] = useState();

  const [potionParaDeletar, setPotionParaDeletar] = useState();

  const [potionEditada, setPotionEditada] = useState();

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleDeletePotion = (potionToDelete) => {
    setPotionParaDeletar(potionParaDeletar);
  };

  const handleUpdatePotion = (potionToUpdate) => {
    setPotionParaEditar(potionParaEditar);
    setCanShowAdicionaPotionModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaPotionModal(false);
    setPotionParaAdicionar();
    setPotionParaDeletar();
    setPotionParaEditar();
    setModoAtual(ActionMode.NORMAL);
  }

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createPotion={() => setCanShowAdicionaPotionModal(true)}
        updatePotion={() => handleActions(ActionMode.ATUALIZAR)}
      />
      <div className="Home__container">
        <PotionLista
          mode={modoAtual}
          potionCriada={potionParaAdicionar}
          potionEditada={potionEditada}
          deletePotion={handleDeletePotion}
          updatePotion={handleUpdatePotion}

        />
        {canShowAdicionaPotionModal && (
          <AdicionaEditaPotionModal
            mode={modoAtual}
            potionToUpdate={potionParaEditar}
            onUpdatePotion={(potion) => setPotionEditada(potion)}
            closeModal={handleCloseModal}
            onCreatePotion={(potion) => setPotionParaAdicionar(potion)}
          />
        )}
      </div>
    </div>
  );
}
