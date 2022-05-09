import Modal from "../modal/Modal";
import "./DeletePotionModal.css";
import { PotionService } from "../../services/PotionService";

function DeletaPotionModal({ closeModal, potionParaDeletar, onDeletePotion }) {
  const handleDelete = async (potion) => {
    await PotionService.deleteById(potion.id);
    onDeletePotion(potion);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaPotionModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{potionParaDeletar.nome}</b> do
          catálogo?
        </p>

        <img
          className="DeletaPotionModal__img"
          src={potionParaDeletar.img}
          alt={potionParaDeletar.nome}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(potionParaDeletar)}
            className="DeletaPotionModal__confirmar"
          >
            Confirmar
          </button>
          <button onClick={closeModal} className="DeletaPotionModal__cancelar">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaPotionModal;
