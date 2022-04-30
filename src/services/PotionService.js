import { Api } from "../helpers/Api";
//pegar resposta e converter p json
const parseResponse = (response) => response.json();

export const PotionService = {
  // modelo fetch(url, {metodo}).then
  getLista: () =>
    fetch(Api.potionLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) => fetch(Api.potionById(), { method: "GET" }).then(parseResponse),
  create: () => fetch(Api.createPotion(), { method: "POST" }).then(parseResponse),
  update: (id) => fetch(Api.updatePotionById(), { method: "PUT" }).then(parseResponse),
  delete: (id) => fetch(Api.deletePotionById(), { method: "DELETE" }).then(parseResponse),
};

const transformPotion = (potion) => {
  const id = potion._id
  
  return {
    ...potion,
    id: potion._id
  }
}

const parseTransformLista = (response) =>
  parseResponse(response).then((potions) => potions.map(transformPotion));