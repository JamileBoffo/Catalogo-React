import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import './AdicionarPotionModal.css'
import { PotionService } from "../../services/PotionService";

function AdicionaPotionModal({ closeModal, onCreatePotion }) {
  const form = {
    valor: "",
    nome: "",
    descricao: "",
    img: "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(false);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.img.length &&
        state.nome.length &&
        state.valor.length
    );

    setCanDisable(response);
  };

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  useEffect(() => {
    canDisableSendButton();
  });

  const createPotion = async () => {
    const renomeiaCaminhoImg = (imgPath) => imgPath.split('\\').pop();

    const { nome, descricao, valor, img } = state;

    const potion = {
        nome,
        descricao,
        valor,
        img: `assets/img/${renomeiaCaminhoImg(img)}`
    }

    const response = await PotionService.create(potion);
    onCreatePotion(response);
    closeModal();
}

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaPotionModal">
        <form autoComplete="off">
          <h2> Adicionar ao Catálogo </h2>
          <div>
            <label className="AdicionaPotionModal__text" htmlFor="nome">
              {" "}
              Nome:{" "}
            </label>
            <input
              id="nome"
              placeholder="Amortentia"
              type="text"
              value={state.nome}
              onChange={(e) => handleChange(e, "nome")}
            />
          </div>
          <div>
            <label className="AdicionaPotionModal__text" htmlFor="valor">
              {" "}
              Valor:{" "}
            </label>
            <input
              id="valor"
              placeholder="10,00"
              type="text"
              value={state.valor}
              onChange={(e) => handleChange(e, "valor")}
            />
          </div>
          <div>
            <label className="AdicionaPotionModal__text" htmlFor="descricao">
              {" "}
              Descricao:{" "}
            </label>
            <input
              id="descricao"
              placeholder="Detalhe o produto"
              type="text"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
            />
          </div>
          <div>
            <label
              className="AdicionaPotionModal__text  AdicionaPotionModal__img-label"
              htmlFor="img"
            >
              {!state.img.length ? "Selecionar Imagem" : state.img}
            </label>
            <input
              className=" AdicionaPotionModal__img"
              id="img"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.img}
              required
              onChange={(e) => handleChange(e, "img")}
            />
          </div>

          <button
            className="AdicionaPotionModal__enviar"
            type="submit"
            disabled={canDisable}
            onClick={createPotion}
          >Enviar</button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaPotionModal;
