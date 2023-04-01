import { Promotion } from "../../types";

export const arePromosNotEq = (actionPromo: Promotion) => (
  it: Promotion
): boolean =>
  !(
    it.productId === actionPromo.productId &&
    it.discount === actionPromo.discount
  );
