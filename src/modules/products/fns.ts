import { Promotion, Product } from "../../types";

export const applyPromo = (promo: Promotion) => (it: Product): Product =>
  promo.productId === it.id ? { ...it, price: it.price - promo.discount } : it;

export const canApplyPromo = (promo: Promotion) => (it: Product): boolean =>
  it.id === promo.productId && it.price - promo.discount > 0;
