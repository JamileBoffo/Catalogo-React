import "./Home.css";
import PotionLista from "../components/PotionLista/PotionLista";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import AdicionaEditaPotionModal from "../components/AdicionaEditaPotionModal/AdicionaEditaPotionModal";
import { ActionMode } from "../constants";
import DeletePotionModal from "../components/DeletePotionModal/DeletePotionModal";
import SacolaModal from "../components/SacolaModal/SacolaModal";
import { SacolaService } from "../services/SacolaService";

export function Home() {
  const [canShowAdicionaPotionModal, setCanShowAdicionaPotionModal] =
    useState(false);

  const [potionParaAdicionar, setPotionParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [potionParaEditar, setPotionParaEditar] = useState();

  const [potionParaDeletar, setPotionParaDeletar] = useState();

  const [potionEditada, setPotionEditada] = useState();

  const [potionRemovida, setPotionRemovida] = useState();

  const [canOpenBag, setCanOpenBag] = useState();

  const abrirSacola = async () => {
    const lista = JSON.parse(localStorage.getItem('sacola'));
    const sacola = lista.filter(i => i.quantidade > 0);

    await SacolaService.create(sacola);
    setCanOpenBag(true)
  };

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleDeletePotion = (potionToDelete) => {
    setPotionParaDeletar(potionToDelete);
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
  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createPotion={() => setCanShowAdicionaPotionModal(true)}
        deletePotion={() => handleActions(ActionMode.DELETAR)}
        updatePotion={() => handleActions(ActionMode.ATUALIZAR)}
        openBag={abrirSacola}
      />
      <div className="Home__container">
        <PotionLista
          mode={modoAtual}
          potionCriada={potionParaAdicionar}
          potionEditada={potionEditada}
          deletePotion={handleDeletePotion}
          updatePotion={handleUpdatePotion}
          potionRemovida={potionRemovida}
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
        {potionParaDeletar && (
          <DeletePotionModal
            potionParaDeletar={potionParaDeletar}
            closeModal={handleCloseModal}
            onDeletePotion={(potion) => setPotionRemovida(potion)}
          />
        )}
        {
          canOpenBag &&
          <SacolaModal closeModal={() => setCanOpenBag(false)} />
        }
      </div>
    </div>
  );
}
