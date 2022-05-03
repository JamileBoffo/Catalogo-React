import { Api } from "../helpers/Api";
//pegar resposta e converter p json
const parseResponse = (response) => response.json();

const transformPotion = (potion) => {
  return {
    ...potion,
    id: potion._id,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((potions) => potions.map(transformPotion));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformPotion);

export const PotionService = {
  // modelo fetch(url, {metodo}).then
  getLista: () =>
    fetch(Api.potionLista(), { method: "GET" }).then(parseTransformLista),

  getById: (id) =>
    fetch(Api.potionById(), { method: "GET" }).then(parseTransformItem),

  create: (potion) =>
    fetch(Api.createPotion(), { 
      method: "POST", 
      body: JSON.stringify(potion), 
      mode: "cors", 
      headers: {"Content-Type":"application/json"}
    }).then(parseResponse),

  update: (id) =>
    fetch(Api.updatePotionById(), { method: "PUT" }).then(parseResponse),

  delete: (id) =>
    fetch(Api.deletePotionById(), { method: "DELETE" }).then(parseResponse),
};
