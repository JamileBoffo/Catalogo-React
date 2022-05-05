import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import "./AdicionaEditaPotionModal.css";
import { PotionService } from "../../services/PotionService";
import { ActionMode } from '../../constants/index'

function AdicionaEditaPotionModal({ 
  closeModal, 
  onCreatePotion, 
  mode, 
  potionToUpdate, 
  onUpdatePotion 
}) {
  const form = {
    valor: potionToUpdate?.valor ?? "",
    nome: potionToUpdate?.nome ?? "",
    descricao: potionToUpdate?.descricao ?? "",
    img: potionToUpdate?.img ?? "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(false);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.img.length &&
        state.nome.length &&
        String(state.valor).length
    );

    setCanDisable(response);
  };

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  useEffect(() => {
    canDisableSendButton();
  });

  const handleSend = async () => {
    const renomeiaCaminhoImg = (imgPath) => imgPath.split("\\").pop();

    const { nome, descricao, valor, img } = state;

    const potion = {
      ...(potionToUpdate && { _id: potionToUpdate?.id}),
      nome,
      descricao,
      valor,
      img: `./assets/img/${renomeiaCaminhoImg(img)}`,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => PotionService.create(potion) ,
      [ActionMode.ATUALIZAR]: () => PotionService.updtateById(potionToUpdate?.id, potion),
    }

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreatePotion(response),
      [ActionMode.ATUALIZAR]: () => onUpdatePotion(response),
    }

    actionResponse[mode]();

    const reset = {
      valor: "",
      nome: "",
      descricao: "",
      img: ""
    };

    setState(reset)

    closeModal();
  };

  

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaPotionModal">
        <form autoComplete="off">
          <h2> {ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Adicionar ao' } {""} Catálogo </h2>
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
              required
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
              required
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
              required
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
              required
              onChange={(e) => handleChange(e, "img")}
            />
          </div>

          <button
            className="AdicionaPotionModal__enviar"
            type="submit"
            disabled={canDisable}
            onClick={handleSend}
          >
            {ActionMode.NORMAL === mode ? 'Enviar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaPotionModal;
