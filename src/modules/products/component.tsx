import { Product } from "../../types";

interface Props {
  item: Product;
}

const pricerFormatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD"
});

function ProductComponent({ item }: Props) {
  const { title, price, image, id } = item;
  return (
    <div className="card" data-testid={id}>
      <div className="card__image-container">
        <img src={image} alt={title} />
      </div>
      <div className="card__content">
        <p className="card__title text--medium">{title}</p>
        <div className="card__info">
          <p className="text--medium">&nbsp;</p>
          <p className="card__price text--medium">
            {pricerFormatter.format(price)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
