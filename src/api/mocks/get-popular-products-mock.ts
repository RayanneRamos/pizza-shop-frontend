import { http, HttpResponse } from "msw";
import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductstMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    { product: "Pizza de Frango ao Curry", amount: 3 },
    { product: "Pizza de Camarão com Catupiry e Alho-Poró", amount: 6 },
    { product: "Pizza de Linguiça com Rúcula e Limão Siciliano", amount: 9 },
    { product: "Pizza de Carne Seca com Catupiry", amount: 2 },
    {
      product: "Pizza de Linguiça Calabresa com Hortelã e Coalhada Seca",
      amount: 7,
    },
  ]);
});
