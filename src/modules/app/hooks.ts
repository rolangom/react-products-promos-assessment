import { useState } from "react";
import { canApplyPromo, applyPromo } from "../products/fns";
import { products as defaultProducts } from "../products/data";
import { arePromosNotEq } from "../promos/fns";
import { promotions as defaultPromos } from "../promos/data";
import { Product, Promotion } from "../../types";

type IState = readonly [Product[], Promotion[]];

function applyProductsPromoReducer(state: IState, promo: Promotion): IState {
  const [products, promos] = state;
  const shouldApplyPromo = products.some(canApplyPromo(promo));
  if (shouldApplyPromo) {
    const newProducts = products.map(applyPromo(promo));
    const newPromos = promos.filter(arePromosNotEq(promo));
    return [newProducts, newPromos];
  }
  return state;
}

export function useProductsPromoApp(): [Product[], () => void] {
  const [products, setProducts] = useState(defaultProducts);
  const [promos, setPromos] = useState(defaultPromos);

  const handleApplyPromos = () => {
    // Promos sorted by price descending, in order to apply the highest first
    const sortedPromos = promos.slice().sort((a, b) => b.discount - a.discount);
    const [
      newProducts,
      newPromos
    ] = sortedPromos.reduce(applyProductsPromoReducer, [
      products,
      sortedPromos
    ]);
    setProducts(newProducts);
    setPromos(newPromos);
  };
  return [products, handleApplyPromos];
}
