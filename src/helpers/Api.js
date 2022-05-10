const PotionContext = {
  //URL base
  potionEndpoint: () => `${Api.baseUrl}/potions`,
  //todos os itens
  potionLista: () => `${PotionContext.potionEndpoint()}/all-potions`,
  //busca por ID
  potionById: (id) => `${PotionContext.potionEndpoint()}/one-potion/${id}`,
  //criar novo
  createPotion: () => `${PotionContext.potionEndpoint()}/create-potion`,
  //atualizar item
  updatePotionById: (id) =>
    `${PotionContext.potionEndpoint()}/update-potion/${id}`,
  //deletar item
  deletePotionById: (id) =>
    `${PotionContext.potionEndpoint()}/delete-potion/${id}`,
};

const SacolaContext = {
  getSacola: () => `${PotionContext.potionEndpoint()}/all-carrinho`,
  createSacola: () => `${PotionContext.potionEndpoint()}/create-carrinho`,
  purchase: () => `${PotionContext.potionEndpoint()}/finish-carrinho`,
};

export const Api = {
  baseUrl: "https://reddragon-api.onrender.com/potions",
  ...PotionContext,
  ...SacolaContext,
};
