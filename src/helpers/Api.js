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

export const Api = {
  baseUrl: "http://localhost:3000",
  ...PotionContext,
};
