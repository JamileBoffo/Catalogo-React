import "./PotionDetalhesModal.css";
import Modal from "../modal/Modal";

function PotionDetalhesModal({ potion, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="PotionDetalhesModal">
        <div>
          <div className="PotionDetalhesModal__nome"> {potion.nome} </div>
          <div className="PotionDetalhesModal__valor">
            {" "}
            ʛ {Number(potion.valor).toFixed(2)}{" "}
          </div>
          <div className="PotionaDetalhesModal__descricao">
            {" "}
            <b>Nome:</b> {potion.nome}{" "}
          </div>
          <div className="PotionDetalhesModal__descricao">
            {" "}
            <b>Descrição:</b> {potion.descricao}{" "}
          </div>
        </div>
        <img
          className="PotionDetalhesModal__img"
          src={potion.img}
          alt={`${potion.nome}`}
        />
      </div>
    </Modal>
  );
}

export default PotionDetalhesModal;
